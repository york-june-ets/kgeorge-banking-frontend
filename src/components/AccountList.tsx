import { fetchCustomerAccounts } from "@/lib/customer"
import { Account } from "@/types/Account"
import { useEffect, useState } from "react"
import { AccountDetail } from "./AccountDetail"

export const AccountList: React.FC<{customerId: number}> = ({customerId}) => {
    const [accounts, setAccounts] = useState<Account[]>([])

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
    return (
        <div>
            <h1>My Piggy Banks</h1>
            {
                accounts.map(account => (
                    <AccountDetail key={account.accountNumber} accountNumber={account.accountNumber}></AccountDetail>
                ))
            }
        </div>
    )
}