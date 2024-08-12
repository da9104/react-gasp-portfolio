import { useState, useContext, useRef } from 'react'
import { DataContext } from './context'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.css'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger) 

function App() {
  const cursor = useContext(DataContext);

  useGSAP(
    () => {
          gsap.from('nav ul > li', {
            top: '30',
            opacity: '0',
            ease: 'bounce.out',
            delay: 0.2,
            yoyo: true,
            stagger: {
                amount: 0.3,
            }
        })  
      
        gsap.from('.item h1', {
          y: '50',
          opacity: '0',
          ease: 'power4.inOut',
          delay: 0.1,
          yoyo: true,
          stagger: {
              amount: 0.3,
          }
      })

      gsap.from('.menu ul li > a', {
        top: '30',
        opacity: '0',
        ease: 'power4.inOut',
        delay: 0.6,
        yoyo: true,
        stagger: {
            amount: 0.1,
        }
    })  

        gsap.from('.sub-copy', {
          x: '30',
          opacity: '0',
          ease: 'power4.inOut',
          delay: 0.6,
          yoyo: true,
          stagger: {
              amount: 0.1,
          }
      })  
        gsap.from('.sub-copy > div', {
          x: '30',
          opacity: '0',
          ease: 'power4.inOut',
          delay: 0.6,
          yoyo: true,
          stagger: {
              amount: 0.1,
          }
      })  


    gsap.to('.skills', {
      y: -100,
      opacity: 1,
      display: 0.9,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "600vh top",
        scrub: 1,
    }
       });

    gsap.to('.portfolio-section h1', {
      x: 700,
      display: 0.9,
      scrollTrigger: {
        trigger: ".division",
        start: "top top",
        end: "500vh top",
        scrub: 1,
    }
       });
    
    },
  ); 

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


        <div className='portfolio-section--boxes'>

        </div>

    </>
  )
}

export default App
