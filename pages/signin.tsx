import React from "react";
import { FaGoogle, FaFacebook } from 'react-icons/fa'

function SignIn() {
    return (
        <main className="min-h-screen flex justify-center items-center">
            <section className="container flex flex-col max-w-2xl gap-6 p-8">
                <h2 className="text-4xl mb-10 text-center">Sign in.</h2>

                <div className="flex flex-col gap-8">
                    <button className="oauth-btn"><i><FaGoogle /></i> Continue with Google</button>
                    <button className="oauth-btn"><i><FaFacebook /></i> Continue with Facebook</button>
                </div>

                <p className="text-xl text-center">or</p>

                <div className="flex flex-col gap-8">
                    <input className="form-input" placeholder="Email"/>
                    <input className="form-input" placeholder="Password"/>
                </div>

                <button className="oauth-btn cta">Sign in.</button>

                <div className="flex justify-center items-center mt-2 gap-6 flex-col">

                <p className="text-[#9b9aa1] text-xl">{`Don't have an account?`} <a className="text-white font-bold cursor-pointer">Create Account</a></p>
                <a className="font-bold text-xl cursor-pointer">Forgot Password?</a>
                </div>

            </section>
        </main>
    )
}

export default SignIn