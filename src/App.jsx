import { useState, useEffect } from 'react'
import Cursor from './components/UI/Cursor';
import './App.css'
import Lenis from 'lenis';
import Top from './components/Top'
import Middle from './components/Middle'
import PortfolioList from './components/PortfolioList'
import Footer from "@/components/Footer/Footer";

function App() {
  const [isTouch, setIsTouch] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

    function isTouchDevice() {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }

  
  // Detect touch device immediately on mount
  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  // Loading effect with cursor management
  useEffect(() => {
    const loadCursorAsync = async () => {
      document.body.style.cursor = "wait";
      setIsLoading(true);

      // Simulate loading or asynchronous task
      await new Promise(resolve => setTimeout(resolve, 800));

      document.body.style.cursor = "default"; // Reset cursor
      setIsLoading(false);
    };

    loadCursorAsync(); // Call the async function
  }, []);

   useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy(); // Clean up the instance on unmount
    };
  }, [])

  return (
    <>
     {!isTouch && !isLoading && <Cursor />}
     {/* Render the main components */}
     <Top/>
     <Middle />
     <PortfolioList />
     <Footer />
    </>
  )
}

export default App
