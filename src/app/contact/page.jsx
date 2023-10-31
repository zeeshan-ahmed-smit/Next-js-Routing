'use client'
import React from 'react';
import Image from 'next/image';
import Header from '@/components/header/Header';
import contactIcon from '@/assets/image/contact.png'

function Contact() {
  return (
      <>
        <Header />
        <div style={{ height: 500, display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
          <Image src={contactIcon} width={100} alt='contact'/>
          <p style={{fontSize: 50,fontWeight:'bold'}}>Contact Page</p>
        </div>
      </>
    )
}

export default Contact;