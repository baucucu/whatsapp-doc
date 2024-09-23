import { sendMessage } from "../../lib/whapi";

export async function POST(request) {
  const { phoneNumber, message } = await request.json();
  try {
    const result = await sendMessage(phoneNumber, message);
    return Response.json({ success: true, result });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
