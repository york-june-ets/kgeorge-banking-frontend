'use client'

import { AuthContext } from "@/context/AuthContext"
import { useContext } from "react"

export function Header () {
    const {logout} = useContext(AuthContext)
    return (
        <button onClick={logout}>Logout</button>
    )
}