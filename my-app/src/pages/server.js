import React, { useState, useEffect, useRef } from 'react';
import styles from './chat.module.css'; 
import { FaUserDoctor } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatWindowRef = useRef(null);

  const MODEL = 'mistralai/mistral-7b-instruct';

  const formatText = (text) => {
    const bulletPoints = text
      .split(/(?:^|\n)(\d+\.)/)
      .filter((part) => part.trim() !== '')
      .map((line, index) => {
        const highlighted = line.replace(
          /(symptoms?|treatment|diagnosis|advice|medicine|pain|cause|relief|diet|exercise)/gi,
          (match) => `<span class="${styles.highlight}">${match}</span>`
        );
        return `<p key=${index}>${highlighted}</p>`;
      });
    return bulletPoints.join('');
  };

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    setMessages([
      {
        text: "Hello! I'm your AI Health Assistant. Ask me anything about your health, symptoms, or well-being.",
        type: 'bot',
      },
    ]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, type: 'user' }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
          'HTTP-Referer': 'http://localhost:3000/',
          'X-Title': 'MyHealthChatApp'
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            {
              role: 'system',
              content:
                'You are a helpful AI health assistant. Respond to user questions in bullet points. Focus on symptoms, treatments, diagnosis, and health advice.'
            },
            ...newMessages.map((msg) => ({
              role: msg.type === 'user' ? 'user' : 'assistant',
              content: msg.text
            }))
          ]
        })
      });

      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content;

      if (botReply) {
        setMessages([...newMessages, { text: botReply, type: 'bot' }]);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setMessages([...newMessages, { text: 'Something went wrong. Please try again.', type: 'bot' }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className={styles["chat-layout"]}>
      {/* Image Section */}
      <div className={styles["image-container"]}>
        <img src="/bot.png" alt="Health Assistant" className={styles["chat-image"]} />
      </div>

      {/* Chatbot Section */}
      <div className={styles["chatbot-container"]}>
        <div className={styles["chat-window"]} ref={chatWindowRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`${styles["chat-message"]} ${styles[msg.type]}`}>
              <div className={styles["chat-avatar"]}>
                {msg.type === 'bot' ? <FaUserDoctor color="white" size={24} /> : <FaUser color="white" size={24} />}
              </div>
              <div
                className={`${styles["chat-bubble"]} ${msg.type === 'bot' ? styles["bot-message"] : ''}`}
                dangerouslySetInnerHTML={{
                  __html: msg.type === 'bot' ? formatText(msg.text) : `<p>${msg.text}</p>`
                }}
              />
            </div>
          ))}
        </div>
        <div className={styles["chat-input-container"]}>
          <input
            type="text"
            placeholder="Ask a health question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
