import { useState } from 'react';
import LandingPage from './components/LandingPage.jsx';
import ChatInterface from './components/ChatInterface.jsx';

export default function App() {
  const [view, setView] = useState("landing");

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      {view === "landing"
        ? <LandingPage onEnter={() => setView("chat")} />
        : <ChatInterface onBack={() => setView("landing")} />
      }
    </>
  );
}
