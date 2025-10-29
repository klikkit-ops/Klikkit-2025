-- Check existing tables and their structure
-- Run this first to see what's already in your database

-- Check if tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('services', 'portfolio_items', 'blog_posts', 'contact_submissions', 'chat_logs');

-- Check the structure of existing tables
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'services'
ORDER BY ordinal_position;

-- Check portfolio_items structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'portfolio_items'
ORDER BY ordinal_position;

-- Check blog_posts structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'blog_posts'
ORDER BY ordinal_position;
