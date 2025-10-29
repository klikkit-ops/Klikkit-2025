-- Add indexes after tables are created
-- Run this after create-tables-first.sql

CREATE INDEX idx_services_slug ON services(slug);
CREATE INDEX idx_services_active ON services(active);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_portfolio_featured ON portfolio_items(featured);
CREATE INDEX idx_contact_created_at ON contact_submissions(created_at);
CREATE INDEX idx_chat_logs_created_at ON chat_logs(created_at);
