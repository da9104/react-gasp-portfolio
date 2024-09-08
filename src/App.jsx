import { useContext, useState, useEffect } from 'react'
import { DataContext } from './context'
import './App.css'
import Lenis from 'lenis';
import Top from './components/Top'
import Middle from './components/Middle'
import PortfolioList from './components/PortfolioList'
import Footer from "@/components/Footer/Footer";

function App() {
  const cursor = useContext(DataContext);
  const [cursorComponent, setCursorComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set wait cursor
    document.body.style.cursor = "wait";
    setIsLoading(true);

    const timer = setTimeout(() => {
      // Reset cursor and set loading to false after 500ms
      document.body.style.cursor = "default";
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [cursor]);

  useEffect(() => {
    if (!isLoading) {
      setCursorComponent(cursor);
    }
  }, [isLoading, cursor]);

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
    {!isLoading && cursorComponent}
     <Top/>
     <Middle />
     <PortfolioList />
     <Footer />
    </>
  )
}

export default App
