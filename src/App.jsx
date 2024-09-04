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

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
    {/* {cursor} */}
     <Top/>
     <Middle />
     <PortfolioList />
     <Footer />
    </>
  )
}

export default App
