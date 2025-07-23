'use client'

import { useState } from "react"
import styles from "@/styles/login.module.css"
import { Overlay } from "@/components/Overlay"
import { LoginRequest } from "@/types/LoginRequest"

export default function LoginModal() {
    const [error, setError] = useState<Error | null>(null)
    const [loginRequest, setLoginRequest] = useState<LoginRequest>({email: "", password: ""})

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target
        setLoginRequest(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <Overlay/>
            <div className={styles.login}>
                <div>
                    <img className="logo_img" src="/pb_logo_icon.png" alt="piggy bank logo"></img>
                    <h1><span className="pink">log</span><span className="grey">in</span></h1>
                </div>
                <form className={styles.form}>
                    <input type="email" name="email" placeholder="Email" value={loginRequest.email} onChange={handleChange} required></input>
                    <input type="password" name="password" placeholder="Password" value={loginRequest.password} onChange={handleChange} required></input>
                    <button className="buttonPrimary" type="submit">Login</button>
                    {error && <p>{error.message}</p>}
                </form>
                <p className={styles.linkToSignup}>Don't have an account? <a href='/signup'>Sign up!</a></p>
            </div>
        </>  
    )
}
