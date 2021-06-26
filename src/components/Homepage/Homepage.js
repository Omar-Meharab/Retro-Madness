import React from 'react'
// import Navbar from '../Navbar/Navbar';
import Blogs from '../Blogs/Blogs';

const Homepage = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div>
                <h1 className="h-auto text-center font-bold text-5xl header p-5">Wanna Read Some Blogs?</h1>
                <Blogs></Blogs>
            </div>
            
        </div>
    );
};

export default Homepage;