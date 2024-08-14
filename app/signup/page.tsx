"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";  

export default function SignupPage(){
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignUp = async () => {
    };

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>SignUp </h1>
            <hr/>
            <label htmlFor="username">username</label>
            <input 
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user,username:e.target.value})}
                placeholder="username"
                />

            <label htmlFor="email">email</label>
            <input 
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user,email:e.target.value})}
                placeholder="email"
                />

            <label htmlFor="password">password</label>
            <input 
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user,password:e.target.value})}
                placeholder="password"
                />
            <button
            onClick={onSignUp}
            >Signup here</button>
            <Link href="/login">Visit login page</Link>

        </div>

        
    )
}