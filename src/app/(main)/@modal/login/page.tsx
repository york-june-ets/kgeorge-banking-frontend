'use client'

import { useState } from "react"
import styles from "@/styles/login.module.css"
import { Overlay } from "@/components/Overlay"
import { LoginRequest } from "@/types/LoginRequest"
import { fetchAuthenticateCustomer, fetchCreateCustomer } from "@/lib/customer"
import { useRouter } from "next/navigation"

export default function LoginModal() {
    const [error, setError] = useState<String>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [loginRequest, setLoginRequest] = useState<LoginRequest>({email: "", password: ""})
    const router = useRouter()

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setError("")
        const {name, value} = event.target
        setLoginRequest(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)
        const login = async () => {
            try {
                const response = await fetchAuthenticateCustomer(loginRequest)
                if (response.ok) {
                    // window.location.href="/dashboard"
                    router.push('/dashboard')
                } 
                else {
                    const errorResponse = await response.json()
                    setError(errorResponse.message)
                }
            } catch (err) {
                setError("An unexpected error occured")
                console.error(err)
            }
        }
        login()
        setLoading(false)
    }

    return (
        <>
            <Overlay/>
            <div className={styles.login}>
                <div>
                    <img className="logo_img" src="/pb_logo_icon.png" alt="piggy bank logo"></img>
                    <h1><span className="pink">log</span><span className="grey">in</span></h1>
                </div>
                {loading && <p>Loading, please wait...</p>}
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email*" value={loginRequest.email} onChange={handleChange} disabled={loading} required></input>
                    <input type="password" name="password" placeholder="Password*" value={loginRequest.password} onChange={handleChange} disabled={loading} required></input>
                    <button className="buttonPrimary" type="submit" disabled={loading}>Login</button>
                    {error && <p>{error}</p>}
                </form>
                <p className={styles.linkToSignup}>Don't have an account? <a href='/signup'>Sign up!</a></p>
            </div>
        </>  
    )
}
