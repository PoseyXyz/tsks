import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { signup } from "../interfaces/interfaces";

function SignUp(){
    return(
        <main className="min-h-screen flex justify-center items-center">
        <section className="container flex flex-col max-w-2xl gap-6 p-8">
            <h2 className="text-4xl mb-10 text-center">Sign up.</h2>

            <div className="flex flex-col gap-8">
                <button className="oauth-btn"><i><FaGoogle /></i> Signup with Google</button>
                <button className="oauth-btn"><i><FaFacebook /></i> Signup with Facebook</button>
            </div>

            <p className="text-xl text-center">or</p>

            <div className="flex flex-col gap-8">
                <input className="form-input" placeholder="Username"/>
                <input className="form-input" placeholder="Email"/>
                <input className="form-input" placeholder="Password"/>
                <input className="form-input" placeholder="Confirm Password"/>
            </div>

            <button className="oauth-btn cta">Sign up.</button>

            <div className="flex justify-center items-center mt-2 gap-6 flex-col">

            <p className="text-[#9b9aa1] text-xl">Have an account? <a className="text-white font-bold cursor-pointer">Sign in</a></p>
            </div>

        </section>
    </main>
    )
}

export default SignUp