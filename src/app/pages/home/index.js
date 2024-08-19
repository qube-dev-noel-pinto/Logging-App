'use client'
import React, { useState } from 'react';
import Toast from '../../components/Toast';  // Import the Toast component

const HomePage = () => {
    const [email, setEmail] = useState('');
    const [toast, setToast] = useState({ message: '', type: '', visible: false });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const apiUrl = 'http://localhost:3001/api/user/getUserDetails';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setToast({ message: 'Sucess!', type: 'success', visible: true });
        } catch (error) {
            setToast({ message: 'There was an error submitting your email.', type: 'error', visible: true });
        }
    };

    const handleCloseToast = () => {
        setToast({ ...toast, visible: false });
    };

    return (
        <div>
            <form className="mb-6 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your email address</label>
                <input
                    type="email"
                    id="helper-text"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    We’ll never share your details. Read our <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.
                </p>
                <button
                    type="submit"
                    className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                    <span className="sr-only">Submit</span>
                </button>
            </form>

            {/* Render Toast */}
            {toast.visible && (
                <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />
            )}
        </div>
    );
};

export default HomePage;
