 
# Architecture & Component Overview

## Goals
- Clear separation of concerns
- Maintainable and testable components
- Minimal initial bundle; lazy load heavy parts

## Folder layout (example)
/components # UI components (ErrorBoundary, LoadingSpinner...)
/hooks # custom hooks (useDebounce)
/pages # Next.js pages
/lib # small utilities
/styles # global css / tailwind

 

## State & Data flow
- Local state via React `useState` in container components.
- Derived & filtered views computed in parent container then passed down to presentational components.
- For larger app, use Context or Redux if cross-cutting state appears.

## Key design decisions
- **Debounced search** to avoid excessive filtering on every keystroke.
- **ErrorBoundary** to handle rendering errors gracefully.
- **Dynamic import** for charts: faster initial load.
