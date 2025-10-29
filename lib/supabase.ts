import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Service {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  price_setup: number
  price_monthly: number
  features: string[]
  tier_order: number
  active: boolean
  created_at: string
  updated_at: string
}

export interface PortfolioItem {
  id: string
  title: string
  description: string
  image_url: string
  project_url?: string
  technologies: string[]
  featured: boolean
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image?: string
  published: boolean
  published_at?: string
  created_at: string
  updated_at: string
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  company?: string
  phone?: string
  service_interest: string
  message: string
  created_at: string
}

export interface ChatLog {
  id: string
  user_query: string
  bot_reply: string
  session_id?: string
  created_at: string
}
