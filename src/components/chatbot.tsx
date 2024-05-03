import * as React from 'react';
import { lazy, Suspense, useEffect, useState } from "react"
import { options, flow } from '../constants/Chatbot';

const Chatbot: React.FC = () => {
  const ChatBot = lazy(() => import("react-chatbotify"));
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, [])

  return (
    <>
      {isLoaded && (
        <Suspense fallback={<div>Loading...</div>}>
          <ChatBot options={options} flow={flow} />
        </Suspense>
      )}
    </>
  )
};

export default Chatbot;
