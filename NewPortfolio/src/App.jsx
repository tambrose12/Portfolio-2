import { useState } from 'react'
import './App.css'
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useOutlet, useLocation } from "react-router-dom";
// import { pageTransitions } from "./lib/pageTransitions";
import Home from './pages/Home';


function AnimatedOutlet() {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
}

function App() {
  const path = useLocation().pathname;

  return (
    <>
      <Home />
      <div className='w-full h-screen'></div>
    </>
  );
}

export default App
