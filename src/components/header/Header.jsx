"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './header.scss';
import Hamburger from 'hamburger-react';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";


function Header() {
    const [isOpen, setOpen] = useState(false);
    const [show, setShow] = useState('');
    const router = useRouter();


    return (
        <div className='header bg-teal-700'>
            <div className="nav">
                <div className="nav-content">
                    <div className="title"><Link href='/'>Next js Routing</Link></div>
                    <div className='menu'>
                        <Hamburger color='white' duration={0.4} easing="ease-in-out" toggled={isOpen} toggle={setOpen} onToggle={toggled => {
                            if (toggled) {
                                setShow('show')
                            } else {
                                setShow('')
                            }
                        }} />
                    </div>
                    <div className={`nav-listItems`}>
                        <ul>
                            <Link href={'/'} className='listItem'>home</Link>
                            <Link href={'/service'} className='listItem'>service</Link>
                            <Link href={'/about'} className='listItem'>about</Link>
                            <Link href={'/contact'} className='listItem'>contact</Link>
                            <Link href={'/blog'} className='listItem'>blog</Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`listItems ${show}`}>
                <ul className='items'>
                    <Link href={'/'} className='listItem'>home</Link>
                    <Link href={'/service'} className='listItem'>service</Link>
                    <Link href={'/about'} className='listItem'>about</Link>
                    <Link href={'/contact'} className='listItem'>contact</Link>
                    <Link href={'/blog'} className='listItem'>blog</Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;