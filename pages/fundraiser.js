import React from 'react';


import Header from '../components/header';
import Nav from './../components/nav'

import styles from './index.module.scss';

const Fundraiser = () =>(
<>
    <Header title="Fundraiser" />
    <Nav />
    <div className={styles.seperator} />
    <section className={styles.section}>
        <div className={styles.container}>

            <div className={styles.box}>
                <div className={styles['has-text-centered']}>
                    <h2 className={` ${styles['has-text-black']} ${styles['is-size-2']}`}>Fundraiser</h2>
                    <h4 className={` ${styles['is-size-5']} `}>Launch Party, Free Live Music, Drinks and Snacks</h4>
                </div>
                <br/>
                <div className={`${styles.columns} ${styles['is-vcentered']} ${styles['has-text-centered']}`}>
                    <div className={` ${styles.column} ${styles['is-half-desktop']} ${styles['is-full-mobile']} `}>
                        <div className={`${styles.content} ${styles['is-medium']} `}>
                            <a href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Forward+Progress+Fundraiser&dates=20200110T193000/20200110T210000&location=#2740, 15th Cross, 27th Main Road, 1st Sector, HSR Layout, Bangalore`} target="_blank">January 10th 2020, 7:30pm to 9:00pm</a>
                            <p>
                            #2740, 15th Cross, 27th Main Road, 1st Sector, HSR Layout, Bangalore-560102
                            </p>
                            <p>
                                RSVP/Contact Whatsapp: <a href="https://wa.me/15154411331">+1(515)-441-1331</a>
                                <br/>
                                Phone Number: <a href="tel:+919538657938">+91-9538657938</a>
                                <br/>
                            </p>
                        </div>
                    </div>
                    <div className={` ${styles.column} ${styles['is-half-desktop']} ${styles['is-full-mobile']} `}>
                        <img className={styles.imageScale} alt="fundraiser image" src="https://res.cloudinary.com/poorna/image/upload/v1578421132/undraw_Booked_j7rj.svg" />
                    </div>
                </div>
            </div>

        </div>
    </section>
</>
)

export default Fundraiser;