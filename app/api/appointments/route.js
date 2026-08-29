import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const service = String(body.service || '').trim();
    const date = String(body.date || '').trim();

    if (name.length < 2 || phone.length < 8 || !service || !date) {
      return NextResponse.json({ message: 'Please complete all required fields.' }, { status: 400 });
    }

    const reference = `LD-${Date.now().toString(36).toUpperCase().slice(-6)}`;

    // Production integration point:
    // Send to your CRM, email provider, WhatsApp workflow or database here.
    // Do not log or persist sensitive patient details unless your setup is compliant
    // with the privacy and healthcare requirements that apply to your clinic.

    return NextResponse.json({ ok: true, reference });
  } catch {
    return NextResponse.json({ message: 'Invalid appointment request.' }, { status: 400 });
  }
}
