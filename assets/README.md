# Assets

This folder holds the media the portfolio expects. Most files are **pending**: they have not been supplied yet, and the site must not substitute invented screenshots or imagery for them. Until a file exists, the site shows a clearly marked neutral placeholder.

## Expected files

| Path | Purpose | Status |
|---|---|---|
| `images/hero/hero-workspace.webp` | Hero visual (real workspace photo, or a properly licensed image) | Pending |
| `images/profile/jesse-charles-agu.webp` | Portrait, if used in the About section | Pending |
| `projects/mosich/storefront.webp` | Real MOSICH screenshot: storefront | Pending |
| `projects/mosich/product.webp` | Real MOSICH screenshot: product page | Pending |
| `projects/mosich/checkout.webp` | Real MOSICH screenshot: checkout | Pending |
| `projects/ecostream/` | Real EcoStream visuals | Pending |
| `projects/biometric/` | Real application screenshots for the Biometric Staff Attendance & Shift Management System | Pending |
| `projects/tooth-fixers/` | Real Tooth Fixers screenshots | Pending |
| `icons/favicon.svg` | Minimal "J." favicon | Done |
| `documents/jesse-charles-agu-cv.pdf` | CV. The Download CV button stays hidden until this file exists. | Pending |

## Swapping a placeholder for a real asset

- **Project imagery:** in `index.html` replace the project's `.media-placeholder` block with an `<img>` that has `alt`, `width`, `height` and `loading="lazy"`. Then add the file to that project's `images` array in `script.js` so the detail view uses it.
- **Hero visual:** the abstract composition in `.hero-visual` is a development fallback. Replace `.hv-art` with the approved image.
- **CV:** add the PDF, then add the "Download CV ↓" button where the TODO comment sits in the hero actions.
- **LinkedIn / GitHub:** add the actions where the TODO comment sits in the contact section, once verified URLs exist.

## Rules

- Use only real material: genuine screenshots of the actual projects, or images Jesse supplies or that are properly licensed.
- Do not add AI-generated screenshots, fake interface mockups, or fake code imagery.
- Prefer WebP (or AVIF where practical). Keep images sized for their display dimensions.
- The `.gitkeep` files exist only so empty folders are tracked. Delete one when its folder gets real content.
