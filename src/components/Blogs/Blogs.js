import React, { useEffect, useState } from 'react';
import BlogsDetail from '../BlogsDetail/BlogsDetail';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])

    return (
        <section>
            <div className="">
                <div className="grid grid-cols-3 m-5 p-4 gap-6">
                    {
                        blogs.map(blogs => <BlogsDetail blogs={blogs} key={blogs._id}></BlogsDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;