# Supabase Schema for Klikkit Relaunch

This schema supports dynamic content, chatbot logging, and contact form storage.  
All tables use `id` as UUID primary key, `created_at` and `updated_at` timestamps with default `now()`.

---

## 1. `services`
Stores details of the three main service tiers.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `slug` | text | URL-friendly identifier (e.g. "digital-launchpad") |
| `title` | text | Service name |
| `subtitle` | text | Short tagline or one-liner |
| `description` | text | Markdown/HTML content describing the service |
| `price_setup` | numeric | One-time setup fee |
| `price_monthly` | numeric | Monthly subscription amount |
| `features` | jsonb | List of feature strings |
| `tier_order` | int | 1, 2, 3 – for sorting |
| `active` | boolean | Whether this service is visible on site |
| `created_at` | timestamptz | Default now() |

**Example insert:**
```sql
INSERT INTO services (slug, title, subtitle, price_setup, price_monthly, features, tier_order, active)
VALUES ('digital-launchpad', 'Digital Launchpad', 'Perfect for startups', 750, 150,
'["5-page PWA website","AI-assisted content","Basic chatbot","SEO setup","Hosting & security"]',1,true);