"use client";

import React from 'react';

const DesktopCTA = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                Start your 14 days free trial
            </h1>
            {/* Subheading */}
            <p className="text-gray-500 text-lg md:text-xl mb-6 max-w-xl">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
            </p>
            {/* CTA Button */}
            <button className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-blue-600 transition">
                Try it free now
            </button>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
                <a href="#" className="text-blue-400 hover:text-blue-500 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.014-.608 1.794-1.57 2.163-2.724-.949.564-2.001.974-3.127 1.196-.897-.956-2.178-1.554-3.594-1.554-2.72 0-4.927 2.207-4.927 4.927 0 .386.043.763.128 1.124-4.094-.205-7.725-2.165-10.157-5.144-.424.725-.666 1.566-.666 2.465 0 1.701.867 3.2 2.188 4.081-.806-.025-1.566-.247-2.229-.617v.062c0 2.376 1.689 4.356 3.933 4.803-.411.111-.844.171-1.292.171-.316 0-.624-.031-.927-.089.625 1.953 2.444 3.376 4.6 3.414-1.685 1.32-3.809 2.105-6.115 2.105-.397 0-.79-.023-1.176-.069 2.18 1.397 4.768 2.21 7.548 2.21 9.051 0 13.999-7.498 13.999-13.997 0-.213-.005-.425-.014-.637.96-.694 1.796-1.562 2.457-2.549z" />
                    </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.5c-.9.4-1.8.7-2.8.9 1-.6 1.7-1.6 2-2.7-.9.6-2 1-3.1 1.3-1-1-2.3-1.5-3.7-1.5-3 0-5.5 2.5-5.5 5.5 0 .4 0 .8.1 1.1-4.5-.2-8.4-2.4-11-5.7-.5 1-1 2-1 3.1 0 1.1.5 2.1 1.4 2.7-.8 0-1.5-.3-2.1-.6v.1c0 1.5 1.1 2.8 2.5 3-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.5 3.5-1.7 1.4-3.9 2.2-6.3 2.2-.4 0-.7 0-1.1-.1 2.3 1.5 5.1 2.3 8.1 2.3 9.7 0 15-8.1 15-15 0-.2 0-.5 0-.7.6-.4 1.2-1 1.7-1.7z" />
                    </svg>
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 5.6c-.8.4-1.7.7-2.6.9 1-.6 1.7-1.5 2.1-2.7-.9.6-2 1-3.1 1.3-.9-.9-2.3-1.4-3.7-1.4-2.7 0-5 2.2-5 5 0 .4 0 .8.1 1.2-4.2-.2-8-2.2-10.5-5.3-.4.7-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4-.9-.1-1.7-.3-2.4-.7v.1c0 2.4 1.7 4.3 4 4.8-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 2 2.4 3.5 4.5 3.6-1.7 1.3-3.8 2.1-6 2.1-.4 0-.7 0-1-.1 2.2 1.4 4.8 2.3 7.6 2.3 9.1 0 15-7.4 15-15 0-.2 0-.5 0-.7.7-.5 1.3-1.1 1.8-1.8z" />
                    </svg>
                </a>
               
            </div>
        </div>
    );
};

export default DesktopCTA;
