'use server'

import { redirect } from 'next/navigation'
interface loginState {
    message: string,
    error: boolean
}
export async function loginUser(prevState: any, formData: FormData) {
    console.log("UserName", formData.get("username"));
    console.log("password", formData.get("password"));
    const userName=formData.get("username");
    const password=formData.get("password");
    const body={
        "password":"abcdeffgij",
        "userName":"testUser3"
    }
    const res = await fetch("http://localhost:5000/api/users/login",{
        body:JSON.stringify(body),
        headers: {
            "Content-Type": "application/json" // Ensures the server interprets it correctly
        },
        method:"POST"
    });
    if (!res.ok) {
        const data=await res.json();
        console.log("data",data);
        return { message: 'Please enter a valid email' }
    }
    const data=await res.json();
    console.log("The data ",data);
}
