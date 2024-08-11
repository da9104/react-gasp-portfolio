import { useState } from 'react'
import AnimatedCursor from "react-animated-cursor"
import './App.css'

function App() {
  return (
    <>
    <AnimatedCursor
     color='255,255,255'
     innerSize={8}
     outerSize={35}
     innerScale={1}
     outerScale={2}
     outerAlpha={0.8}
     hasBlendMode={true}
     outerStyle={{
       mixBlendMode: 'exclusion'
     }}
     innerStyle={{
      backgroundColor: 'var(--cursor-color)',
      mixBlendMode: 'exclusion'
    }}
     clickables={[
       'a',
       'input[type="text"]',
       'input[type="email"]',
       'input[type="number"]',
       'input[type="submit"]',
       'input[type="image"]',
       'label[for]',
       'select',
       'textarea',
       'button',
       '.link',
       {
         target: '.custom',
         options: {
           innerSize: 12,
           outerSize: 12,
           color: '255, 255, 255',
           outerAlpha: 0.3,
           innerScale: 0.7,
           outerScale: 5
         }
       }
     ]}
    />
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
           <div className="copy">
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

    </header>


     <div className='skills'>

      <p>
        <p> HTML <span>JAVASCRIPT</span> CSS <span>REACT</span> </p>
        <p>  SCSS TYPESCRIPT NEXTJS <span>PYTHON</span> </p>
        <p> <span>GIT</span> FIGMA PHOTOSHOP </p>
      </p>
     </div>

    </>
  )
}

export default App
