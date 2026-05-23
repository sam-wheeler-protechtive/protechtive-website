# ProTechtive LLC — Website

Marketing and blog site for [ProTechtive LLC](https://protechtive.net), a cybersecurity consulting firm.

## Stack

- **Framework:** Next.js (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Blog:** MDX files in `src/content/blog/`
- **Hosting:** Cloudflare Pages

## Development

```bash
npm install
npm run dev
```

## Adding a Blog Post

Create a new `.mdx` file in `src/content/blog/`:

```md
---
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "SEO meta description, 120–155 characters"
tags: ["Tag1", "Tag2"]
author: "Sam Wheeler"
---

Post content here...
```

The filename (without `.mdx`) becomes the URL slug.

## Deployment

Pushes to `main` auto-deploy via GitHub Actions → Cloudflare Pages.

```bash
npm run build   # outputs to out/
```
