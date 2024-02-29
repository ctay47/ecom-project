import React, { useState } from 'react';

function ChatBox() {
    const [messages, setMessages] = useState([]);

    const sendMessage = (msg) => {
        // Placeholder function to "send" a message
        // In a real app, you would send this to the backend
        setMessages([...messages, msg]);
    };

    return (
        <div className="chat-box">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <button onClick={() => sendMessage("Hello!")}>Send Hello</button>
            {/* A real implementation would have a text input here */}
        </div>
    );
}

export default ChatBox;
