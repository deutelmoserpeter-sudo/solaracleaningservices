# Daylily Home Cleaning

## Project Overview

Daylily is a single-page marketing website for a residential cleaning company. It is built with TanStack Start, React, TypeScript, and Netlify, with a custom responsive design and a Netlify-powered quote form.

## Architecture

- `src/routes/index.tsx` contains the full landing page, navigation, service content, FAQ interaction, mobile menu, and quote form submission logic.
- `src/routes/__root.tsx` defines the HTML shell, SEO metadata, global stylesheet, and font resources.
- `src/styles.css` contains the complete visual system, responsive layouts, motion, and component styling.
- `public/images/` contains local photography used by the page.
- `public/__forms.html` is the hidden static form Netlify requires to register the React-rendered quote form at build time.
- `src/router.tsx` initializes TanStack Router.

## Coding Conventions

- Use TypeScript and functional React components.
- Keep page sections accessible with semantic HTML, labels, alt text, and visible focus states.
- Store shared colors, fonts, and theme values as CSS custom properties in `src/styles.css`.
- Prefer existing CSS classes over introducing a second styling system.
- Use Lucide icons rather than emoji or text symbols for interface actions.
- Keep all layouts responsive at the existing `980px` and `680px` breakpoints.

## Netlify Forms

The quote form posts URL-encoded data to `/__forms.html`. The form name and every field must stay synchronized between `src/routes/index.tsx` and `public/__forms.html`. If a field is added or renamed, update both files.

## Non-Obvious Decisions

- Photography is stored locally to avoid runtime dependence on third-party image URLs.
- The design takes inspiration from warm, editorial cleaning brands without copying the reference company's identity or content.
- The phone number, email address, service area, and company name are polished placeholders and should be replaced with the owner's real business details before launch.

## Commands

- `pnpm dev` starts local development.
- `pnpm build` creates the production build.

