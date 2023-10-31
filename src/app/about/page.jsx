'use client'
import React from 'react';
import Header from '@/components/header/Header';

function About() {
  return (
    <>
      <Header />
      <div style={{ height: 500, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <svg style={{fontSize: 80}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" class="icon"><path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path><path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>
        <p style={{ fontSize: 50, fontWeight: 'bold' }}>About Page</p>
      </div>
    </>
  )
}

export default About;