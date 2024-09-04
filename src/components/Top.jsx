import { useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger) 

function Top() {
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
    },
  ); 

    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const textColor = isHovered ? 'red' : 'black';

    return (
    <>
    <header className='z-50'>
      <nav>
        <ul>
          <li><a>DAMI KANG</a></li>
          <li>FRONT END</li>
          <li>WEB DEVELOPMENT</li>
          <li className='custom'>UI/UX</li>
        </ul>
      </nav>

     <div className='container z-50'>
      <div className="header-left col hidden lg:block">
           <div className="menu ">
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
            <div className="btn custom">
               Portfolio
            </div>
           </div>

          <div>
           <p>Aliqua commodo est dolor cillum cillum cillum ut voluptate sunt anim consectetur.</p>
            <div className="btn custom bg-transparent hover:bg-black">
                
               <a target="_blank" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ display: 'flex',  color: textColor }} href={'https://github.com/da9104/'} > Github 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
            </div>

          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Top