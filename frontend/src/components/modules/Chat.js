import React from 'react'
import { useState } from 'react'
import './chat.css'
function Chat() {
    const [promptData, setPromptData] = useState(undefined);
    const [prompt, updatePrompt] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [answer, setAnswer] = useState(undefined);
    const sendPrompt = async (event) => {
        if (event.key !== "Enter") {
          return;
        }
        fetch('https://jigyashu-portfolio.onrender.com/chat', {
          method: 'POST',
          body: JSON.stringify({
            text: prompt,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
           .then((response) => response.json())
           .then((data) => {
            console.log('Success:', data);
            setPromptData(data.text)
              // console.log(data);
              // Handle data
           })
           .catch((err) => {
              console.log(err.message);
           });
        console.log('prompt', prompt)
      }
    return (
        <div className="app">
          <div className="app-container">
            <div className="spotlight__wrapper">
              <input
                type="text"
                className="spotlight__input"
                placeholder="Ask me anything..."
                style={{
                //   backgroundImage: `url(${lens})`,
                }}
                onChange={(e) => updatePrompt(e.target.value)}
                onKeyDown={(e) => sendPrompt(e)}
              />
              <div className="spotlight__answer">
                {promptData}
              </div>
            </div>
          </div>
        </div>
      );
}

export default Chat