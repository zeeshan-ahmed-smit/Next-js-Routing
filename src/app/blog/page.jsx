'use client'
import React from 'react';
import {ImBlogger} from 'react-icons/Im';
import Header from '@/components/header/Header';

function Blog() {
    return (
        <>
            <Header />
            <div style={{ height: 500, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <ImBlogger style={{fontSize: 80}}/>
                <p style={{ fontSize: 50, fontWeight: 'bold' }}>Blog Page</p>
            </div>
        </>
    )
}

export default Blog;