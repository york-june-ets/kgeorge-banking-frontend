export type Account = {
    accountNumber: string
    customerId: number
    accountType: "CHECKING" | "SAVINGS"
    accountStatus: "ACTIVE" | "SUSPENDED" | "CLOSED"
    balance: number
}