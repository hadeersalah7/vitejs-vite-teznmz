import { redirect } from "react-router-dom"

export const getAuthToken = () => {
    const token = localStorage.getItem("token")
    return token
}

export const tokenAction = () => {
    return getAuthToken()
}

export const checkAuthLoader = () => {
    const token = getAuthToken()
    if (!token) {
        return redirect("/auth")
    }

    return null
}