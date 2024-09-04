import { useContext, useState, useEffect } from 'react'
import { DataContext } from './context'
import './App.css'

import Top from './components/Top'
import Middle from './components/Middle'
import PortfolioList from './components/PortfolioList'

function App() {
  const cursor = useContext(DataContext);


  return (
    <>
    {cursor}
     <Top />
     <Middle />
     <PortfolioList />
    </>
  )
}

export default App
