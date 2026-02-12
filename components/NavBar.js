import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className='h-auto py-2 md:h-15 bg-blue-700 flex md:flex-row flex-col justify-between items-center text-white w-screen '>
            <h1 className='font-bold text-3xl mx-5'>BitLinks</h1>
            <ul className='flex justify-between items-center gap-4 mx-2 mt-2 text-lg' >
                <Link href="/" ><li>Home</li></Link>
                <Link href="/About" ><li>About</li></Link>
                <Link href="/Contact" ><li>Contact</li></Link>
                <Link href="/short" >
                    <button className='hidden md:inline-block md:bg-white md:text-blue-700 md:px-2 py-1 rounded-lg font-bold '>
                        Try Now</button></Link>
                <Link href="https://github.com/Yash-Shekh/BitLinks" >
                    <button className='md:bg-white md:text-blue-700 md:px-2 py-1 rounded-lg font-bold'>
                        GitHub</button></Link>
            </ul>
        </nav>
    )
}

export default NavBar