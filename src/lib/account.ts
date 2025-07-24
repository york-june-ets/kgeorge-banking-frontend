import { Account } from "@/types/Account";

export const getTotalBalance = (accounts: Account[]) => {
    let totalBalance: number = 0.00
    accounts.forEach(account => {totalBalance += account.balance})
    return totalBalance
}