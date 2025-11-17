import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = process.env.TO_EMAIL;

    if (!toEmail) {
      throw new Error('TO_EMAIL environment variable is not set');
    }

    const body = await request.json();
    const { fullName, workEmail, message } = body;

    const { data, error } = await resend.emails.send({
        from: 'Craftcodex Contact Form <onboarding@resend.dev>',
        to: [toEmail],
        subject: 'New Message from Craftcodex Contact Form',
        html: `
          <p>You have received a new message from the contact form:</p>
          <ul>
            <li><strong>Full Name:</strong> ${fullName}</li>
            <li><strong>Work Email:</strong> ${workEmail}</li>
            <li><strong>Message:</strong></li>
          </ul>
          <p>${message}</p>
        `,
      });

    if (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, message: 'An error occurred while sending your message.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json({ success: false, message: 'An error occurred while sending your message.' }, { status: 500 });
  }
}
