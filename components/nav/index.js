import React from 'react'
import Link from 'next/link'

import styles from './index.module.scss';

const Nav = () => (
    <nav className={` ${styles.navbar}  ${styles['is-primary']} ${styles['is-fixed-top']} `} role="navigation" aria-label="main navigation">
      <div className={styles['navbar-brand']}>
          <div className={styles['navbar-item']}>
            <p className={` ${styles['has-text-white']} ${styles.makeItPlayfair} ${styles['has-family-secondary']} ${styles['is-size-3']} `}>Forward Progress.</p>
          </div>
          <a role="button" className={`${styles["navbar-burger"]} ${styles["burger"]} `} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
      </div>
      <div className={styles['navbar-menu']}>
        <div className={` ${styles['navbar-end']} `}>
            <div className={styles['navbar-item']}>
              <Link href="/"><a>Values</a></Link>
            </div>
            <div className={styles['navbar-item']}>
            <Link href="/plan"><a>Plan</a></Link>
            </div>
            <div className={styles['navbar-item']}>
            <Link href="/fundraiser"><a>Fundraiser</a></Link>
            </div>
            <div className={styles['navbar-item']}>
            <Link href="/volunteer"><a>Volunteer</a></Link>
            </div>
            <div className={styles['navbar-item']}>
            <Link href="/donate"><a className={` ${styles.button} ${styles['is-white']} ${styles['is-outlined']} `}>Donate</a></Link>
            </div>
        </div>
      </div>
    </nav>
)

export default Nav
