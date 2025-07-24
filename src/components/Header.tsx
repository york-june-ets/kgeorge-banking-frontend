'use client'

import { AuthContext } from "@/context/AuthContext"
import { useContext } from "react"

export function Header () {
    const {logout} = useContext(AuthContext)
    return (
        <div className="header">
            <div className="horizontal_logo">
                <img className="logo_img" src="/pb_logo_icon.png" alt="piggy bank logo"></img>
                <h1 className="logo_text"><span className="pink">piggy</span><span className="grey">bank</span></h1>
            </div>
            <div className="buttons">
                <a href='/dashboard'>My Piggy Banks</a>
                <button className="buttonPrimary">Profile</button>
                <button className="buttonSecondary" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}