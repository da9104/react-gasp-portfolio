import { useState, useContext, useRef } from 'react'
import { DataContext } from './context'
import { useGSAP } from '@gsap/react';
import './App.css'

function App() {
  const cursor = useContext(DataContext);
  console.log(cursor)
  return (
    <>
   {cursor}
    <header>
      <nav>
        <ul>
          <li><a>DAMI KANG</a></li>
          <li>FRONT END</li>
          <li>WEB DEVELOPMENT</li>
          <li>UI/UX</li>
        </ul>
      </nav>

     <div className='container'>
      <div className="header-left col">
           <div className="menu">
                <ul>
                  <li><a>HOME</a></li>
                  <li><a>ABOUT</a></li>
                  <li><a>PORTFOLIO</a></li>
                  <li><a>CONTACT</a></li>
                </ul>
            </div>
        </div>
        <div className="header-right col">
            <div className="item">
                <h1>Your Front-End Genius Idea</h1>
                {/* <h1>Idea</h1> */}
            </div>
        </div>
     </div>
        <div className='division'>
          <p> Get in touch with me </p>
        </div>

      <div className='sub-copy'>
        <h2>A minimal life of creative work.</h2>
        
        <div className='sub-btns'>
           
           <div>
            <p>Aliqua commodo est dolor cillum cillum cillum ut voluptate sunt anim consectetur.</p>
            <div class="btn link">
                <span>Portfolio</span>
            </div>
           </div>

          <div>
           <p>Aliqua commodo est dolor cillum cillum cillum ut voluptate sunt anim consectetur.</p>
            <div class="btn link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="size-1 btn-arrow">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                <span>Github</span>
                
            </div>
          </div>

        </div>

      </div>
    </header>


     <div className='skills'>

      <p>
        <p> HTML <span>JAVASCRIPT</span> CSS <span>REACT</span> </p>
        <p>  SCSS TYPESCRIPT NEXTJS <span>PYTHON</span> </p>
        <p> <span>GIT</span> FIGMA PHOTOSHOP </p>
      </p>
     </div>

     <div class="marquee">
        <span>
        Front-end Engineer with 1+ years of experience, proficient in UX * UI design, JavaScript, and React. Proven ability to work independently and collaboratively, with strong problem-solving and communication skills.          </span>
    </div>

      <div className='portfolio-section'>
      <h1> Portfolio </h1>

      </div>

    </>
  )
}

export default App
