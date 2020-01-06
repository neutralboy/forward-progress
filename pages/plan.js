import React from 'react';
import Head from 'next/head'


import Nav from './../components/nav'

import styles from './index.module.scss';

const Plan = () =>(
    <>
    <Head>
        <title>Plan | Forward Progress</title>
    </Head>
    <Nav />
    <div className={styles.seperator} />
    <section className={styles.section}>
        <div className={`${styles.container} ${styles['is-fluid']} `}>
            <h2 className={` ${styles['is-size-2']} ${styles['has-text-black']} `}>Our Plan</h2>
            <br/>
            <div className={`${styles.columns} ${styles['is-vcentered']} `}>
                <div className={` ${styles.column} ${styles['is-half-desktop']} ${styles['is-full-mobile']} `}>
                    <div className={`${styles.content} `}>
                        <p>
                        We will leverage technology. We are in the midst of the fourth industrial revolution and the
                        only way to succeed today is to be a technology company. We are a tech company that
                        cleans the streets of Bangalore. Just like Uber is a tech company that offers taxi services and
                        amazon is a tech company that sells you goods and services.
                        </p>
                        <p>
                        We work on our research and understand the entire garbage supply chain from the moment it
                        is created until it is recycled or ends up in a landfill. This will go on till the end of Q3. There are
                        hundreds of people, organizations, NGO’s, private companies and the full force of the BBMP
                        doing an amazing job in dealing with our problems. Unfortunately there is still trash on the
                        streets. ForwardProgress just fills in the gaps and brings every one of these amazing groups
                        and people together. When you connect businesses to other businesses and give them a
                        larger base of customers everyone wins. Our goal is to clean Bangalore by letting everyone
                        win.
                        </p>
                        <p>
                        After the real problems are identified (the gaps in the system) we just assist in fixing the
                        problem. The best way to do this is by <b>MOBILIZING, MOBILIZING, MOBILIZING</b> our citizens.
                        Bangalore is budding with potential. People want change. We just offer these people a clear
                        path forward, we are here to provide solutions to people&#39;s problems. We don’t protest, we
                        don’t involve ourselves in anything divisive(Religion, politics etc), we just get things done. “It&#39;s
                        not left, it&#39;s not right, Its FORWARD!”
                        </p>
                    </div>
                </div>
                <div className={` ${styles.column} ${styles['is-half-desktop']} ${styles['is-full-mobile']} `}>
                    <img alt="undraw fitting illustration" src="https://res.cloudinary.com/poorna/image/upload/v1578323673/undraw_abstract_x68e_1.svg" />
                </div>
            </div>
            
        </div>
    </section>
    </>
)

export default Plan;