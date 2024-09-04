import React from 'react'
import Dami from '/images/damikang.png'

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
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[14vw] leading-[0.8] mt-10'>Let's work together!</h1>
            <img src={Dami} style={{ width: '150px', transform: 'rotate(20deg)' }} />
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
                <a href={'damikang.super.site'}>Blog</a>
                <a href={'https://github.com/da9104'}>Github</a>
                <a href={'https://www.linkedin.com/in/kangdami'}>LinkedIn</a>
            </div>
        </div>
    )
}