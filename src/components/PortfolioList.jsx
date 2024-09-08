import { useState, useEffect } from 'react'
import Scene from './Projects/Scene'
import Projects from './Projects/Projects'

const PortfolioList = () => {
    const [activeMenu, setActiveMenu] = useState(null)
  
    return (
        <>
            {/* Portfolio Projects */}
            <main className='mb-32'>
                <div className="h-[10vh]"></div>
                <h2 className='text-6xl font-extrabold uppercase ml-5 mb-10'> 
                My Notable <br/> Projects
                </h2>
                <Projects setActiveMenu={setActiveMenu}/>
                <Scene activeMenu={activeMenu}/>
                    {/* <div className="lg:h-[30vh] sm:h-screen"></div> */}
            </main>
                <button className="mb-20 text-white block mx-auto rounded-xl border px-5 py-5 z-!10 hover:bg-white hover:text-black">More Projects{'  '}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="size-3 inline-flex">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                </button>
              {/* <div className="lg:h-[10vh] sm:h-screen"></div> */}
            {/* Portfolio Projects */}
        </>
    )
}

export default PortfolioList