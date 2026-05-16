# PWA Icons Required

Place the following icon files in this directory:

- `icon-192.png` — 192×192 px PNG (used by Android, Chrome install prompt)
- `icon-512.png` — 512×512 px PNG (used by splash screens, app stores)

Both are declared with `purpose: "any maskable"` in `public/manifest.json`.

The icons are referenced in:
- `public/manifest.json`
- `src/app/layout.tsx` (apple-touch-icon)

Until real icons are added the PWA manifest will still be valid but the install
prompt may show a blank/default icon.
