'use client'

import { Header } from "@/components/Header"
import { AuthContext } from "@/context/AuthContext"
import { JSX, useContext, useEffect, useState } from "react"
import styles from "@/styles/dashboard.module.css"
import { fetchCustomerAccounts } from "@/lib/customer"
import { Account } from "@/types/Account"
import { AccountDetail } from "@/components/AccountDetail"
import { AccountList } from "@/components/AccountList"

export default function DashboardPage() {
    const {token, currentCustomer, loading} = useContext(AuthContext)

    //redirect to home if no local stored customer info
    useEffect(() => {
        if (!loading && (!token || !currentCustomer)) {window.location.href='/'}
    }, [token, currentCustomer, loading])

    // show nothing while still loading/no local stored customer info
    if (loading || (!token || !currentCustomer)) {return null}
    
    return (
        <div className={styles.dashboard}>
            <Header></Header>
            <AccountList customerId={currentCustomer!.id}></AccountList>
        </div>
    )
}