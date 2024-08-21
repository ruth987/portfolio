import React from 'react';
import Image from 'next/image';

const Aboutme = () => {
    return (
        <div className="flex flex-col md:flex-row w-full p-6 bg-gray-900" id="about-me">
            <div className="md:w-1/2 p-4 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-white mb-2">About Me</h1>
                <p className="text-lg text-gray-300 mb-4">I am a passionate Software Engineer with over three years of experience in web development and over six months in mobile development. My expertise includes JavaScript, TypeScript, PHP, ReactJS, NextJS, TailwindCSS, and Flutter. I thrive on creating scalable applications with clean architecture and am always eager to learn and adapt to new technologies. With a strong background in backend development using Node.js and databases like PostgreSQL, MySQL, and MongoDB, I am committed to building efficient and impactful software solutions.</p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
                <Image
                    src='/prome.png'
                    alt="Ruth Wossen"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                />
            </div>
        </div>
    );
}

export default Aboutme;


