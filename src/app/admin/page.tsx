export default function AdminPage() {
  return (
    <div style={{ 
      padding: "2rem", 
      maxWidth: "800px", 
      margin: "0 auto",
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.6"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>TinaCMS Admin Interface</h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", color: "#666" }}>
        The admin interface is not available because the TinaCMS build files were not generated.
      </p>
      
      <div style={{ 
        backgroundColor: "#f0f7ff", 
        border: "1px solid #0066cc", 
        borderRadius: "8px", 
        padding: "1.5rem",
        marginBottom: "2rem"
      }}>
        <h2 style={{ fontSize: "1.5rem", marginTop: 0, marginBottom: "1rem" }}>Why is this happening?</h2>
        <p>
          The admin interface requires TinaCloud to be properly configured and your branch to be indexed.
          Currently, your &apos;main&apos; branch is not indexed in TinaCloud, so the build skipped generating the admin files.
        </p>
      </div>
      
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>How to fix this:</h2>
        <ol style={{ paddingLeft: "1.5rem" }}>
          <li style={{ marginBottom: "0.75rem" }}>
            Go to{" "}
            <a 
              href="https://app.tina.io/projects/cdd00442-9e62-469b-9608-6695495f5a12/configuration"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0066cc", textDecoration: "underline" }}
            >
              your TinaCloud configuration page
            </a>
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            Find the &quot;1 branch unindexed&quot; section and click on it to trigger indexing
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            Wait for indexing to complete (this may take 5-15 minutes)
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            Once indexed, redeploy your site on Vercel
          </li>
          <li>
            The admin interface will be available at <code style={{ 
              backgroundColor: "#f5f5f5", 
              padding: "2px 6px", 
              borderRadius: "3px",
              fontFamily: "monospace"
            }}>/admin</code> once the build completes
          </li>
        </ol>
      </div>
      
      <div style={{ 
        backgroundColor: "#f9f9f9", 
        border: "1px solid #ddd", 
        borderRadius: "8px", 
        padding: "1.5rem"
      }}>
        <h2 style={{ fontSize: "1.5rem", marginTop: 0, marginBottom: "1rem" }}>For local development:</h2>
        <p style={{ marginBottom: 0 }}>
          Run <code style={{ 
            backgroundColor: "#f5f5f5", 
            padding: "2px 6px", 
            borderRadius: "3px",
            fontFamily: "monospace"
          }}>npm run dev</code> to access the admin interface locally. 
          The admin interface works in development mode without TinaCloud.
        </p>
      </div>
    </div>
  );
}
