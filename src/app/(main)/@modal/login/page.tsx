'use client'

import { useState } from "react"
import styles from "@/styles/login.module.css"
import { Overlay } from "@/components/Overlay"
import { useRouter } from "next/navigation"

export default function LoginModal() {
    const [error, setError] = useState<Error | null>(null)
    const router = useRouter();

    return (
        <>
            <Overlay/>
            <div className={styles.login}>
                <img className="logo_img" src="/pb_logo_icon.png" alt="piggy bank logo"></img>
                <h1><span className="pink">log</span><span className="grey">in</span></h1>
                <form className={styles.form}>
                    <input type="email" name="email" placeholder="Email"></input>
                    <input type="password" name="password" placeholder="Password"></input>
                    <button type="submit">Login</button>
                    {error && <p>{error.message}</p>}
                    <p>Don't have an account? <a href='/signup'>Sign up!</a></p>
                </form>
            </div>
        </>  
    )
}
