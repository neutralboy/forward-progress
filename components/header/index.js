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
        <link rel="icon" href="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto,w_40/v1582170092/FP_flower.ico" />
        <meta property="og:image" content="https://res.cloudinary.com/poorna/image/upload/q_auto/v1582169125/Forward%20Progress%20Logo.svg" />
        <meta property="og:image:type" content="image/png" />
        <meta name="google-site-verification" content="Y6DkhNQIVwk95Arpwa8p7XU1g__m9OpJJrqDoJjMikU" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121255747-5"></script>
        <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-121255747-5');`}
        </script>

    </Head>
)

export default Header;