'use client'

import Image from "next/image";
import styles from "@/styles/homepage.module.css"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Homepage() {
  const router = useRouter();

  function openLogin() {
    router.push('/login');
  }
  function openSignup() {
    router.push('/signup');
  }

  return (
     <div className={styles.homepage}>
        <div className={styles.slide1}>
          <div className="header">
            <div className="horizontal_logo">
              <img className="logo_img" src="/pb_logo_icon.png" alt="piggy bank logo"></img>
              <h1 className="logo_text"><span className="pink">piggy</span><span className="grey">bank</span></h1>
            </div>
            <div className="buttons">
              <button className="buttonPrimary" onClick={openLogin}>Login</button>
              <button className="buttonSecondary" onClick={openSignup}>Sign Up</button>
            </div>
          </div>
          <div className={styles.main_content}>
            <div className={styles.intro_text}>
              <h1 className={styles.title}>Oink if You Love Saving!</h1>
              <p className={styles.body}>With Piggy Bank, each savings goal is brought to life through your very own piggie. Watch them grow happier 
                                        as you save more — from grumpy to grinning. Your finances, your goals, your herd of happy little pigs.</p>
            </div>
            <img className={styles.piggy_bank_lady} src="/lady_holding_piggy_bank.png"></img>
          </div>
        </div>
     </div>
  )
}
