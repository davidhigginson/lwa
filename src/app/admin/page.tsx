import Link from 'next/link'

export default function AdminPage() {
  const hasSanityConfig = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Content Management
          </h1>
          
          {hasSanityConfig ? (
            <>
              <p className="text-lg text-gray-600 mb-8">
                Manage your website content through Sanity CMS
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Sanity Studio
                </h2>
                <p className="text-gray-700 mb-4">
                  Access the Sanity Studio to edit all your content in a visual interface.
                </p>
                <Link
                  href="/studio"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Open Sanity Studio →
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="text-lg text-gray-600 mb-8">
                Sanity CMS is not configured yet. Please set up your Sanity project.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Setup Required
                </h2>
                <p className="text-gray-700 mb-4">
                  To use Sanity CMS, you need to:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                  <li>Create a Sanity project at <a href="https://www.sanity.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">sanity.io</a></li>
                  <li>Get your Project ID</li>
                  <li>Add <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_SANITY_PROJECT_ID</code> to your environment variables</li>
                  <li>Add <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_SANITY_DATASET</code> (default: "production")</li>
                </ol>
                <p className="text-sm text-gray-600">
                  See <code className="bg-gray-100 px-1 rounded">SANITY_SETUP.md</code> for detailed instructions.
                </p>
              </div>
            </>
          )}
          
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Content Types
            </h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Site Configuration</strong> - Site settings, navigation, contact info</p>
              <p><strong>Project Categories</strong> - Categories for organizing projects</p>
              <p><strong>Projects</strong> - Individual project information</p>
              <p><strong>About Page</strong> - About page content and sections</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
