import React, { useEffect, useState } from 'react';
import BlogsDetail from '../BlogsDetail/BlogsDetail';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://guarded-citadel-20771.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])

    return (
        <section>
            <div className="">
                <div className="grid grid-cols-3 m-5 p-5 gap-6">
                    {
                        blogs.map(blogs => <BlogsDetail blogs={blogs} key={blogs._id}></BlogsDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;