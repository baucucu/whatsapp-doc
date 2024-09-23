import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  // Process the incoming message
  console.log("Received message:", body);

  // Here you would typically update your database or trigger some action
  // based on the incoming message

  return NextResponse.json({ received: true });
}
