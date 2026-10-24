# Jesse Charles-Agu — Portfolio

Personal portfolio of **Jesse Charles-Agu**: Software Engineer · Data Analyst · Computer Scientist.

> Building technology for real-world problems.

## Status

The Hybrid Premium redesign lives on the `redesign/hybrid-premium` branch and replaces the earlier version of the site. Some assets are still pending (see [assets/README.md](assets/README.md)); until they are supplied the site shows clearly marked placeholders instead of project imagery, and the CV, LinkedIn and GitHub links are intentionally not shown.

## Tech

A deliberately lightweight static site with no framework and no build step.

- HTML5
- CSS3 (custom properties, Grid)
- Vanilla JavaScript: navigation, scroll reveal, and a hash-routed project detail view (`#project/<slug>`)
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) via Google Fonts
- Deployed on Vercel
- Git and GitHub for version control

## Project structure

```
.
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/        hero and profile imagery
│   ├── projects/      per-project screenshots
│   ├── icons/         favicon and icons
│   └── documents/     CV (when supplied)
├── README.md
└── LICENSE
```

See [assets/README.md](assets/README.md) for the expected media files and their current status.

## Featured projects

In order of prominence:

1. **MOSICH** — production e-commerce platform for a women's fashion brand. Built with Next.js, TypeScript, PostgreSQL (Neon), Clerk, Paystack and Vercel. Live at <https://www.mosichng.com>.
2. **EcoStream** — a real-time intelligent streaming system that combines browser APIs and carbon-intensity data to generate adaptive video-quality recommendations.
3. **Biometric Staff Attendance & Shift Management System** — a role-based desktop system for staff attendance and shift management, built with Java, JDBC, MySQL and DigitalPersona fingerprint integration.
4. **Tooth Fixers** — a dental-clinic application supporting CRUD operations for patient records, with a responsive interface for staff access across devices.

## Running locally

No install step is needed. Serve the folder with any static server, for example:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Content policy

The portfolio only states what can be verified. It does not include invented projects, metrics, credentials, screenshots or client claims, and missing assets are shown as clearly marked placeholders until the real files are supplied.

## License

Released under the [MIT License](LICENSE).
