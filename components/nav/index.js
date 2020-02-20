import React, {useState} from 'react';
import Link from 'next/link';


import styles from './index.module.scss';

const Nav = () => {
  const [open, setOpen] = useState(false)
  return(
    <nav className={` ${styles.navbar}  ${styles['is-primary']} ${styles['is-fixed-top']} `} role="navigation" aria-label="main navigation">
      <div className={styles['navbar-brand']}>
          <div className={styles['navbar-item']}>
            <img  className={styles.mainLogo} src="https://res.cloudinary.com/poorna/image/upload/q_auto/v1582169125/Forward%20Progress%20Logo.svg" alt="main logo" />
          </div>
          <a onClick={()=>setOpen(!open)} role="button" className={`${styles["navbar-burger"]} ${styles["burger"]} `} aria-label="menu" aria-expanded="false">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
      </div>
      <div className={`${styles['navbar-menu']} ${ open && styles['is-active'] } `}>
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
}
export default Nav
