import { useContext, useState, useRef, useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch } from "react-redux";
import { animationActions } from '../store/animationSlice';
import { motion } from "framer-motion";
import styles from "./Top.module.scss";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger) 

function Top() {
  const buttonOneRef = useRef();
  const buttonTwoRef = useRef();
  const spanOneRef = useRef();
  const spanTwoRef = useRef();
  const [pos, setPos] = useState(null);
  const dispatch = useDispatch();

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


  const parentVariant = {
    animate: {
      transition: {
        delayChildren: .2,
        staggerChildren: 0.1,
      },
    },
  };

  const fadeParentVariant = {
    animate: {
      transition: {
        delayChildren: .3,
        staggerChildren: 0.2,
      },
    },
  };

  const wordVariant = {
    initial: {
      y: 200,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.65, 0.05, 0.36, 1],
      },
    },
  };

  const linkVariant = {
    initial: {
      y: 20,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const fadeVariant = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  function onMouseEnter(e, ref) {
    const { pageX, pageY } = e;
    const { offsetLeft, offsetTop } = ref.current;
    setPos({
      x: pageX - offsetLeft + "px",
      y: pageY - offsetTop + "px",
      ref: ref,
    });
    dispatch(animationActions.hideCursor());
  }

  function onMouseLeave(ref) {
    ref.current?.classList.add(styles.out);
    dispatch(animationActions.removeState());
  }

  function hideCursor() {
    dispatch(animationActions.hideCursor())
  }

  function showCursor() {
    dispatch(animationActions.removeState())
  }


    // const cursor = useContext(DataContext)
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
    <header className='!z-20'>
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
           <div className="menu !z-50">
                <ul>
                  <li>
                    <motion.a
                      tabIndex='1'
                      onMouseEnter={hideCursor}
                      onMouseLeave={showCursor}
                      variants={linkVariant}
                      href="/"
                    >
                    HOME
                    </motion.a>
                    </li>
                  <li>
                   <motion.a
                      tabIndex='2'
                      onMouseEnter={hideCursor}
                      onMouseLeave={showCursor}
                      variants={linkVariant}
                      href="#"
                    >
                    ABOUT
                    </motion.a></li>
                  <li>
                  <motion.a
                      tabIndex='3'
                      onMouseEnter={hideCursor}
                      onMouseLeave={showCursor}
                      variants={linkVariant}
                      href="#"
                    >
                    PORTFOLIO
                  </motion.a></li>
                  <li>
                  <motion.a
                      tabIndex='4'
                      onMouseEnter={hideCursor}
                      onMouseLeave={showCursor}
                      variants={linkVariant}
                      href="/"
                    >
                    CONTACT
                  </motion.a></li>
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
           
        <motion.div
          variants={fadeParentVariant}
          animate="animate"
          initial="initial"
          className={styles.banner__text}
           >
            <p>Aliqua commodo est dolor cillum cillum cillum ut voluptate sunt anim consectetur.</p>
            {/* <div className="btn custom"> */}
            <motion.a
              variants={fadeVariant}
              className={`${styles.button} btn`}
              href="#portfolio"
              alt="portfolio section"
              onMouseEnter={(e) => onMouseEnter(e, buttonOneRef)}
              onMouseLeave={() => onMouseLeave(spanOneRef)}
              ref={buttonOneRef}
              tabIndex='6'
              >
              Portfolio
              {pos && pos.ref === buttonOneRef && (
                <span
                  onTransitionEnd={() => setPos(null)}
                  ref={spanOneRef}
                  style={{ transformOrigin: pos.x + " " + pos.y }}
                  className={styles.button__overlay}
                />
              )}
            </motion.a>
            {/* </div> */}
           </motion.div>

          <div>
           <p>Aliqua commodo est dolor cillum cillum cillum ut voluptate sunt anim consectetur.</p>
            <div className="">   
            <motion.a
                target="_blank" 
                variants={fadeVariant}
                className={`${styles.button} btn bg-transparent hover:bg-black hover:text-white`}
                onMouseEnter={(e) => onMouseEnter(e, buttonTwoRef)}
                onMouseLeave={() => onMouseLeave(spanTwoRef)}
                ref={buttonTwoRef}
                tabIndex='7'
                href={'https://github.com/da9104/'}
              >
               Github 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5" stroke="currentColor" className="size-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                  {pos && pos.ref === buttonTwoRef && (
                  <span
                    onTransitionEnd={() => setPos(null)}
                    ref={spanTwoRef}
                    style={{ transformOrigin: pos.x + " " + pos.y }}
                    className={styles.button__overlay}
                  />
                )}
                </motion.a>
            </div>

          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Top