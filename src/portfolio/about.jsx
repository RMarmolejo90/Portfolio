import React from 'react'
import css from '../images/css3.svg'
import figma from '../images/figma.svg'
import html from '../images/html-5.svg'
import js from '../images/javascript.svg'
import nodejs from '../images/node-js.svg'
import reactLogo from '../images/react.svg'
import tailwind from '../images/tailwindcss.svg'

export default function about() {
  return (
    <div className='text-md leading-6'>
        <div>
            <p className='px-10 py-8'>
            Hello, and welcome to my website! I'm a passionate web developer who loves creating unique and modern web apps and websites. I strive to develop high-performance interfaces with a strong emphasis on quality. To achieve this, I use front-end frameworks like React JS and Svelte to create dynamic and interactive web pages that provide a better user experience.
             I leverage CSS libraries like Tailwind CSS and Bootstrap to maintain consistency across the user interface while accelerating the development process.
             With Node JS, I'm able to perform all my routing and crud operations through JavaScript Rest API's.
             I'm also well-versed in NoSQL and SQL for developing data-driven web applications.
            </p>
            <div className='p-8 flex flex-col flex-wrap flex-auto justify-center items-center'>
                <h2 className='p-8 text-sky-500 font-tilt text-2xl'>Development Tools</h2>
                <ul className='flex flex-wrap flex-auto items-between justify-center p-6'>
                    <li>
                        <img className='p-4 m-3'  src={css} alt="software logo" />
                    </li>
                    <li>
                        <img className='p-4 m-3'  src={reactLogo} alt="software logo" />
                    </li>
                    <li>
                        <img  className='p-4 m-3' src={tailwind} alt="software logo" />
                    </li>
                    <li>
                        <img  className='p-4 m-3' src={figma} alt="software logo" />
                    </li>
                    <li>
                        <img  className='p-4 m-3' src={html} alt="software logo" />
                    </li>
                    <li>
                        <img  className='p-4 m-3' src={js} alt="software logo" />
                    </li>
                    <li>
                        <img  className='p-4 m-3' src={nodejs} alt="software logo" />
                    </li>
                </ul>
            </div>
            <p className='px-10 py-8'>
            I am excited to showcase my Pay Tracker app, which offers real-time monitoring of your daily earnings. This free-to-use application, developed for my personal use, is designed to run only on the same device it started on. Simply enter your pay rate and clock in when you start work, and the app will provide an estimate of your payroll deduction. The real-time feature displays your earnings throughout the day, providing you with valuable insights and helping you track your progress towards your earnings goals. 
            If adjustments are necessary, a deductions rate selector is available at the bottom of the page. 
            </p>
            <p className='px-10 py-8'>
            Please keep in mind that this is only the beta version, and I'm continuously working on updates to make it even better. If you happen to find any bugs or have ideas for improvements, please don't hesitate to contact me. I'm always looking for ways to enhance the app. 
            </p>
        </div>
    </div>
  )
}
