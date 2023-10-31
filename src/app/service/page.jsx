"use client"
import React from 'react'
import Header from '@/components/header/Header'
import {FaSignal} from 'react-icons/fa'

function Service() {
  return (
    <>
      <Header />
      <div style={{ height: 500, display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
        <FaSignal style={{fontSize: 80}}/>
        <p style={{fontSize: 50,fontWeight:'bold'}}>Service Page</p>
      </div>
    </>
  )
}

export default Service