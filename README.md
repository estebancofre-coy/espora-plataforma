# espora-plataforma

Plataforma pública ESPORA (Economía Social, Solidaridad, Precios, Orgánicos, Residuos y Alimentación): iniciativas de investigación, formación e innovación territorial en Aysén.

Sitio estático de difusión (HTML/CSS/JS, sin build ni backend). **No publica datos ni resultados.**

## Estructura

- `index.html` — landing pública (plataforma, marco FIUT, seis líneas, menú de proyectos con filtros, participación, ética).
- `assets/styles.css`, `assets/main.js`, `assets/favicon.svg`
- Contacto: <mailto:esteban.cofre@uaysen.cl>
- Autor de la plataforma: Dr. Esteban Cofré-Morales, Académico del Departamento de Ciencias Sociales y Humanidades.
- `reference/espora-plataforma.source.html` — archivo de referencia suministrado (contenido y diseño de origen). No se sirve como página.
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json` — contexto de producto y sistema visual.

## Relación con el observatorio

La iniciativa **Observatorio Territorial de Economía Social y Alimentación** vive en un repositorio separado (`estebancofre-coy/observatorio-espora`) y su sitio (<https://estebancofre-coy.github.io/observatorio-espora/>) es actualmente una **herramienta de captura de datos para uso en terreno**, no un visor público de resultados. Este sitio solo la enlaza como tal.

## Ver localmente

Abrir `index.html` en un navegador, o servir la carpeta: `npx serve .`

## Publicación

GitHub Pages publica desde `main` / raíz: <https://estebancofre-coy.github.io/espora-plataforma/>.

## Pendientes

- Verificación institucional de afirmaciones del contenido suministrado (anclaje FIUT, colaboración FAO Chile, referencias citadas).
