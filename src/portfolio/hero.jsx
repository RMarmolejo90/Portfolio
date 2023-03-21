import React from 'react'
import rich from "../images/no-background-profile-pic.png";

export default function hero() {


  return (
    <div className='lg:p-8 font-lato leading-8'>
        <div className='flex flex-auto flex-wrap items-center justify-around bg-orange-700 pt-6 px-6'>
            <div className='text-zinc-800 box-content'>
                <h4 className='text-xl font-bold m-2 tracking-widest'>Front-End Developer</h4>
                <h1 className='text-5xl lg:text-6xl font-semibold m-2 mb-12 tracking-wide font-tilt'>RICH MARMOLEJO</h1>
                <div className='flex justify-center max-w-lg md:justify-end'>
                    <a href="mailto:richardmarmolejo@gmail.com" 
                        className='border py-2.5 px-8 lg:px-14 border-zinc-800 font-semibold tracking-wider box-content hover:bg-orange-800 hover:text-zinc-300'>CONTACT ME
                    </a>
                </div>
            </div>
            <div>
                <img src={rich} alt="Rich Marmolejo with his arms folded, and a smile" 
                    className='max-w-xs lg:max-w-md'
                />
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}
