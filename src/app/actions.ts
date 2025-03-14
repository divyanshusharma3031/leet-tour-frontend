'use server'

import { redirect } from 'next/navigation'
interface loginState {
    message: string,
    error: boolean
}
export async function loginUser(prevState: any, formData: FormData) {
    try {
        const userName = formData.get("username");
        const password = formData.get("password");
    
        console.log("UserName:", userName);
        console.log("Password:", password);
    
        if (!userName || !password) {
            return { message: "Username and password are required" };
        }
    
        const body = JSON.stringify({ userName, password });
    
        const res = await fetch("https://leet-tour.onrender.com/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body
        });
    
        const data = await res.json();
    
        if (!res.ok) {
            console.log("Error Response:", data);
            return { message: data.error || "Login failed" };
        }
    
        console.log("The data:", data);
    
        // TODO: Set auth token and refresh token here
    } catch (err) {
        console.error("Error:", err);
        return { message: "Server Error" };
    }
    redirect("/");
    
}
