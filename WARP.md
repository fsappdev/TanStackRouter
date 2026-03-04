# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React application demonstrating TanStack Router integration with Mantine UI components. The app uses Vite as the build tool and features a file-based routing system with a persistent layout (header, sidebar navigation).

## Development Commands

### Core Commands
- `npm run dev` - Start development server (runs on port 3000, auto-opens browser)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Notes
- No test suite is configured in this project
- No linting or type-checking scripts are defined in package.json
- The dev server automatically opens the browser at http://localhost:3000

## Architecture

### Routing System (TanStack Router)
The routing architecture uses a **manual route tree approach** where routes are explicitly imported and composed:

1. **Root Route** (`src/routes/__root.jsx`): Defines the application shell with:
   - `AppShell` layout from Mantine (header + sidebar + main content area)
   - Persistent navigation across all pages
   - Theme toggle (light/dark mode)
   - The root route manually imports all child routes and builds the route tree using `Route.addChildren([])`

2. **Child Routes** (`src/routes/`): Each route file exports a route created with `createRoute()`:
   - Must use `getParentRoute: () => RootRoute` to connect to the root
   - Define their own `path` and `component`
   - Examples: `index.jsx` (path: '/'), `user.jsx` (path: '/user')

3. **Route Registration**: The route tree is assembled in `__root.jsx` at the bottom:
   ```javascript
   export const routeTree = Route.addChildren([
       IndexRoute,
       UserRoute,
       ProfileRoute,
       NewsRoute,
   ])
   ```

### When Adding New Routes
1. Create new route file in `src/routes/`
2. Import `createRoute` and `RootRoute`
3. Define component and export route with `createRoute({ getParentRoute: () => RootRoute, path: '/your-path', component: YourComponent })`
4. Import the new route in `__root.jsx`
5. Add it to the `routeTree` array in `Route.addChildren([])`

### Navigation
- Use TanStack Router's `<Link>` component (imported from '@tanstack/react-router')
- Mantine NavLink components accept `component={Link}` to integrate with routing
- The sidebar navigation in `__root.jsx` demonstrates this pattern

### Styling & UI
- **Mantine v7** is the primary UI framework
- Theme configuration in `src/App.jsx` (colors, fonts, etc.)
- Global Mantine styles imported in `src/main.jsx`
- Uses Tabler Icons for iconography (`@tabler/icons-react`)
- Color scheme managed via Mantine's `useMantineColorScheme()` and `useComputedColorScheme()` hooks

### Application Bootstrap
- Entry point: `src/main.jsx` renders the `App` component
- `src/App.jsx` wraps the application in:
  1. `MantineProvider` (provides theme and styling context)
  2. `RouterProvider` (provides routing context with the router instance)

### Code Language
The codebase contains Spanish comments and UI text. When modifying or creating components, maintain consistency with the existing language used in the codebase.
