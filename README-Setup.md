
# Shadcn Project Setup Instructions

This codebase is structured following Shadcn's best practices. If you are starting from scratch, follow these steps:

## 1. Initialize the project
```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
```

## 2. Run Shadcn CLI
```bash
npx shadcn-ui@latest init
```

## 3. Configure Path Aliases
Ensure your `tsconfig.json` includes:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## 4. Components Directory
It is important to use the `/components/ui` folder for shared UI primitives because:
- **Consistency**: It follows the community standard for Shadcn components.
- **Organization**: Keeps core layout logic separate from reusable design system components.
- **Maintainability**: Makes it easier to swap out or upgrade UI libraries across the entire project.

## 5. Integrating the Loader
Simply copy `3d-box-loader-animation.tsx` into your `components/ui` directory and import it wherever needed!
