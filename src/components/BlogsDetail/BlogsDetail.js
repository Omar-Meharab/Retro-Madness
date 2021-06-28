import React from 'react';
import { useHistory } from 'react-router-dom';

const BlogsDetail = (props) => {
    const { title, imageURL, _id } = props.blogs;
    const history = useHistory();
    const getBlog = (id) => {
        history.push(`/${id}`);
    }
    return (
        <div onClick={() => getBlog(_id)} className="p-5 bg-white">
            <div className="">
                <img className="" src={imageURL} alt="" />
                <h1 className="text-3xl text-center font-bold pt-5">{title}</h1>
            </div>
        </div>
    );
};

export default BlogsDetail;