import { useState, useEffect } from 'react'
import Scene from './Projects/Scene'
import Projects from './Projects/Projects'

const PortfolioList = () => {
    const [activeMenu, setActiveMenu] = useState(null)
  
    return (
        <>
            {/* Portfolio Projects */}
            <main>
                <div className="h-[10vh]"></div>
                <h2 className='text-6xl font-extrabold uppercase ml-5'> 
                My Notable <br/> Projects
                </h2>
                <Projects setActiveMenu={setActiveMenu}/>
                <Scene activeMenu={activeMenu}/>
                <div className="lg:h-[30vh] sm:h-[10vh]"></div>
            </main>
            {/* Portfolio Projects */}
        </>
    )
}

export default PortfolioList