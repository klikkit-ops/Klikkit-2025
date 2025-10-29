# Klikkit Relaunch – Build Specification

## Overview
Rebuild **klikkit.co.uk** into a modern, AI-enhanced digital consultancy site.  
The goal is to position Klikkit as a “Tech-Forward Solo Expert” — combining premium design with smart automation and recurring revenue services.

---

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Styling:** TailwindCSS
- **CMS:** Supabase (preferred) or Sanity for dynamic content (services, blogs, portfolio)
- **Hosting:** Vercel
- **Database:** Supabase (for chatbot logs, contact forms)
- **AI Provider:** OpenAI API (`gpt-5-turbo` or `gpt-4o-mini`)
- **Email / Form Backend:** Resend or SendGrid
- **Analytics:** Google Analytics 4 + Search Console
- **SEO:** Schema.org markup, XML sitemap, Core Web Vitals optimized
- **Auth (optional):** Supabase Auth for client dashboard (future phase)
- **PWA:** Service worker, manifest, offline caching

---

## Site Structure
| Page | Purpose |
|------|----------|
| `/` | Hero intro, service overview, CTA to contact |
| `/services` | Lists all three service tiers |
| `/services/[slug]` | Dedicated service detail page |
| `/portfolio` | Case studies (CMS collection) |
| `/blog` | SEO content hub |
| `/contact` | AI-assisted contact form and lead capture |
| `/privacy` & `/terms` | Legal pages |

---

## Dynamic Features

### AI Chatbot
- **Goal:** Act as Klikkit’s virtual consultant helping visitors choose the right service tier.
- **Model:** GPT-5-Turbo (or GPT-4o-mini for cost efficiency)
- **Backend:** `/api/chat.ts`
- **Logic:**
  - Reads `PricingModel.md` data to tailor responses.
  - Logs interactions to Supabase (`user_query`, `bot_reply`, `timestamp`).
  - Provides quick-reply buttons (“Tell me about SEO packages”, etc.).
- **Prompt Template:** You are Klikkit’s friendly digital expert.
Help local businesses decide which service tier best suits their needs.
Keep answers short, confident, and value-driven.
Offer to connect them via the contact form if ready to proceed.

### AI-Assisted Content
- Optional server action that can generate short SEO-optimized blurbs for blogs or case studies using the OpenAI API.

### Personalization
- Store last visited pages and adjust CTA text dynamically (e.g. “Ready to upgrade your Growth Engine site?”).

---

## Integrations
- **Supabase**: for blog posts, portfolio items, chatbot logs, contact form submissions.
- **Resend / SendGrid**: for sending inquiry confirmations.
- **Google Analytics 4**: embed via `NEXT_PUBLIC_GA_ID`.
- **Google Business Profile link** in footer and contact page.

---

## Deliverables
- Complete responsive Next.js PWA
- CMS schema + API integration
- Functional chatbot
- Seed content (services, 2 blogs, 1 case study)
- `.env.example` file for keys
- Deployment ready on Vercel