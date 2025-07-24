'use client'

import { Header } from "@/components/Header"
import { AuthContext } from "@/context/AuthContext"
import { useContext, useEffect, useState } from "react"

export default function DashboardPage() {
    const {token, currentCustomer, loading} = useContext(AuthContext)

    //redirect to home if no local stored customer info
    useEffect(() => {
        if (!loading && (!token || !currentCustomer)) {window.location.href='/'}
    }, [token, currentCustomer, loading])

    // show nothing while still loading/no local stored customer info
    if (loading || (!token || !currentCustomer)) {return null}
    
    return (
        <>
            <Header></Header>
            <h1>Dashboard</h1>
        </>
    )
}