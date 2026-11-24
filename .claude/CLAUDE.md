# quq99.github.io (Qian Qu's personal site)

Public site at https://quq99.github.io, repo `quq99/quq99.github.io` (public). Astro + Tailwind;
`README.md` says where every kind of content goes. Read it first.

## How to talk to the user

Lead with the result. Short, plain sentences, simple words. Say plainly what is live and what
still needs the user.

## Content rules

- Facts only from the user's real experience, the same facts as the resume (`~/workspace/resume`,
  `Qian_Qu_Resume.tex`). Never invent titles, dates, metrics or scope; ask when a number is missing.
- Public-level only: no internal system names, tickets, costs or internal links. Board ranks carry
  an "as of" date. Paper summaries come from the paper's own abstract.
- No phone number anywhere on the site (the CV PDF is the `make web` copy).

## Design rules (user-approved, 2026-11)

- 简洁而不简单: quiet, refined, Apple-like. One color family (navy ink in three shades on paper
  `#FAF9F5`) plus one accent, the seal vermilion, used only for the seal and hover. Color may be
  added only where it carries information (e.g. inside a chart).
- Hierarchy by weight, shade, italics and space: `**…**` for key results, `_…_` for qualifiers.
- Logos are one-color masks in the text color (two-tone only for Hugging Face: white face).
- Top bar: Research, Writing, CV (each a real page); the name and seal go home.
- Check every change with screenshots (light/dark, desktop/mobile) before pushing.

## Build and deploy

The dev desk's glibc (2.26) is too old for current Node: build in Docker
(`node:24-bookworm-slim`, `--network none` for builds). Screenshots: Playwright image
`mcr.microsoft.com/playwright:v1.65.1-noble`, serving `dist/` through request routing (no server,
no published port). Any dev server binds 127.0.0.1 only.

Pushing to `master` deploys (GitHub Actions → Pages). The user has OK'd pushing site changes to
`master` directly. Commits are authored `quq99 <eequq99@gmail.com>` (repo-local config).
