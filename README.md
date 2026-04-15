# estudiodefotografia.info

Base editorial estática en Astro para relanzar `estudiodefotografia.info` con una arquitectura nueva, diseño más fuerte y cobertura de URLs con tráfico histórico.

## Qué hay montado

- Home editorial.
- Índice general de guías.
- Hubs por categoría.
- Cobertura publicada para todas las URLs `rewrite_same` del inventario de migración.
- Sitemap XML y `robots.txt`.
- Redirecciones básicas en `public/_redirects`.

## Comandos

```bash
npm run dev
npm run build
npm run preview
```

## Nota sobre Windows y rutas de red

En este workspace hubo problemas con `npm` y dependencias ESM al trabajar directamente sobre una ruta de red UNC.

La forma estable de trabajar aquí es:

1. Mapear la ruta de red a una unidad, por ejemplo `Y:`.
2. Ejecutar instalación y build desde esa unidad mapeada.

Ejemplo:

```powershell
net use Y: \\192.168.0.21\clank /persistent:no
Set-Location Y:\.hermes\workspace\webs\122-estudiodefotografia.info
npm run build
```

## Archivos clave

- `src/pages/index.astro`
- `src/pages/[...slug].astro`
- `src/data/site.ts`
- `src/styles/global.css`
- `Migration/urls-a-salvar.csv`
- `Migration/estrategia-migracion-estudiodefotografia.md`
