// src/components/LoadingSpinner.tsx
import React from "react";

export default function LoadingSpinner({ label = "Loading..." }: { label?: string }) {
  return (
    <div role="status" aria-live="polite" className="flex items-center gap-3 p-4">
      <svg
        className="w-6 h-6 animate-spin"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.2" />
        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span>{label}</span>
    </div>
  );
}
