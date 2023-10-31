'use client'
import React from 'react';
import Image from 'next/image';
import Header from '@/components/header/Header';
import img from '@/assets/image/about-icon-png-23.jpg';

function About() {
  return (
    <>
      <Header />
      <div style={{ height: 500, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Image src={img} width={100} alt='about'/>
        <p style={{ fontSize: 50, fontWeight: 'bold' }}>About Page</p>
      </div>
    </>
  )
}

export default About;