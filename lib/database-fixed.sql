-- Klikkit 2025 Database Schema - Fixed Version
-- Run this in your Supabase SQL editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables if they exist (be careful with this in production!)
-- Uncomment the lines below if you want to start fresh
-- DROP TABLE IF EXISTS chat_logs CASCADE;
-- DROP TABLE IF EXISTS contact_submissions CASCADE;
-- DROP TABLE IF EXISTS blog_posts CASCADE;
-- DROP TABLE IF EXISTS portfolio_items CASCADE;
-- DROP TABLE IF EXISTS services CASCADE;

-- Services table
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

-- Portfolio items table
CREATE TABLE IF NOT EXISTS portfolio_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  project_url TEXT,
  technologies TEXT[] DEFAULT '{}',
  project_type TEXT DEFAULT 'web', -- 'web', 'ios', 'android', 'cross-platform', 'pwa'
  featured BOOLEAN DEFAULT false,
  metrics JSONB DEFAULT '{}', -- Store results like {"revenue_increase": "300%", "users": "5000"}
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts table
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

-- Contact submissions table
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

-- Chat logs table
CREATE TABLE IF NOT EXISTS chat_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_query TEXT NOT NULL,
  bot_reply TEXT NOT NULL,
  session_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_active ON services(active);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio_items(featured);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_chat_logs_created_at ON chat_logs(created_at);

-- Insert sample services data (only if table is empty)
INSERT INTO services (slug, title, subtitle, price_setup, price_monthly, features, tier_order, active) 
SELECT * FROM (VALUES
  ('digital-launchpad', 'Digital Launchpad', 'Perfect for startups and solo traders', 750, 150, 
   '["5-page PWA website","AI-assisted content & imagery","Basic AI chatbot","SEO setup + Google Business integration","Hosting & security","Progressive Web App (PWA) features"]'::jsonb, 1, true),
  ('business-growth-engine', 'Business Growth Engine', 'Ideal for established small businesses', 1250, 250,
   '["Up to 10 pages + e-commerce","Advanced AI personalization","Booking systems / advanced forms","Priority support","Everything in Digital Launchpad","Advanced PWA with offline capabilities","Voice interface integration"]'::jsonb, 2, true),
  ('custom-pro-solution', 'Custom Pro Solution', 'Fully bespoke architecture for complex needs', 8000, 0,
   '["Fully bespoke architecture","Custom logic, dashboards, integrations","Dedicated support + maintenance","React, Node, React-Native/Flutter","Value-based pricing","Native iOS app development","Native Android app development","Cross-platform mobile apps (React Native/Flutter)","App Store optimization","Push notifications","Apple Pay & Google Pay integration","AR/VR capabilities","Real-time analytics dashboards"]'::jsonb, 3, true),
  ('mobile-app-development', 'Mobile App Development', 'Native iOS & Android apps for your business', 3500, 300,
   '["Native iOS app (SwiftUI)","Native Android app (Kotlin)","Cross-platform option (React Native/Flutter)","App Store & Play Store submission","Push notifications setup","Analytics integration","Beta testing program","3 months post-launch support"]'::jsonb, 4, true)
) AS v(slug, title, subtitle, price_setup, price_monthly, features, tier_order, active)
WHERE NOT EXISTS (SELECT 1 FROM services LIMIT 1);

-- Insert sample portfolio data (only if table is empty)
INSERT INTO portfolio_items (title, description, image_url, project_url, technologies, project_type, featured, metrics) 
SELECT * FROM (VALUES
  ('Local Restaurant Website', 'Complete digital transformation for a family restaurant with online ordering and table booking', 
   'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', 'https://example.com', 
   ARRAY['Next.js', 'TailwindCSS', 'Supabase', 'Stripe'], 'web', true, '{"revenue_increase": "300%", "booking_increase": "250%"}'::jsonb),
  ('E-commerce Platform', 'Custom e-commerce solution with advanced inventory management and analytics', 
   'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', 'https://example.com', 
   ARRAY['React', 'Node.js', 'PostgreSQL', 'Redis'], 'web', true, '{"conversion_rate": "15%", "revenue_growth": "200%"}'::jsonb),
  ('Fitness App - iOS', 'Native iOS fitness tracking app with workout plans and progress analytics', 
   'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800', 'https://example.com', 
   ARRAY['SwiftUI', 'HealthKit', 'Core Data', 'CloudKit'], 'ios', true, '{"downloads": "5000+", "rating": "4.8", "active_users": "3000+"}'::jsonb),
  ('Business Management App', 'Cross-platform mobile app for small business management', 
   'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800', 'https://example.com', 
   ARRAY['React Native', 'Firebase', 'Stripe'], 'cross-platform', true, '{"users": "2000+", "rating": "4.7"}'::jsonb)
) AS v(title, description, image_url, project_url, technologies, project_type, featured, metrics)
WHERE NOT EXISTS (SELECT 1 FROM portfolio_items LIMIT 1);

-- Insert sample blog posts (only if table is empty)
INSERT INTO blog_posts (title, slug, excerpt, content, published, published_at) 
SELECT * FROM (VALUES
  ('How AI is Revolutionizing Small Business Websites', 'ai-revolutionizing-small-business-websites', 
   'Discover how artificial intelligence is transforming the way small businesses approach their online presence.', 
   '# How AI is Revolutionizing Small Business Websites\n\nArtificial intelligence is no longer just a buzzword...', true, NOW()),
  ('The Future of Web Design: Trends for 2025', 'future-web-design-trends-2025', 
   'Explore the cutting-edge web design trends that will dominate 2025 and beyond.', 
   '# The Future of Web Design: Trends for 2025\n\nAs we look ahead to 2025...', true, NOW())
) AS v(title, slug, excerpt, content, published, published_at)
WHERE NOT EXISTS (SELECT 1 FROM blog_posts LIMIT 1);
