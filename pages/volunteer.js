import React from 'react';
import Head from 'next/head'


import Nav from './../components/nav'

import styles from './index.module.scss';


const Volunteer = () => (
    <>
    <Head>
        <title>Volunteer with Us | Forward Progress</title>
    </Head>
    <Nav />
    <div className={styles.seperator} />
    <section className={styles.section}>
        <div className={` ${styles.container} ${styles['is-fluid']} `}>
        <h2 className={` ${styles['is-size-2']} ${styles['has-text-black']} `}>Volunteer with us.</h2>
            <div className={styles.columns}>
                <div className={` ${styles.column} ${styles['is-half-desktop']} ${styles['is-full-mobile']} `}>
                    <div className={` ${styles.content} ${styles['is-medium']} `}>
                        <p>
                            Help the cause and volunteer with <b>Forward Progress</b> to bring actionable change to Bengaluru.
                        </p>
                        <blockquote>
                            “The smallest act of kindness is worth more than the grandest intention.”
                            <br/>
                            ~<span className={styles.fontSecondary}>Oscar Wilde</span>
                        </blockquote>
                    </div>
                </div>
                <div className={` ${styles.column} ${styles['is-half-desktop']} ${styles['is-full-mobile']} `}>
                    <div className={styles.box}>
                        <h5 className={`${styles['is-size-5']} ${styles['has-text-black']} `}>Fill the form and we'll reach out to you.</h5>
                        <br/>
                        <form method="POST">
                            <div>
                                <div className={styles.field}>
                                    <label className={styles.label}>
                                        Name
                                    </label>
                                    <input required autoComplete="name" name="name" className={styles.input} type="text" placeholder="Full Name" />
                                </div>
                                <div className={styles.field}>
                                    <label className={styles.label}>Email</label>
                                    <input required autoComplete="email" name="email" className={styles.input} type="email" placeholder="you@example.com" />
                                </div>
                                <div className={styles.field}>
                                    <label className={styles.label}>Address</label>
                                    <input required autoComplete="address" name="address" placeholder="House #, Street Name, Area, Pincode" className={styles.input} type="text" />
                                </div>
                                <div className={`${styles.field} ${styles['has-addons']} `}>
                                    <div className={styles.control}>
                                        <a className={`${styles.button} ${styles['is-static']} `}>
                                            +91
                                        </a>
                                    </div>
                                    <div className={styles.control}>
                                        <input minLength="10" required autoComplete="tel" name="phone" placeholder="9999999999" className={styles.input} type="tel" />
                                    </div>
                                </div>
                                <div className={styles['has-text-centered']}>
                                    <input className={`${styles.button} ${styles['is-rounded']} ${styles['is-info']} `} name="submit" type="submit" value="Submit" />
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    </section>
    </>
)

export default Volunteer;