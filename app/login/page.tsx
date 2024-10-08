"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios  from "axios";  

export default function LoginPage(){
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });

    const onLogin = async () => {
    };

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr/>

            <label htmlFor="email" className="mt-5">email</label>
            <input
                className="text-black p-1 mb-3 mt-1 rounded" 
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user,email:e.target.value})}
                placeholder="email"
                />

            <label htmlFor="password">password</label>
            <input
                className="text-black p-1 mb-3 mt-1 rounded" 
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user,password:e.target.value})}
                placeholder="password"
                />
            <button
            className=" mt-5 mb-5 border bg-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onLogin}
            >Login here</button>
            <Link href="/signup">Visit SignUp page</Link>

        </div>

        
    )
}