# quq99.github.io

Qian Qu's personal site: https://quq99.github.io. Built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com); a GitHub Action builds it and deploys it to GitHub Pages on
every push to `master`.

## Edit

- **Home page text** (intro, featured work, experience, papers, education): `src/data/profile.ts`.
- **Posts**: Markdown in `src/content/blog/<YYYY-MM>/<slug>.md`; the file path is the URL
  (`/blog/<YYYY-MM>/<slug>/`). Front matter: `title`, `date`, `summary`, `tags`, `archived`.
- **Design**: colors, type scale and the page grid are in `src/styles/global.css`.
- **Media**: `public/` (the CompoundingKernel film is `public/media/`).

## Build

Needs Node 22.23 or newer (`.nvmrc` pins 24).

```sh
npm ci
npm run dev       # http://127.0.0.1:4321
npm run build     # -> dist/
```

## Deploy

Push to `master`. The workflow in `.github/workflows/deploy.yml` builds `dist/` and publishes it.
In the repo settings, Pages → Build and deployment → Source must be **GitHub Actions**.

## History

The 2016–2019 Hugo site (source in `quq99/quq99-site`, theme AllinOne) is in this repo's history
before the 2026 rebuild. Its blog posts moved here unchanged and keep their old URLs.

## Credits

The MIT license covers the site's code and text. The CompoundingKernel film and poster come from the
[CompoundingKernel Explorer](https://huggingface.co/spaces/QianQu/CompoundingKernel-Explorer)
(CC BY-NC 4.0). The film's music is two Pixabay tracks (633374 by the_mountain, 606698 by nastelbom)
under the Pixabay Content License, and is covered by neither license.
