import { useState } from 'react';
import LandingPage from './components/LandingPage.jsx';
import ChatInterface from './components/ChatInterface.jsx';

export default function App() {
  const [view, setView] = useState("landing");

  return view === "landing"
    ? <LandingPage onEnter={() => setView("chat")} />
    : <ChatInterface onBack={() => setView("landing")} />;
}
