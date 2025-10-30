import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { supabase } from '@/lib/supabase'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy-key-for-build',
})

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Check if environment variables are configured
    if (!process.env.SUPABASE_URL || !process.env.OPENAI_API_KEY) {
      return NextResponse.json({ 
        error: 'Service not configured. Please check environment variables.' 
      }, { status: 503 })
    }

    // Get services data for context
    const { data: services } = await supabase
      .from('services')
      .select('*')
      .eq('active', true)
      .order('tier_order')

    const servicesContext = services?.map(service => 
      `Tier ${service.tier_order}: ${service.title} - ${service.subtitle}
      Price: £${service.price_setup} setup + £${service.price_monthly}/month
      Features: ${service.features.join(', ')}`
    ).join('\n\n')

    const systemPrompt = `You are Klikkit's friendly digital expert. Help local businesses decide which service tier best suits their needs.

Available services:
${servicesContext}

Keep answers short, confident, and value-driven. Focus on how each service can help their business grow. Offer to connect them via the contact form if ready to proceed.

Brand voice: Confident, plain-spoken, expert. Tone: "I build smarter sites that grow with your business."

Key messages:
- Smarter websites, not just prettier ones
- Ongoing growth through AI, SEO, and analytics  
- Local partner — global-grade tech

If they ask about pricing, be transparent about the three tiers. If they're unsure, ask about their business size and goals to recommend the right tier.`

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    const botReply = completion.choices[0]?.message?.content || 'Sorry, I encountered an error. Please try again.'

    // Log the conversation to Supabase
    await supabase
      .from('chat_logs')
      .insert({
        user_query: message,
        bot_reply: botReply,
        session_id: sessionId || null,
      })

    return NextResponse.json({ 
      reply: botReply,
      sessionId: sessionId || `session_${Date.now()}`
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process chat message' }, 
      { status: 500 }
    )
  }
}
