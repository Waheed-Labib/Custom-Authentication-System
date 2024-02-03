import React, { useContext, useRef, useState } from 'react';
import SubmitButton from '../../../../common-components/SubmitButton';
import FormControl from '../../../../common-components/FormControl';
import { ErrorAlert } from '../../../../common-components/ErrorAlert';
import SuccessAlert from '../../../../common-components/SuccessAlert';
import { AuthContext } from '../../../../context/AuthProvider';

const Signup = () => {

    const { setIsAlreadyUser, setUser } = useContext(AuthContext)

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

        fetch('http://localhost:5000/users/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setUser(user)
                    setSuccess('User Created Successfully.')
                }
                else if (data.error) {
                    setError(data.error)
                }
                else {
                    setError('Something Went Wrong.')
                }
            })
            .catch(err => {
                console.error(err.message, 'error')
            })
            .finally(() => {
                nameFieldRef.current.value = '';
                emailFieldRef.current.value = '';
                passwordFieldRef.current.value = '';
                confirmPasswordFieldRef.current.value = '';
                setLoading(false)
            })


    }

    return (
        <div className="hero md:min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold my-3">Signup</h1>
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
                <p>Already have an account? <span onClick={() => setIsAlreadyUser(true)} className='text-primary underline hover:cursor-pointer'>Login</span></p>
                <SuccessAlert success={success} setSuccess={setSuccess}></SuccessAlert>
                <ErrorAlert error={error} setError={setError}></ErrorAlert>
            </div>
        </div>
    );
};

export default Signup;