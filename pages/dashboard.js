import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { route } from "next/router";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";


export default function Dashboard() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);
    //if user  logged
    
    const getData = async() => {
        if(loading) return;
        if(!user) return route.push("/auth/login");
    };
    //get user data
    useEffect(() => {
        getData();
    }, [user, loading]);
    return (
        <div>
            <h1>Your posts</h1>
            <div>posts</div>
            <button onClick={()=> auth.signOut()} className="font-medium bg-orange-600 text-white py-2 px-4 rounded-lg text-xs">Sign Out</button>
        </div>  
    );
}