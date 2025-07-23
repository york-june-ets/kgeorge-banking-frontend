'use client'

import { Overlay } from "@/components/Overlay";
import styles from '@/styles/signup.module.css'
import { useState } from "react";


export default function SignupModal() {
    const [error, setError] = useState<Error | null>(null)

    return (
        <>
            <Overlay/>
            <div className={styles.signup}>
                <div>
                    <img className="logo_img" src="/pb_logo_icon.png" alt="piggy bank logo"></img>
                    <h1><span className="pink">sign</span><span className="grey">up</span></h1>     
                </div>
                <form className={styles.form}>
                    <input type="text" name="firstName" placeholder="First Name" required></input>
                    <input type="text" name="lastName" placeholder="Last Name" required></input>
                    <input type="email" name="email" placeholder="Email" required></input>
                    <input type="password" name="password" placeholder="Password" required></input>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" required></input>
                    <input type="phone" name="phoneNumber" placeholder="1234567890"></input>
                    <button className="buttonSecondary" type="submit">Signup</button>
                    {error && <p>{error.message}</p>}
                </form>
                <p>Already have an account? <a href='/login'>Log in.</a></p>
            </div>
        </> 
    )
}