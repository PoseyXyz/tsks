import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { signup } from "../interfaces/interfaces";

let signup_url = 'http://172.30.5.30:8000/user/register/'

function SignUp(){
    const [formData, setFormData] = useState({
        username:'',
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

    const postSignupData=async()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        const response = await fetch(signup_url, requestOptions);
        const data = await response.json();
        console.log(data);
        
    }
    return(
        <main className="min-h-screen flex justify-center items-center">
        <section className="container flex flex-col max-w-2xl gap-6 p-8">
            <h2 className="text-4xl mb-10 text-center">Sign up.</h2>

            <div className="flex flex-col gap-8">
                <button className="oauth-btn"><i><FaGoogle /></i> Signup with Google</button>
                <button className="oauth-btn"><i><FaFacebook /></i> Signup with Facebook</button>
            </div>

            <p className="text-xl text-center">or</p>

            <h1>{formData.username}</h1>

            <form className="flex flex-col gap-8">
                <input className="form-input" required placeholder="Username" type='text' name='username' onChange={onFormChange}/>
                <input className="form-input" required placeholder="Email" type='email' name='email' onChange={onFormChange}/>
                <input className="form-input" required placeholder="Password" type='password' name='password' onChange={onFormChange}/>
                <input className="form-input" required placeholder="Confirm Password" type='password'/>
            </form>

            <button className="oauth-btn cta" onClick={postSignupData}>Sign up.</button>

            <div className="flex justify-center items-center mt-2 gap-6 flex-col">

            <p className="text-[#9b9aa1] text-xl">Have an account? <a className="text-white font-bold cursor-pointer">Sign in</a></p>
            </div>

        </section>
    </main>
    )
}

export default SignUp