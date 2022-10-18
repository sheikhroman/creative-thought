import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { route } from "next/dist/server/router";
import { useEffect, useState } from "react";



export default function Post() {
    //form state
    const [post, setPost] = useState({ description: "" });
    return (
        <div className="my-20 p-12 shadow-lg rounded-lg mx-w-md mx-auto">
            <from>
                <h1 className="text-xl font-blod">Create a new post</h1>
                <div className="py-2">
                    <h3 className="text-lg font-mediumpy-2">Description</h3>
                    <textarea value={post.description}
                        onChange={(e) => setPost(e.target.value)}
                        className="bg-gray-600 h-48 w-full text-white rounded-md p-2 text-sm"></textarea>
                    <p className="text-xs">0/300</p>
                </div>
                <button className="snap-center font-medium bg-cyan-400 text-white py-2 px-4 rounded-lg text-xs">Submit</button>
            </from>    
        </div>  
    );
}