"use client"
import React from 'react';
import {FaHome} from 'react-icons/fa'
import Header from '@/components/header/Header';

function Home() {
  return (
    <>
      <Header />
      <div style={{ height: 500, display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
        <FaHome style={{fontSize: 80}}/>
        <p style={{fontSize: 50,fontWeight:'bold'}}>Home Page</p>
      </div>
    </>
  )
}

export default Home;