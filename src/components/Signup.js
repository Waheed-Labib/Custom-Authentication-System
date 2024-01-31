import React, { useRef, useState } from 'react';
import SubmitButton from './common/SubmitButton';
import FormControl from './common/FormControl';
import { ErrorAlert } from './common/ErrorAlert';
import SuccessAlert from './common/SuccessAlert';

const Signup = () => {
    const nameFieldRef = useRef(null);
    const emailFieldRef = useRef(null);
    const passwordFieldRef = useRef(null);
    const confirmPasswordFieldRef = useRef(null);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = e => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        // if passwords don't match, show alert & return
        if (passwordFieldRef.current.value !== confirmPasswordFieldRef.current.value) {
            setError('Your passwords did not match.')
            passwordFieldRef.current.value = '';
            confirmPasswordFieldRef.current.value = '';
            return
        }

        const user = {
            name: nameFieldRef.current.value,
            email: emailFieldRef.current.value,
            password: passwordFieldRef.current.value,
        }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setSuccess('User Created Successfully.')
                }
                else if (data.message) {
                    setError(data.message)
                }
                else {
                    setError('Something Went Wrong.')
                }
                nameFieldRef.current.value = '';
                emailFieldRef.current.value = '';
                passwordFieldRef.current.value = '';
                confirmPasswordFieldRef.current.value = '';
                setLoading(false)
            })
            .catch(err => {
                console.error(err.message, 'error')
                nameFieldRef.current.value = '';
                emailFieldRef.current.value = '';
                passwordFieldRef.current.value = '';
                confirmPasswordFieldRef.current.value = '';
                setLoading(false)
            })


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
                        <SubmitButton buttonText={'Signup'} loading={loading}></SubmitButton>
                    </form>
                </div>
                <SuccessAlert success={success} setSuccess={setSuccess}></SuccessAlert>
                <ErrorAlert error={error} setError={setError}></ErrorAlert>
            </div>
        </div>
    );
};

export default Signup;