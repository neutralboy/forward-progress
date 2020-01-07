import React from 'react';
import Head from 'next/head';

const Header = ({ title }) =>(
    <Head>
        <title>{title} | No garbage Bengaluru by 2022</title>
        <meta name="description" content={`Forward Progress is a technology Non Profit that will clean up the streets of Bengaluru.`} />
        <meta property="og:title" content={ title + " | No garbage Bengaluru by 2022 " } />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:description" content={`Forward Progress is a technology Non Profit that will clean up the streets of Bengaluru.`} />
        <meta property="og:site_name" content="Forward Progress" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="theme-color" content="#131313" />
        <link rel="icon" href="https://res.cloudinary.com/poorna/image/upload/c_scale,h_26,q_auto:eco/v1578420031/Screenshot_from_2020-01-07_23-29-44.ico" />
        <meta property="og:image" content="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_305/v1578420123/forward_progress_logo.png" />
        <meta property="og:image:type" content="image/png" />
    </Head>
)

export default Header;