
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';

export const SIGN_IN_MUTATION = gql`
  mutation signIn($phone: String!, $password: String!) {
    signIn(input: { phone: $phone, password: $password }) {
      token
    }
  }
`;

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [signInData] = useMutation(SIGN_IN_MUTATION, {
    onCompleted: (data) => {
      const token = data.signIn.token;
      if (token) {
        localStorage.setItem('token', token);
        navigate('/');
      } else {
        setErrorMessage('You have entered a wrong phone number or password');
      }
    },
    onError: () => {
      setErrorMessage('An error occurred while signing in');
    },
  });

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    signInData({
      variables: { phone, password },
    })
      .finally(() => {
        setIsLoading(false);
        setPhone('');
        setPassword('');
      });
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='sm:w-100  p-5'>
        <div className='text-center'>
          <h2 className='font-fira text-medium text-4xl text-[var(--secondary)]'>Welcome Again</h2>
          <p className='mt-3 mb-10'>Plan for the ones you love</p>
        </div>
        {errorMessage && <p className='bg-red-500 text-white py-2 px-4 mb-4'>{errorMessage}</p>}
        <form onSubmit={handleSignIn}>
          <label htmlFor='phoneNumber' className='text-sm font-inter text-[var(--tertiary)]'>
            Phone number
          </label>
          <input
            type='text'
            id='phoneNumber'
            value={phone}
            name='phone'
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder='+254'
            required
            className='w-full rounded-lg placeholder-[var(--primary)] mb-5 border-slate-400'
          />
          <label htmlFor='password' className='text-sm font-inter text-[var(--tertiary)] mt-10'>
            Password
          </label>
          <input
            type='password'
            id='password'
            value={password}
            name='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder='****'
            required
            className='w-full rounded-lg placeholder-[var(--primary)] border-slate-400'
          />
          <p className='text-sm text-[var(--primary)] text-right mt-3'>
            <Link to='#'>Forgot Password</Link>
          </p>
          <button
            type='submit'
            className='bg-[var(--primary)] text-white rounded-lg py-2 px-4 w-full mt-12'
            disabled={isLoading}
          >
            {isLoading ? (
              <svg className='animate-spin h-5 w-5 mx-auto' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm12-5.291c0 3.042-1.135 5.824-3 7.938l-3-2.647A7.962 7.962 0 0020 12h-4zm-5-7.938C18.865 6.176 20 8.958 20 12h4c0-6.627-5.373-12-12-12v4z'
                ></path>
              </svg>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
        <p className='font-medium text-sm text-center mt-5 text-[var(--tertiary-dark)]'>
          Already have an account? <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
