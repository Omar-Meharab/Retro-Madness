import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const AddBlogs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            title: data.title,
            description: data.description,
            imageURL: imageURL
        };
        const url = `https://guarded-citadel-20771.herokuapp.com/addBlogs`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res));
    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'd7b58dd4a615c2b48d8bd42eb97d1a8f');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <section>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Sidebar />
                <div className="grid grid-flow-row auto-rows-max feedback p-5 float-right">
                    <div className="container">
                        <div className="text-xl text-center font-bold text-white mb-5">
                            <h1 className="text-primary">Write Your Blog</h1>
                        </div>
                        <div className="col-md-9 text-center mx-auto">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <textarea cols="150" rows="" className="form-control" name="title" placeholder="Title" {...register("title")} />
                                </div>
                                <br />
                                <div className="flex justify-center">
                                    <div className="form-group">
                                        <input className="bg-black" type="file" onChange={handleImageUpload} />
                                    </div>
                                    <br />
                                    <input className="bg-black font-bold text-white" type="submit" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <textarea cols="150" rows="200" name="description" className="form-control py-5" placeholder="Description" {...register("description")} />
                                </div>
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddBlogs;