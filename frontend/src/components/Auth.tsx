import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput } from  "@raavan/medium-common"

export const Auth = ( {type} : {type: "signup" | "signin"})=>{
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name : "",
        username : "",
        password : ""
    })

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div>
                    <div className="text-3xl font-extrabold">
                        Create an account
                    </div>
                    <div className="text-slate-400">
                        Already have an account?
                        <Link className="pl-2 underline" to={"/signin"}>Login</Link>
                    </div>
                </div>
                <div>
                <LabelledInput label = "Name" placeholder="First Name" onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        name:e.target.value
                    })
                }}/>
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

