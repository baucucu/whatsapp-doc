const WHAPI_API_KEY = process.env.WHAPI_API_KEY;
const WHAPI_BASE_URL = "https://api.whapi.cloud";

async function sendMessage(phoneNumber, message) {
  const response = await fetch(`${WHAPI_BASE_URL}/messages/text`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${WHAPI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      typing_time: 0,
      to: phoneNumber,
      body: message,
    }),
  });
  return response.json();
}

async function getMessages(limit = 100, cursor = "") {
  const response = await fetch(
    `${WHAPI_BASE_URL}/messages?limit=${limit}&cursor=${cursor}`,
    {
      headers: {
        Authorization: `Bearer ${WHAPI_API_KEY}`,
      },
    }
  );
  return response.json();
}

export { sendMessage, getMessages };
