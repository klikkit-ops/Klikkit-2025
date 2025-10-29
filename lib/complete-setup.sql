-- Complete Klikkit 2025 Database Setup
-- Run this entire script in Supabase SQL editor

-- Step 1: Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Step 2: Create all tables
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  description TEXT NOT NULL,
  price_setup NUMERIC NOT NULL,
  price_monthly NUMERIC NOT NULL,
  features JSONB NOT NULL DEFAULT '[]',
  tier_order INTEGER NOT NULL,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS portfolio_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  project_url TEXT,
  technologies TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image TEXT,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  service_interest TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS chat_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_query TEXT NOT NULL,
  bot_reply TEXT NOT NULL,
  session_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Step 3: Create indexes
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_active ON services(active);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio_items(featured);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_chat_logs_created_at ON chat_logs(created_at);

-- Step 4: Insert sample data
INSERT INTO services (slug, title, subtitle, price_setup, price_monthly, features, tier_order, active) VALUES
('digital-launchpad', 'Digital Launchpad', 'Perfect for startups and solo traders', 750, 150, 
 '["5-page PWA website","AI-assisted content & imagery","Basic AI chatbot","SEO setup + Google Business integration","Hosting & security"]'::jsonb, 1, true),
('business-growth-engine', 'Business Growth Engine', 'Ideal for established small businesses', 1250, 250,
 '["Up to 10 pages + e-commerce","Advanced AI personalization","Booking systems / advanced forms","Priority support","Everything in Digital Launchpad"]'::jsonb, 2, true),
('custom-pro-solution', 'Custom Pro Solution', 'Fully bespoke architecture for complex needs', 8000, 0,
 '["Fully bespoke architecture","Custom logic, dashboards, integrations","Dedicated support + maintenance","React, Node, React-Native/Flutter","Value-based pricing"]'::jsonb, 3, true);

INSERT INTO portfolio_items (title, description, image_url, project_url, technologies, featured) VALUES
('Local Restaurant Website', 'Complete digital transformation for a family restaurant with online ordering and table booking', 
 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', 'https://example.com', 
 ARRAY['Next.js', 'TailwindCSS', 'Supabase', 'Stripe'], true),
('E-commerce Platform', 'Custom e-commerce solution with advanced inventory management and analytics', 
 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', 'https://example.com', 
 ARRAY['React', 'Node.js', 'PostgreSQL', 'Redis'], true);

INSERT INTO blog_posts (title, slug, excerpt, content, published, published_at) VALUES
('How AI is Revolutionizing Small Business Websites', 'ai-revolutionizing-small-business-websites', 
 'Discover how artificial intelligence is transforming the way small businesses approach their online presence.', 
 '# How AI is Revolutionizing Small Business Websites\n\nArtificial intelligence is no longer just a buzzword...', true, NOW()),
('The Future of Web Design: Trends for 2025', 'future-web-design-trends-2025', 
 'Explore the cutting-edge web design trends that will dominate 2025 and beyond.', 
 '# The Future of Web Design: Trends for 2025\n\nAs we look ahead to 2025...', true, NOW());
