import { useContext, useState, useEffect } from 'react'
import Cursor from './components/UI/Cursor';
import './App.css'
import Lenis from 'lenis';
import Top from './components/Top'
import Middle from './components/Middle'
import PortfolioList from './components/PortfolioList'
import Footer from "@/components/Footer/Footer";

function App() {
  const [isTouch, setIsTouch] = useState();

    useEffect(() => {
      setIsTouch(isTouchDevice());
    }, []);

    function isTouchDevice() {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }


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
     {!isTouch && <Cursor />}
   
     <Top/>
     <Middle />
     <PortfolioList />
     <Footer />
    </>
  )
}

export default App
