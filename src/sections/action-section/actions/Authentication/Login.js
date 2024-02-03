import React, { useRef, useState } from 'react';
import SubmitButton from '../../../../common-components/SubmitButton';
import FormControl from '../../../../common-components/FormControl';
import SuccessAlert from '../../../../common-components/SuccessAlert';
import ErrorAlert from '../../../../common-components/ErrorAlert';

const Login = ({ setIsAlreadyUser }) => {
    let emailFieldRef = useRef(null);
    let passwordFieldRef = useRef(null);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = e => {
        e.preventDefault();

        setError('');
        setSuccess('');
        setLoading(true);

        const user = {
            email: emailFieldRef.current.value,
            password: passwordFieldRef.current.value,
        }

        fetch('http://localhost:5000/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.user) {
                    setSuccess(`Hey ${data.user.name}, Welcome Back !`)
                    console.log(data.user)
                }
                else if (data.error) {
                    setError(data.error)
                }
                else {
                    setError('Something Went Wrong.')
                }

            })
            .catch(err => {
                setError(err.message)
            })
            .finally(() => {
                emailFieldRef.current.value = '';
                passwordFieldRef.current.value = '';

                setLoading(false)
            })
    }

    return (
        <div className="hero md:min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold my-3">Login</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        {/* email field */}
                        <FormControl label='Email' type='email' ref={emailFieldRef}></FormControl>
                        {/* password field */}
                        <FormControl label='Password' type='password' ref={passwordFieldRef}></FormControl>
                        {/* submit button */}
                        <SubmitButton buttonText={'Login'} loading={loading}></SubmitButton>
                    </form>
                </div>
                <p>Don't have an account? <span onClick={() => setIsAlreadyUser(false)} className='text-primary underline hover:cursor-pointer'>Signup</span></p>
                <SuccessAlert success={success} setSuccess={setSuccess}></SuccessAlert>
                <ErrorAlert error={error} setError={setError}></ErrorAlert>
            </div>
        </div>
    );
};

export default Login;