import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'2mb'}));

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || '',
});
const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  try {
    const { messages, context } = req.body;
    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages' });
    }
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are an AI assistant helping with browser extension development.' },
        { role: 'system', content: `Context: ${JSON.stringify(context)}` },
        ...messages,
      ],
    });
    const reply = completion.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server listening on', PORT));
