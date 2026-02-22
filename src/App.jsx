import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import { Chatbot } from 'supersimpledev';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    Chatbot.addResponses({
      'What is my name?': 'You are one and only, the Lord Keshav',
      'goodbye': 'Goodbye. Have a great day!',
      'Fuck you': 'Fuck you too!',
      'hi': 'Hi there! 😊',
      'hey': 'Hey! What’s up?',
      'thank you': 'You’re welcome! 😄',
      'thanks': 'Glad I could help!',
      'sorry': 'No worries at all 🙂',
      'how are you': 'I’m just code, but I’m running perfectly 😎',
      'what is your name': 'I’m your friendly chatbot 🤖',
      'are you real': 'As real as JavaScript allows 😜',
      'tujhi aai chi gaand': 'Tujhi pn gaand lavdya, jaast majhlay ka!!!',

      'give me a unique id': function () {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },
      'give me time': function () {
        return `Current time is: ${new Date().toLocaleTimeString()}`;
      },
      'give me date': function () {
        return `Today’s date is: ${new Date().toLocaleDateString()}`;
      },
      'give me random number': function () {
        return `Your random number is: ${Math.floor(Math.random() * 100)}`;
      },

      'what can you do': 'I can answer questions, generate IDs, tell time, and chat with you!',
      'help': 'Sure! Ask me anything 😊',
      'you are stupid': 'Maybe, but I’m learning every day 😉',
      'bye': 'Bye! See you soon 👋',
    });
  }, []);


  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
      )}
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
