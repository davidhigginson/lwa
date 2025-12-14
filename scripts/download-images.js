const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Image mappings based on the original website content
const imageMappings = [
  {
    originalName: 'South Africa',
    filename: 'south-africa-children.jpg',
    project: 'south-africa-aids-children'
  },
  {
    originalName: 'Digging Wells - India',
    filename: 'india-wells.jpg',
    project: 'india-wells'
  },
  {
    originalName: 'Tanzania food shortage',
    filename: 'tanzania-drought.jpg',
    project: 'tanzania-drought'
  },
  {
    originalName: 'CongoDispensary',
    filename: 'congo-dispensary.jpg',
    project: 'congo-dispensary'
  },
  {
    originalName: 'Homes for poor',
    filename: 'vietnam-homes.jpg',
    project: 'vietnam-homes'
  },
  {
    originalName: 'Rosarians - Borewell',
    filename: 'india-borewell.jpg',
    project: 'india-rosarians-borewell'
  },
  {
    originalName: 'India Lepres',
    filename: 'india-leprosy.jpg',
    project: 'india-leprosy'
  },
  {
    originalName: 'Zambia - Sr Cecilia Tembo',
    filename: 'zambia-mission.jpg',
    project: 'zambia-mission'
  },
  {
    originalName: 'Peru',
    filename: 'peru-mission.jpg',
    project: 'peru-mission'
  }
];

// Common image file extensions to try
const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.JPG', '.JPEG', '.PNG'];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        file.close();
        fs.unlinkSync(filepath);
        return downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        return reject(new Error(`Failed to download: ${response.statusCode}`));
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

async function tryDownloadImage(baseUrl, filename, outputPath) {
  for (const ext of extensions) {
    const url = `${baseUrl}${filename}${ext}`;
    try {
      await downloadImage(url, outputPath);
      return true;
    } catch (err) {
      // Try next extension
      continue;
    }
  }
  return false;
}

async function fetchWebsiteImages() {
  const baseUrl = 'https://www.littlewayassociation.com/';
  const imagesDir = path.join(__dirname, '../public/images/projects');
  
  // Ensure directory exists
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  console.log('Attempting to download images from littlewayassociation.com...\n');
  
  // Try common image filenames based on the website content
  const imageFiles = [
    'SouthAfrica', 'south-africa', 'AIDS', 'aids-children',
    'India', 'india-wells', 'Wells', 'wells',
    'Tanzania', 'tanzania', 'drought', 'food-shortage',
    'Congo', 'congo', 'Dispensary', 'dispensary',
    'Vietnam', 'vietnam', 'Homes', 'homes',
    'Borewell', 'borewell', 'Rosarians', 'rosarians',
    'Leprosy', 'leprosy', 'Lepres', 'lepres',
    'Zambia', 'zambia', 'Cecilia', 'cecilia',
    'Peru', 'peru'
  ];
  
  let downloaded = 0;
  let failed = 0;
  
  // Try downloading with various filename patterns
  for (const imgFile of imageFiles) {
    const outputPath = path.join(imagesDir, `${imgFile.toLowerCase()}.jpg`);
    if (fs.existsSync(outputPath)) {
      continue; // Skip if already exists
    }
    
    const success = await tryDownloadImage(baseUrl, imgFile, outputPath);
    if (success) {
      downloaded++;
    } else {
      failed++;
    }
  }
  
  console.log(`\nDownload complete: ${downloaded} successful, ${failed} failed`);
  console.log('\nNote: Some images may need to be downloaded manually from the website.');
  console.log('Visit https://www.littlewayassociation.com/ and save images to public/images/projects/');
}

fetchWebsiteImages().catch(console.error);


