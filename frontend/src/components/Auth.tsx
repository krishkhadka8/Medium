import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from  "@raavan/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ( {type} : {type: "signup" | "signin"})=>{
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name : "",
        username : "",
        password : ""
    })

    async function sendRequest(){
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin"? "signin" : "signup"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem('token', jwt);
            navigate('/blogs');
        } catch (error) {
            alert("Error while signing in " + error);
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div>
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-slate-400">
                        {type === "signin"? "Don't have an account?" :  "Already have an account?"}
                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? "Sign Up" : "Sign In"}
                        </Link>
                    </div>
                </div>
                <div>
                {type === "signup" ? <LabelledInput label = "Name" placeholder="First Name" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        name:e.target.value
                    })
                }}/> : null}
                <LabelledInput label = "Username" placeholder="username@gmail.com" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        username:e.target.value
                    })
                }}/>
                <LabelledInput label = "Password" type="password" placeholder="123456789" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        password:e.target.value
                    })
                }}/>
                </div>
                <div className="mt-8">
                    <button onClick={sendRequest} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup" ? "Sign Up" : "Sign In"}</button>
                </div>  
            </div>
        </div> 
    </div>
}

interface labelledInput {
    label:String;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?:string
}

function LabelledInput({label, placeholder, onChange, type}: labelledInput){
    return <div>
        <label className="block flex justify-left text-sm/6 font-semibold text-gray-900 mt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} name="" id="email" placeholder={placeholder} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
    </div>
}

