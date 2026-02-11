import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className='h-15 bg-blue-700 flex justify-between items-center text-white'>
            <h1 className='font-bold text-3xl mx-5'>BitLinks</h1>
            <ul className='flex justify-center items-center gap-5 mx-5 text-lg' >
                <Link href="/" ><li>Home</li></Link>
                <Link href="/About" ><li>About</li></Link>
                <Link href="/Contact" ><li>Contact</li></Link>
                <Link href="/short" >
                    <button className='bg-white text-blue-700 px-2 py-1 rounded-lg font-bold'>
                        Try Now</button></Link>
                <Link href="https://github.com/Yash-Shekh/Bit-Links" >
                    <button className='bg-white text-blue-700 px-2 py-1 rounded-lg font-bold'>
                        GitHub</button></Link>
            </ul>
        </nav>
    )
}

export default NavBar