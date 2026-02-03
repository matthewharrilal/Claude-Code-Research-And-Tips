import './attio-theme.css'
import { AttioHeader } from './components/AttioHeader'
import { AttioSidebar } from './components/AttioSidebar'
import { AttioTOC } from './components/AttioTOC'
import { AttioBreadcrumbs } from './components/AttioBreadcrumbs'

export default function AttioDocsPage() {
  const breadcrumbs = [
    { label: 'Reference', href: '#' },
    { label: 'Managing data', href: '#' },
    { label: 'Bulk update lists and views' },
  ]

  return (
    <div className="attio-docs min-h-screen bg-white">
      {/* Header */}
      <AttioHeader />

      {/* Three-column layout */}
      <div className="flex">
        {/* Left Sidebar - 240px fixed */}
        <AttioSidebar />

        {/* Main Content */}
        <main className="flex-1 ml-[240px] mr-[200px] min-h-[calc(100vh-56px)] pt-14">
          <div className="max-w-[650px] mx-auto px-8 py-12">
            <article className="attio-content">
              {/* Breadcrumbs */}
              <AttioBreadcrumbs items={breadcrumbs} />

              {/* Title */}
              <h1>Bulk update lists and views</h1>
              <p className="subtitle">
                Edit multiple records at once across your lists and views with bulk actions.
              </p>

              {/* Getting entry IDs */}
              <h2 id="getting-entry-ids">Getting entry IDs</h2>
              <p>
                To perform bulk updates, you'll first need to identify the records you want to modify.
                Entry IDs can be obtained in several ways:
              </p>
              <ul>
                <li>Export your list to CSV and use the entry_id column</li>
                <li>Use the API to query records and extract their IDs</li>
                <li>Select records in the UI and copy their IDs from the URL</li>
              </ul>
              <p>
                Entry IDs are unique identifiers that persist across all views and remain constant
                even when record data changes. They follow the format <code>rec_xxxxxxxxxxxxx</code>.
              </p>

              {/* Performing bulk updates */}
              <h2 id="performing-bulk-updates">Performing bulk updates</h2>
              <p>
                Once you have your entry IDs, you can perform bulk updates through several methods:
              </p>

              <h3 id="using-the-ui">Using the UI</h3>
              <p>
                The quickest way to bulk update is directly in the Attio interface:
              </p>
              <ul>
                <li>Select multiple records using checkboxes or Shift+Click</li>
                <li>Click the "Edit selected" button in the toolbar</li>
                <li>Choose the attribute you want to update</li>
                <li>Enter the new value and confirm</li>
              </ul>

              <h3 id="using-the-api">Using the API</h3>
              <p>
                For programmatic bulk updates, use the Attio API's batch endpoint. This allows you
                to update up to 100 records in a single request:
              </p>
              <pre>
                <code>{`POST /v2/objects/{object}/records/batch
{
  "records": [
    {
      "id": "rec_xxxxxxxxxxxxx",
      "attributes": {
        "status": "active"
      }
    }
  ]
}`}</code>
              </pre>

              {/* Best practices */}
              <h2 id="best-practices">Best practices</h2>
              <p>
                Follow these guidelines to ensure your bulk updates complete successfully:
              </p>
              <ul>
                <li>
                  <strong>Test with small batches first</strong> — Start with 5-10 records to verify
                  your update logic before processing larger sets
                </li>
                <li>
                  <strong>Use filters to target records</strong> — Instead of manually selecting,
                  create a filtered view to automatically select records matching your criteria
                </li>
                <li>
                  <strong>Check for required attributes</strong> — Some attributes have validation
                  rules that may cause individual records to fail
                </li>
                <li>
                  <strong>Monitor rate limits</strong> — API bulk updates are subject to rate
                  limiting; space requests appropriately
                </li>
              </ul>

              {/* Troubleshooting */}
              <h2 id="troubleshooting">Troubleshooting</h2>
              <p>
                If your bulk update encounters errors:
              </p>
              <ul>
                <li>Check that all entry IDs exist and haven't been deleted</li>
                <li>Verify the attribute name matches exactly (case-sensitive)</li>
                <li>Ensure the value type matches the attribute type</li>
                <li>Review the error response for specific record failures</li>
              </ul>
            </article>
          </div>
        </main>

        {/* Right TOC - 200px fixed */}
        <AttioTOC />
      </div>
    </div>
  )
}
