// src/components/NoResults.tsx
import React from "react";

export default function NoResults({ query }: { query?: string }) {
  return (
    <div role="status" aria-live="polite" className="p-6 text-gray-700">
      <p>No results found. That&apos;s all we have.</p>
      {query ? <p className="mt-2">We couldn't find anything for: <strong>{query}</strong></p> : <p className="mt-2">There is nothing to display.</p>}
    </div>
  );
}
