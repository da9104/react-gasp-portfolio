import React, { useState, useRef, useEffect } from 'react'
import { projects } from './data'
import { RiArrowDropDownLine } from 'react-icons/ri';

export default function Projects({setActiveMenu}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='relative mix-blend-difference z-10 text-white h-screen w-full'>
      <ul onMouseLeave={() => {setActiveMenu(null)}} className='border-b'>
        {
          projects.map((project, index) => {
            const contentRef = useRef()
            const isOpen = activeIndex === index
            useEffect(() => {
              if (contentRef.current) {
                contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
              }
            }, [isOpen]);
            return (
              <li 
                onMouseOver={() => {setActiveMenu(index)}} 
                key={project.title} 
                className='text-[4vw] p-2 border-t'
                >
               <button 
                  className={`flex items-center text-[4vw] w-full ${isOpen ? 'active' : ''}`} 
                  onClick={() => handleItemClick(index)} >
                  <RiArrowDropDownLine className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} /> 
                  {project.title}
               </button>
                  <div 
                  ref={contentRef} 
                  className="body-container overflow-hidden transition-all duration-300 ease-in-out"
                  style={
                      isOpen
                      ? { height: contentRef.current.scrollHeight }
                      : { height: "0px" }
                      }>
                    <p className="body-content text-sm ml-5">{project.body}</p>
                    <p className="body-content text-sm ml-5">{project.link}</p>
                  </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
