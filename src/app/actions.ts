'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'
interface loginState {
    message: string
}
export async function loginUser(prevState: loginState, formData: FormData) {
    try {
        const userName = formData.get("username");
        const password = formData.get("password");
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
    
        // TODO: Set auth token and refresh token here
        (await cookies()).set("authToken",data.accessToken,{
            httpOnly:true,
            sameSite:"strict",
            maxAge:7*24*60*60 // 7 days
        });
        (await cookies()).set("refreshToken",data.refreshToken,{
            httpOnly:true,
            sameSite:"strict",
            maxAge:7*24*60*60 // 7 days 
        });
    } catch (err) {
        console.error("Error:", err);
        return { message: "Server Error" };
    }
    return {message:"Succeded"};
}
