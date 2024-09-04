import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import Scene from './Projects/Scene'
import Projects from './Projects/Projects'

const PortfolioList = () => {

    const [activeMenu, setActiveMenu] = useState(null)
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
            {/* Portfolio Projects */}
            <main>
                <div className="h-[10vh]"></div>
                <h2 className='text-6xl font-extrabold uppercase ml-5'> 
                My Notable <br/> Projects
                </h2>
                <Projects setActiveMenu={setActiveMenu}/>
                <Scene activeMenu={activeMenu}/>
                <div className="h-[50vh]"></div>
            </main>
            {/* Portfolio Projects */}
        </>
    )
}

export default PortfolioList