# Assets

Media used by the portfolio. Only real material belongs here: genuine project visuals, Jesse's own photograph, or properly licensed images. Do not add AI-generated screenshots, fake interface mockups or fake code imagery.

## In use (optimized for the web)

| File | Used for |
|---|---|
| `images/hero/hero-portrait-864.webp`, `hero-portrait-480.webp` | Hero portrait (not lazy-loaded; high fetch priority) |
| `projects/mosich/storefront-2400.webp`, `storefront-1200.webp` | MOSICH cover and detail visual |
| `projects/ecostream/dashboard-1800.webp`, `dashboard-900.webp` | EcoStream cover and detail visual |
| `projects/biometric/login-1586.webp`, `login-800.webp` | Biometric system cover and detail visual |
| `projects/tooth-fixers/dashboard-1585.webp`, `dashboard-800.webp` | Tooth Fixers cover and detail visual |
| `icons/favicon.svg` | "J." favicon |

Each project currently has a single visual, so project detail pages show one editorial image and no gallery.

## Source files

The original, full-resolution source images are kept alongside the optimized versions and are **not** referenced by the site. They are intentionally left out of version control to avoid publishing large unused files; keep them as your masters. Optimized WebP files are generated with `cwebp` (metadata stripped) at roughly quality 84–88:

```bash
cwebp -q 88 -m 6 -sharp_yuv -resize 1800 0 "source.png" -o output-1800.webp
```

## Still pending

| File | Notes |
|---|---|
| `documents/jesse-charles-agu-cv.pdf` | The Download CV button stays hidden until this exists. |
| `images/profile/` | Intentionally empty. No separate About-section portrait is planned. |

## Adding more project imagery later

Add the WebP files, then add entries to that project's `images` array in `script.js`. With one image the detail view shows a single visual; with two or more it shows the first as the lead visual and the rest as a gallery. With none it falls back to the neutral placeholder. Update the card in `index.html` to match.
