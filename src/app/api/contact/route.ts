import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const webhookResponse = await fetch('https://n8n.srv1141659.hstgr.cloud/webhook-test/fcf6cd06-13c9-4487-9d22-39e4adb3a35a', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, company: company || '', subject: subject || '', message }),
    });

    if (!webhookResponse.ok) {
      throw new Error(`n8n webhook responded with status ${webhookResponse.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
