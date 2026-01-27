"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Try to redirect to the admin index.html
    // If it doesn't exist, the browser will show a 404, but we'll catch it
    const checkAdmin = async () => {
      try {
        const response = await fetch("/admin/index.html", { method: "HEAD" });
        if (response.ok) {
          window.location.href = "/admin/index.html";
          return;
        }
      } catch (error) {
        // File doesn't exist, show the message below
      }
    };
    
    checkAdmin();
  }, [router]);

  return (
    <div style={{ 
      padding: "2rem", 
      maxWidth: "800px", 
      margin: "0 auto",
      fontFamily: "system-ui, sans-serif"
    }}>
      <h1>TinaCMS Admin Interface</h1>
      <p>The admin interface is not available because the TinaCMS build files were not generated.</p>
      
      <h2>Why is this happening?</h2>
      <p>
        The admin interface requires TinaCloud to be properly configured and the branch to be indexed.
        Currently, your branch may not be indexed in TinaCloud, so the build skipped generating the admin files.
      </p>
      
      <h2>How to fix this:</h2>
      <ol>
        <li>
          Go to{" "}
          <a 
            href="https://app.tina.io/projects/cdd00442-9e62-469b-9608-6695495f5a12/configuration"
            target="_blank"
            rel="noopener noreferrer"
          >
            your TinaCloud configuration
          </a>
        </li>
        <li>Ensure your &apos;main&apos; branch is indexed/active</li>
        <li>Redeploy your site on Vercel</li>
        <li>The admin interface will be available at <code>/admin</code> once the build completes</li>
      </ol>
      
      <h2>For local development:</h2>
      <p>
        Run <code>npm run dev</code> to access the admin interface locally. 
        The admin interface works in development mode without TinaCloud.
      </p>
    </div>
  );
}
