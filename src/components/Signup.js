import React, { useRef } from 'react';
import SubmitButton from './common/SubmitButton';
import FormControl from './common/FormControl';

const Signup = () => {
    let nameFieldRef = useRef(null);
    let emailFieldRef = useRef(null);
    let passwordFieldRef = useRef(null);
    let confirmPasswordFieldRef = useRef(null);

    const handleSignup = e => {
        e.preventDefault();
        console.log(nameFieldRef.current.value)
        console.log(emailFieldRef.current.value)
        console.log(passwordFieldRef.current.value)
        console.log(confirmPasswordFieldRef.current.value)

        nameFieldRef.current.value = '';
        emailFieldRef.current.value = '';
        passwordFieldRef.current.value = '';
        confirmPasswordFieldRef.current.value = '';
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Signup</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        {/* name field */}
                        <FormControl label='Name' type='text' ref={nameFieldRef}></FormControl>
                        {/* email field */}
                        <FormControl label='Email' type='email' ref={emailFieldRef}></FormControl>
                        {/* password field */}
                        <FormControl label='Password' type='password' ref={passwordFieldRef}></FormControl>
                        {/* confirm password field */}
                        <FormControl label='Confirm Password' type='password' ref={confirmPasswordFieldRef}></FormControl>
                        {/* submit button */}
                        <SubmitButton buttonText={'Signup'}></SubmitButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;