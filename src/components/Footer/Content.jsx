import React from 'react'
import Dami from '/images/damikang.png'
import { useDispatch } from "react-redux";
import { animationActions } from '../../store/animationSlice';
import { useState, useRef } from "react";
import useSlideIn from "../../hooks/useSlideIn"
import { motion, useTransform, useScroll } from "framer-motion";

export default function Content() {
  return (
    <div className='bg-[#9c9ce4] py-12 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    const dispatch = useDispatch();
    const [pos, setPos] = useState(null);
    const buttonRef = useRef();
  
    const title = useRef();
    const { height, scroll, width, top } = useSlideIn(title);
    const { scrollY } = useScroll();
    const x = useTransform(
      scrollY,
      [0, top - height, scroll],
      [0, 0, -0.8 * scroll]
    );
  
    function onMouseEnter(e) {
      dispatch(animationActions.hideCursor());
      const { pageX: x, pageY: y } = e;
      const { offsetLeft, offsetTop } = e.target;
      setPos({
        x: x - offsetLeft + "px",
        y: y - offsetTop + "px",
      });
    }
  
    const parentVariant = {
      animate: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    };
  
    const childVariant = {
      initial: {
        opacity: 0,
      },
    };
  
    const whileInView = {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    };

    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[14vw] leading-[0.8] mt-10'>Let's work together!</h1>
            <img 
            onMouseEnter={() => dispatch(animationActions.message())}
            onMouseLeave={() => dispatch(animationActions.removeState())}
            src={Dami} 
            className='dami' 
            style={{ width: '150px' }} 
            priority={true}
            />
            <p>©DamiKang</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20 mt-40'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
                <p>Home</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Dami Kang</h3>
                <a href={'https://damikang.super.site'}>Blog</a>
                <a href={'https://github.com/da9104'}>Github</a>
                <a href={'https://www.linkedin.com/in/kangdami'}>LinkedIn</a>
            </div>
        </div>
    )
}