import React from 'react'
import rich from "../images/no-background-profile-pic.png";

export default function hero() {


  return (
    <div className='p-8'>
        <div className='flex flex-auto items-center justify-around bg-orange-700'>
            <div className='text-zinc-800 box-content'>
                <h4 className='text-lg font-semibold m-2'>Front-End Developer</h4>
                <h1 className='text-5xl font-semibold m-2 mb-12 '>Rich Marmolejo</h1>
                <div className='flex justify-end max-w-lg'>
                    <a href="mailto:richardmarmolejo@gmail.com" 
                        className='border py-3 px-10 border-zinc-800 font-semibold tracking-wider box-content hover:bg-orange-800 hover:text-zinc-300'>Contact Me
                    </a>
                </div>
            </div>
            <div>
                <img src={rich} alt="Rich Marmolejo with his arms folded, and a smile" 
                    className='max-w-sm'
                />
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}
