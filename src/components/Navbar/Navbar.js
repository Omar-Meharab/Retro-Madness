import React from 'react';

const Navbar = () => {
    return (
        <div className="fixed top-0 z-50 w-full">
            <div className="flex justify-between py-4 px-24 bg-black text-white font-bold">
                <h1>Retro Madness</h1>
                <ul className="flex space-x-20 justify-between">
                    <li><a href="/">Home</a></li>
                    <li><a href="/addBlogs">Write A Blog</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;