# quq99.github.io

Qian Qu's personal site: https://quq99.github.io. Built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com); a GitHub Action builds it and deploys it to GitHub Pages on
every push to `master`.

Pages: home (`/`), Research (`/research/`), Writing (`/blog/`), CV (`/cv/`).

## Add things

All home, Research and CV text lives in **`src/data/profile.ts`**.

- **A paper**: add an entry to `publications` (title, arXiv link, short `authors` for the CV, full
  `allAuthors`, a one-line `summary` from the abstract, `venue`, `date`, `firstAuthor`, extra links
  in `more`). It shows on the home Research list, the Research page and the CV page; the Research
  page counts update by themselves. Keep the order you want them shown in.
- **Open-source work**: add an entry to `openSource` (Research page).
- **A project on the home page**: add an entry to `projects` (title, years, text, links; `code` for
  a one-line code card). The featured project with the film is `featured`.
- **A post**: add `src/content/blog/<YYYY-MM>/<slug>.md` with front matter `title`, `date`,
  `summary`, `tags` (and `archived: true` only for old posts). The file path is the URL.
- **Emphasis in text**: `**key result**` is set in semibold ink, `_qualifier_` in italics (in a
  heading, gray italics). Use one or two per paragraph; numbers and results, not adjectives.
- **Links** to arXiv, Hugging Face and GitHub get their logo automatically (`IconLink`).
- **Logos** (`public/logos/*.png`) are one-color masks drawn in the text color
  (`src/components/Logo.astro`); make new ones from the original mark, never use an SVG as is.

## Design rules

Paper `#FAF9F5` (the film's background), navy ink `#1B2B45` / `#3D4B63` / `#677184`, one accent:
the seal's vermilion `#C82E2A` (seal and hover only). One typeface (SF Pro on Apple, Inter
elsewhere). Colors, type scale and grid are in `src/styles/global.css`.

## Build

Needs Node 22.23 or newer (`.nvmrc` pins 24).

```sh
npm ci
npm run dev       # http://127.0.0.1:4321
npm run build     # -> dist/
```

On the dev desk (glibc 2.26, too old for current Node), run the same commands in Docker:
`docker run --rm -u "$(id -u):$(id -g)" -e HOME=/tmp/home -v "$PWD":/site -w /site node:24-bookworm-slim npx astro build`
(add `--network none` for builds; it is only needed off for `npm ci`).

## Deploy

Push to `master`. The workflow in `.github/workflows/deploy.yml` builds `dist/` and publishes it.
In the repo settings, Pages → Build and deployment → Source is **GitHub Actions**.

The CV PDF (`public/cv/Qian_Qu_Resume.pdf`) is the phone-free copy from the resume repo
(`make web` in `~/workspace/resume`); copy it here after resume changes.

## History

The 2016–2019 Hugo site (source in `quq99/quq99-site`, theme AllinOne) is in this repo's history
before the 2026 rebuild. Its blog posts moved here unchanged and keep their old URLs.

## Credits

The MIT license covers the site's code and text. The CompoundingKernel film and poster come from the
[CompoundingKernel Explorer](https://huggingface.co/spaces/QianQu/CompoundingKernel-Explorer)
(CC BY-NC 4.0). Logos and icons: see `src/components/Logo.astro` (Font Awesome Free icons are CC BY 4.0,
https://fontawesome.com/license/free). The film's music is two Pixabay tracks (633374 by the_mountain, 606698 by nastelbom)
under the Pixabay Content License, and is covered by neither license. Logos belong to their owners
and are used only to name the organization next to it.
