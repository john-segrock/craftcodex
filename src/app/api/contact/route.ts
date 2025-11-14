import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('YOUR_RESEND_API_KEY');

export async function POST(req: NextRequest) {
  const { fullName, workEmail, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Craftcodex <onboarding@resend.dev>',
      to: ['YOUR_EMAIL@example.com'],
      subject: 'New Project Inquiry from Craftcodex Website',
      html: `<p>You have a new project inquiry from:</p>
             <p><strong>Name:</strong> ${fullName}</p>
             <p><strong>Email:</strong> ${workEmail}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
