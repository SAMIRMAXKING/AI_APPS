import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from 'react';
import { sendChatMessage } from '../hooks/chatApi';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatWidget: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen(!open);

  const send = async () => {
    if (!input.trim()) return;
    const newMsgs = [...messages, { sender: 'user', text: input }];
    setMessages(newMsgs);
    setInput('');
    const reply = await sendChatMessage(newMsgs.map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text })), { page: window.location.pathname });
    setMessages([...newMsgs, { sender: 'bot', text: reply }]);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, open]);

  return (
    <div className="fixed bottom-4 right-4 text-sm">
      {open && (
        <div className="bg-white border rounded shadow-lg w-80 h-96 flex flex-col">
          <div className="flex-1 overflow-y-auto p-2" ref={containerRef}>
            {messages.map((m, idx) => (
              <div key={idx} className={m.sender === 'user' ? 'text-right' : 'text-left'}>
                <span className="px-2 py-1 my-1 inline-block rounded bg-gray-200 text-gray-800">{m.text}</span>
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 border rounded px-2 py-1 mr-2"
              placeholder={t("Ask the assistant...")}
            />
            <button onClick={send} className="bg-blue-500 text-white px-3 py-1 rounded">
              Send
            </button>
          </div>
        </div>
      )}
      <button onClick={toggle} className="bg-blue-500 text-white p-3 rounded-full shadow-lg">
        {open ? '×' : 'AI'}
      </button>
    </div>
  );
};

export default ChatWidget;
