import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build')

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, serviceInterest, message } = await request.json()

    // Validate required fields
    if (!name || !email || !serviceInterest || !message) {
      return NextResponse.json(
        { error: 'Name, email, service interest, and message are required' },
        { status: 400 }
      )
    }

    // Check if environment variables are configured
    if (!process.env.SUPABASE_URL || !process.env.RESEND_API_KEY) {
      return NextResponse.json({ 
        error: 'Service not configured. Please check environment variables.' 
      }, { status: 503 })
    }

    // Insert into Supabase
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name,
        email,
        company: company || null,
        phone: phone || null,
        service_interest: serviceInterest,
        message,
      })
      .select()
      .single()

    if (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      )
    }

    // Send confirmation email to client
    try {
      await resend.emails.send({
        from: 'Klikkit <hello@klikkit.co.uk>',
        to: [email],
        subject: 'Thanks for reaching out to Klikkit!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #14b8a6;">Thanks for getting in touch!</h2>
            <p>Hi ${name},</p>
            <p>Thanks for your interest in our <strong>${serviceInterest}</strong> service. I've received your message and will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to explore our <a href="https://klikkit.co.uk/services">services</a> or check out our latest <a href="https://klikkit.co.uk/blog">blog posts</a>.</p>
            <p>Best regards,<br>Jake @ Klikkit</p>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 12px; color: #6b7280;">
              This email was sent because you contacted us through our website. 
              If you didn't request this, please ignore this email.
            </p>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('Email error:', emailError)
      // Don't fail the request if email fails
    }

    // Send notification to Klikkit
    try {
      await resend.emails.send({
        from: 'Klikkit Contact Form <hello@klikkit.co.uk>',
        to: [process.env.CONTACT_EMAIL || 'jake@klikkit.co.uk'],
        subject: `New contact form submission: ${serviceInterest}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #14b8a6;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Service Interest:</strong> ${serviceInterest}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9fafb; padding: 15px; border-radius: 5px; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <p style="margin-top: 20px;">
              <a href="mailto:${email}" style="background: #14b8a6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                Reply to ${name}
              </a>
            </p>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('Notification email error:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! We\'ll get back to you soon.',
      submissionId: submission.id
    })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
