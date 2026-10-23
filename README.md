# Design System

Playground de componentes con React, TypeScript y Vite.

## Desarrollo

Requiere Node.js 24. Desde la raíz del repositorio:

```bash
npm ci
npm run dev
```

Para verificar el proyecto:

```bash
npm run lint
npm run build
```

La aplicación de ejemplo vive en `src/playground/`; los componentes reutilizables y los tokens están en `src/components/` y `src/tokens/`.

## GitHub Pages

El workflow `.github/workflows/deploy.yml` compila la raíz al subir cambios a `badges` y publica `dist/`. Configura **Settings → Pages → Build and deployment → Source: GitHub Actions**. La URL del proyecto usa el prefijo `/system-design/` configurado en `vite.config.ts`.
