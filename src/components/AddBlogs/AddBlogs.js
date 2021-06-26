import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddBlogs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            title: data.title,
            description: data.description,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addBlogs`
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
            {/* <Sidebar /> */}
            <div className="grid grid-flow-row auto-rows-max feedback py-5">
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
                            <div className="form-group">
                                <input className="bg-yellow-100" type="file" onChange={handleImageUpload} />
                            </div>
                            <br />
                            <div className="form-group">
                                <textarea cols="150" rows="200" name="description" className="form-control py-5" placeholder="Description" {...register("description")} />
                            </div>
                            <br />
                            <input className="btn btn-primary" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddBlogs;