import React, { useState } from "react";
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { login } from "../interfaces/interfaces";

let signin_url = 'http://172.30.5.30:8000/user/login/'

function SignIn() {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const onFormChange =(e:any)=>{
        const name = e.currentTarget.name
        const value  = e.currentTarget.value

        setFormData({
            ...formData,
            [name]:value
        })
    }

    const postLoginData=async()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email:formData.email, password:formData.password })
        };
        const response = await fetch(signin_url, requestOptions);
        const data = await response.json();
        console.log(data);
        
    }

    
    
    return (
        <main className="min-h-screen flex justify-center items-center">
            <section className="container flex flex-col max-w-2xl gap-6 p-8">
                <h2 className="text-4xl mb-10 text-center">Sign in.</h2>

                <div className="flex flex-col gap-8">
                    <button className="oauth-btn"><i><FaGoogle /></i> Continue with Google</button>
                    <button className="oauth-btn"><i><FaFacebook /></i> Continue with Facebook</button>
                </div>

                <p className="text-xl text-center">or</p>

                <h1>{formData.email}</h1>
                <h1>{formData.password}</h1>

                <div className="flex flex-col gap-8">
                    <input className="form-input" type='email' placeholder="Email" name='email' onChange={onFormChange}/>
                    <input className="form-input" placeholder="Password" type='password' name="password" onChange={onFormChange}/>
                </div>

                <button className="oauth-btn cta" onClick={postLoginData}>Sign in.</button>

                <div className="flex justify-center items-center mt-2 gap-6 flex-col">

                <p className="text-[#9b9aa1] text-xl">{`Don't have an account?`} <a className="text-white font-bold cursor-pointer">Create Account</a></p>
                <a className="font-bold text-xl cursor-pointer">Forgot Password?</a>
                </div>

            </section>
        </main>
    )
}

export default SignIn