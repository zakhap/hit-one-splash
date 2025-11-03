# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static Next.js 16 waitlist application for HitOne built with React 19, TypeScript, and Privy authentication. The project follows the Next.js App Router architecture and is configured for static export. Uses minimal web1-style design with very little CSS.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build static site (outputs to /out directory)
npm run build

# Run linter
npm run lint
```

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router, static export mode)
- **React**: 19.2.0
- **TypeScript**: 5.x with strict mode enabled
- **Authentication**: Privy React Auth 3.5.0
- **Styling**: Minimal CSS (no framework) - web1 aesthetic with monospace font
- **Fonts**: Geist Sans and Geist Mono loaded but monospace used for web1 style
- **Linting**: ESLint 9 with Next.js config

## Architecture

### File Structure

- `app/` - Next.js App Router directory (not `pages/`)
  - `layout.tsx` - Root layout with Privy provider, font configuration and metadata
  - `providers.tsx` - Client-side Privy provider wrapper
  - `page.tsx` - Waitlist page with authentication (client component, minimal inline styles)
  - `globals.css` - Minimal global CSS (body + button styles only, ~20 lines)

### Key Patterns

**Static Export Configuration**:
- Next.js is configured with `output: 'export'` in next.config.ts
- Images use `unoptimized: true` for static compatibility
- Build outputs to `/out` directory as pure static HTML/CSS/JS

**Privy Authentication**:
- Privy provider wraps the app in `app/providers.tsx` (client component)
- Environment variable `NEXT_PUBLIC_PRIVY_APP_ID` required (see .env.local.example)
- Main page uses `usePrivy()` hook for authentication state
- Authentication flow: login button → Privy modal → success state with user email

**Client Components**:
- `providers.tsx` and `page.tsx` use `'use client'` directive
- Root layout remains server component, wraps children with client Providers

**Path Aliases**: Use `@/*` to reference files from root (configured in tsconfig.json)

**Styling Approach**:
- Minimal web1 aesthetic - avoid adding complex CSS or Tailwind classes
- Use inline styles in components where needed (see page.tsx for reference)
- globals.css contains only basic resets and button styles (~20 lines)
- Monospace font throughout for retro/minimal feel
- Keep UI extremely simple - plain text, basic buttons, no fancy components

**TypeScript Configuration**:
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler (not node/node16)
- JSX: react-jsx (not preserve)

**ESLint Configuration**:
- Uses flat config format (eslint.config.mjs) with ESLint 9
- Applies Next.js core-web-vitals and TypeScript rules
- Custom ignore patterns for .next, out, build directories

## Environment Setup

1. Copy `.env.local.example` to `.env.local`
2. Add your Privy App ID from https://dashboard.privy.io
3. Run `npm run dev` to start development

**Node.js**: Requires Node.js 20+ (as per @types/node dependency)

**Package Manager**: Uses npm (package-lock.json present)
