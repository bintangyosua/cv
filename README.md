# Resume-vuepress

![](https://img.shields.io/badge/build-passing-brightgreen.svg)
![](https://img.shields.io/badge/VuePress-v1.0.2-orange.svg)
![](https://img.shields.io/badge/license-MIT-%23373737.svg)

## Introduction

This project allows you to write your personal resume using Markdown and deploy it as a static, web-accessible page using VuePress.

Live Preview：[cv.bintangyosua.my.id](https://cv.bintangyosua.my.id)

Based On [Siricee/Resume-vuepress](https://github.com/Siricee/Resume-vuepress)<br>

## Usage

```bash
git clone https://github.com/bintangyosua/cv.git
cd cv
pnpm install
```

Modify the `README.md` file inside the `resume` folder based on the `scaffold.md` template, then run:

```bash
pnpm run dev 	# Development Preview
pnpm run build	# Build static site
```

## Exporting to PDF

Open the site in Chrome → Right-click → Print → Save as PDF

Note: In print settings, uncheck "Headers and Footers" to avoid date/title artifacts.

## Deployment

This project uses GitHub Actions and GitHub Pages for automatic deployment.
For details, refer to the official VuePress documentation.

For other deployment methods, see: VuePress Docs | Deployment

## Development Notes

This project is built with VuePress v1.0.2, and follows the recommended directory structure from the official documentation.

If you encounter any issues, refer to the [VuePress official guide](https://v1.vuepress.vuejs.org/guide/).

## Conventions

All default pages in any folder must be named README.md, and this must not be changed, as per VuePress conventions.

Please note:

- The root-level `README.md` is this project documentation.
- The `resume/README.md` contains the actual resume content.
