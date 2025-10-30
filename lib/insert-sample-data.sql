-- Insert sample data for Klikkit 2025
-- Run this AFTER creating the tables

-- Insert services data
INSERT INTO services (slug, title, subtitle, price_setup, price_monthly, features, tier_order, active) VALUES
('digital-launchpad', 'Digital Launchpad', 'Perfect for startups and solo traders', 750, 150, 
 '["5-page PWA website","AI-assisted content & imagery","Basic AI chatbot","SEO setup + Google Business integration","Hosting & security","Progressive Web App (PWA) features"]'::jsonb, 1, true),
('business-growth-engine', 'Business Growth Engine', 'Ideal for established small businesses', 1250, 250,
 '["Up to 10 pages + e-commerce","Advanced AI personalization","Booking systems / advanced forms","Priority support","Everything in Digital Launchpad","Advanced PWA with offline capabilities","Voice interface integration"]'::jsonb, 2, true),
('custom-pro-solution', 'Custom Pro Solution', 'Fully bespoke architecture for complex needs', 8000, 0,
 '["Fully bespoke architecture","Custom logic, dashboards, integrations","Dedicated support + maintenance","React, Node, React-Native/Flutter","Value-based pricing","Native iOS app development","Native Android app development","Cross-platform mobile apps (React Native/Flutter)","App Store optimization","Push notifications","Apple Pay & Google Pay integration","AR/VR capabilities","Real-time analytics dashboards"]'::jsonb, 3, true),
('mobile-app-development', 'Mobile App Development', 'Native iOS & Android apps for your business', 3500, 300,
 '["Native iOS app (SwiftUI)","Native Android app (Kotlin)","Cross-platform option (React Native/Flutter)","App Store & Play Store submission","Push notifications setup","Analytics integration","Beta testing program","3 months post-launch support"]'::jsonb, 4, true);

-- Insert portfolio data
INSERT INTO portfolio_items (title, description, image_url, project_url, technologies, featured) VALUES
('Local Restaurant Website', 'Complete digital transformation for a family restaurant with online ordering and table booking', 
 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', 'https://example.com', 
 ARRAY['Next.js', 'TailwindCSS', 'Supabase', 'Stripe'], true),
('E-commerce Platform', 'Custom e-commerce solution with advanced inventory management and analytics', 
 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', 'https://example.com', 
 ARRAY['React', 'Node.js', 'PostgreSQL', 'Redis'], true);

-- Insert blog posts data
INSERT INTO blog_posts (title, slug, excerpt, content, published, published_at) VALUES
('How AI is Revolutionizing Small Business Websites', 'ai-revolutionizing-small-business-websites', 
 'Discover how artificial intelligence is transforming the way small businesses approach their online presence.', 
 '# How AI is Revolutionizing Small Business Websites\n\nArtificial intelligence is no longer just a buzzword...', true, NOW()),
('The Future of Web Design: Trends for 2025', 'future-web-design-trends-2025', 
 'Explore the cutting-edge web design trends that will dominate 2025 and beyond.', 
 '# The Future of Web Design: Trends for 2025\n\nAs we look ahead to 2025...', true, NOW());
