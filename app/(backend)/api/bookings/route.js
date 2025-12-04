import { NextResponse } from 'next/server';

import Booking from '@/lib/models/Booking';
import { ConnectDB } from '@/lib/config/db';

export async function POST(req) {
  try {
    await ConnectDB();

    const body = await req.json();

    const booking = await Booking.create(body);

    return NextResponse.json(
      { message: 'Booking saved successfully', booking },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking API Error:', error);
    return NextResponse.json(
      { message: 'Failed to save booking' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ConnectDB();
    const bookings = await Booking.find().sort({ createdAt: -1 });
    return NextResponse.json({ bookings });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
