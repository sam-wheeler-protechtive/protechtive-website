# ProTechtive LLC — Website

Marketing + blog site for protechtive.net. Owner: Sam Wheeler (sam.wheeler@protechtive.net).

## Stack

- **Next.js 16** — App Router, `output: 'export'` (fully static, no server runtime)
- **Tailwind CSS v4** — with `@tailwindcss/typography` for blog prose
- **MDX** — blog posts via `next-mdx-remote`, parsed with `gray-matter`
- **Cloudflare Pages** — hosting (free tier, commercial use allowed)
- **GitHub Actions** — CI/CD on push to `main`

## Brand

- **Gold:** `#F5C022` — primary accent, CTAs, highlights
- **Navy dark:** `#1E4057` — headings, footer background
- **Navy mid:** `#2D5F7A` — body links, icon backgrounds, nav hover
- Logo: `public/logo.png` (shield + "ProTechtive" wordmark)

## Project Structure

```
src/
  app/
    page.tsx          # Homepage (hero, services, about, CTA)
    blog/
      page.tsx        # Blog listing
      [slug]/page.tsx # Individual post
    contact/page.tsx  # Contact page
  components/
    Nav.tsx           # Sticky header with mobile menu
    Footer.tsx        # Dark navy footer
  content/blog/       # MDX blog posts — add new ones here
  lib/
    blog.ts           # getAllPosts() and getPost() helpers
```

## Adding a Blog Post

Create `src/content/blog/{slug}.mdx`:

```mdx
---
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "120–155 char SEO description with target keyword"
tags: ["Tag1", "Tag2"]
author: "Sam Wheeler"
---

Content here...
```

The filename (minus `.mdx`) becomes the URL: `/blog/{slug}`.

## Build & Dev

```bash
npm install
npm run dev     # localhost:3000
npm run build   # outputs to out/ (static export)
```

## Deployment

**Automatic:** Push to `main` → GitHub Actions → `npm run build` → deploys `out/` to Cloudflare Pages.

**Manual (emergency):**
```bash
npm run build
npx wrangler pages deploy out --project-name protechtive-website
```

## Infrastructure

| Resource | Value |
|---|---|
| Cloudflare account ID | `9390328f3a6ba0d1b0cdf8c4d0cb9888` |
| Cloudflare Pages project | `protechtive-website` |
| Pages URL | `protechtive-website.pages.dev` |
| Custom domain | `protechtive.net` |
| GitHub org | `sam-wheeler-protechtive` |
| GitHub repo | `sam-wheeler-protechtive/protechtive-website` |

## GitHub Actions Secret Required

`CLOUDFLARE_API_TOKEN` — Cloudflare API token with **Cloudflare Pages: Edit** permission.
Set at: github.com/sam-wheeler-protechtive/protechtive-website/settings/secrets/actions

## Automated Blog Posts

A Claude Code remote routine (`trig_01AiVgpLZ56vnV2NkZCEqR9v`) runs every **Monday at 14:00 UTC** (9am CDT / 8am CST). It clones this repo, writes a new cybersecurity blog post in MDX format targeting a B2B keyword, verifies the build, and pushes to `main`. GitHub Actions then deploys it automatically.

Manage at: https://claude.ai/code/routines/trig_01AiVgpLZ56vnV2NkZCEqR9v

Blog topic rotation (avoid duplicates when writing new posts):
- Zero Trust architecture
- SOC 2 readiness
- HIPAA compliance
- NIST CSF adoption
- Incident response planning
- Security risk assessments
- vCISO value and ROI
- Vendor risk management
- Building a security program from scratch
- Cloud security posture management
