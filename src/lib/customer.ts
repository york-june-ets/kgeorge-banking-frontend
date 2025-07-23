import { Customer } from "@/types/customer"
import { LoginRequest } from "@/types/LoginRequest"
import { SignupRequest } from '@/types/SignupRequest'

export const fetchCreateCustomer = async (request: SignupRequest) => {
    const url = 'http://localhost:8080/customers'
    const response = await fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(request)
    })
    return await response.json()
}

export const fetchAuthenticateCustomer = async (request: LoginRequest) => {
    const url = 'http://localhost:8080/auth/login'
    const response = await fetch(url, {
        method: "POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(request)
    })
    return await response.json()
}