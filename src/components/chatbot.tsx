import * as React from 'react';
import ChatBot from 'react-chatbotify';
import { options, flow } from '../constants/Chatbot';

const Chatbot: React.FC = () => {
  return <ChatBot options={options} flow={flow} />;
};

export default Chatbot;
