import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <header className='w-full px-32 font-medium py-8 flex items-center justify-between'>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Home</Link>
    </nav>
    <Logo/>
    <nav>
      <Link href={""} target="_blank"> T</Link>
      <Link href={""} target="_blank"> T</Link>
      <Link href={""} target="_blank"> T</Link>
      <Link href={""} target="_blank"> T</Link>
      <Link href={""} target="_blank"> T</Link>
    </nav>
    </header>
  )
}

export default Navbar