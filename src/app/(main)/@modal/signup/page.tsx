'use client'

import { Overlay } from "@/components/Overlay";
import { fetchCreateCustomer } from "@/lib/customer";
import styles from '@/styles/signup.module.css'
import { SignupRequest } from "@/types/SignupRequest";
import { useRef, useState } from "react";

export default function SignupModal() {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<String>("")
    const [signupRequest, setSignupRequest] = useState<SignupRequest>({firstName: "", lastName: "", email: "", password: "", phoneNumber: ""})
    const confirmPassword = useRef<HTMLInputElement>(null)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target
        setSignupRequest(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
            setLoading(true)
            const login = async () => {
                try {
                    const response = await fetchCreateCustomer(signupRequest)
                    if (response.ok) {
                        console.log("success")
                    } 
                    else {
                        setError(response.message)
                    }
                } catch (err) {
                    setError("An unexpected error occured")
                    console.error(err)
                }
            }
            if (signupRequest.password === confirmPassword.current?.toString()) {
                login()
            } else {
                setError("Passwords do not match")
            }
            setLoading(false)
        }

    return (
        <>
            <Overlay/>
            <div className={styles.signup}>
                <div>
                    <img className="logo_img" src="/pb_logo_icon.png" alt="piggy bank logo"></img>
                    <h1><span className="pink">sign</span><span className="grey">up</span></h1>     
                </div>
                {loading && <p>Loading, please wait...</p>}
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="text" name="firstName" placeholder="First Name" value={signupRequest.firstName} onChange={handleChange} disabled={loading} required></input>
                    <input type="text" name="lastName" placeholder="Last Name" value={signupRequest.lastName} onChange={handleChange} disabled={loading} required></input>
                    <input type="email" name="email" placeholder="Email" value={signupRequest.email} onChange={handleChange} disabled={loading} required></input>
                    <input type="password" name="password" placeholder="Password" value={signupRequest.password} onChange={handleChange} disabled={loading} required></input>
                    <input type="password" placeholder="Confirm Password" ref={confirmPassword} onChange={handleChange} disabled={loading} required></input>
                    <input type="phone" name="phoneNumber" placeholder="1234567890" value={signupRequest.phoneNumber} onChange={handleChange} disabled={loading}></input>
                    <button className="buttonSecondary" type="submit" disabled={loading}>Signup</button>
                    {error && <p>{error}</p>}
                </form>
                <p>Already have an account? <a href='/login'>Log in.</a></p>
            </div>
        </> 
    )
}