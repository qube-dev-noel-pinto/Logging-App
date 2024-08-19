import React from 'react';

const Toast = ({ message, type, onClose }) => {
  const toastClasses = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
  };

  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg ${toastClasses[type]}`}
      role="alert"
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
