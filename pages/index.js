import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import styles from './index.module.scss';

const Home = () => (
  <>
  <Head>
    <title>FORWARD PROGRESS | NO GARBAGE BENGALURU BY 2022</title>
  </Head>
  <Nav />
  <div className={styles.seperator} />
  <section className={`${styles.section} ${styles['has-background-primary']} ${styles.coverScreen} `}>
    <div className={`  ${styles['has-text-centered']}`}>
      <h1 className={` ${styles.fontSecondary} ${styles['is-size-1']} ${styles['has-text-white']} `}>Forward Progress.</h1>
      <br/>
      <h3 className={`${styles['has-text-white-ter']} ${styles['is-size-4']}`}>Bringing Actionable Change to Bengaluru</h3>

      <div className={styles.bottomImage}>
        <img alt="bangalore city line cartoonified. Image from redbus" src="https://res.cloudinary.com/poorna/image/upload/c_scale,h_407/v1578322400/city_scape_app_download.png" />
      </div>
    </div>
  </section>
  
  <section className={`${styles.section} `}>
    <div className={` ${styles.container} ${styles['is-fluid']} `}>
    <h2 className={` ${styles['has-text-black']} ${styles['is-size-2']}`}>Core Values.</h2>
    <div className={`${styles.columns} ${styles['has-text-centered']} `}>
      <div className={` ${styles.column} ${styles['is-half-desktop']} ${styles['is-full-mobile']} `}>
        <div>
          <br/>
          <div className={`${styles.content} ${styles['has-text-centered']} `}>
            <p>
            To inspire our employees that big drastic systematic change is possible. But
            not by fighting the current system but rather creating a new system that
            makes the old system obsolete. <span className={styles.fontSecondary}>Forward Progress</span> will inspire, mentor and
            teach its employees to develop the skills needed to make real change by
            building new systems.
            </p>
            <p>
            By the end of this we will have the 4 leaders go and build similar
systems. We do this by following these rules:</p>
          </div>
          <div className={` ${styles.content}`}>
            <ol type="1">
              <li><span className={styles.bold}>Deliver Wow</span>: Go the extra Mile with every experience</li>
              <li><span className={styles.bold}>True North</span>: Live by a moral compass of fairness and integrity.
              Never ask someone to do something you wouldn’t do yourself</li>
              <li><span className={styles.bold}>Elevate the tribe</span>: Build a positive family environment through
              kindness and loyalty</li>
              <li><span className={styles.bold}>Sharpen the saw</span>: Improve yourself daily through education</li>
              <li><span className={styles.bold}>Be grateful</span>: Remember where you came from and give back.</li>
              <li><span className={styles.bold}>All in!</span>: Be committed and exude passion towards your goals</li>
            </ol>
          </div>
        </div>
      </div>
      <div className={` ${styles.column} ${styles['is-half-desktop']} ${styles['is-full-mobile']} `}>
          <img alt="BANGALORE" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_500/v1578318662/vidhana.png" />
      </div>
    </div>

    </div>
  </section>
  <section className={styles.section}>
    <div className={`${styles.container} ${styles['has-text-centered']} `}>
        <a target="_blank" href="https://bulma.io">
            <img alt="Made with bulma" src="https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_150/v1578327783/made-with-bulma--dark.png" /> 
        </a>
    </div>
  </section>
  </>
)

export default Home
