export async function sendChatMessage(messages: {role: string, content: string}[], context: any) {
  try {
    const res = await fetch('http://localhost:3001/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, context }),
    });
    const data = await res.json();
    return data.reply as string;
  } catch (e) {
    console.error(e);
    return 'Error communicating with server';
  }
}
