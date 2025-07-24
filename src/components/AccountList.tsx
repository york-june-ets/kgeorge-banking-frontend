import { fetchCustomerAccounts } from "@/lib/customer"
import { Account } from "@/types/Account"
import { useEffect, useState } from "react"
import { AccountDetail } from "./AccountDetail"
import { getTotalBalance } from "@/lib/account"

export const AccountList: React.FC<{customerId: number}> = ({customerId}) => {
    const [accounts, setAccounts] = useState<Account[]>([])
    const [totalBalance, setTotalBalance] = useState<number>(0.00)

    useEffect(() => {
        const getAccounts = async () => {
            const response = await fetchCustomerAccounts(customerId)
            if (response.ok) {
                const data = await response.json()
                setAccounts(data)
            }
        }
        getAccounts()
    },[customerId])

    useEffect(() => {
        if (accounts.length > 0) {
            setTotalBalance(getTotalBalance(accounts))
        }
    }, [accounts])
    return (
        <div>
            <h1>Total Savings: ${totalBalance}</h1>
            <h1>My Piggy Banks</h1>
            {
                accounts.map(account => (
                    <AccountDetail key={account.accountNumber} accountNumber={account.accountNumber}></AccountDetail>
                ))
            }
        </div>
    )
}