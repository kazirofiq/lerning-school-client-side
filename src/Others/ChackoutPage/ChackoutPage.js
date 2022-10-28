import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ChackoutPage = () => {
    const educate = useLoaderData();
    const {title, image, price, description} = educate;
    const notify = () => toast("Thank you buying this Course!");
    return (
        <div>
            <div className="card w-96 mx-auto glass my-6">
            <figure><img src={image} alt="car!"/></figure>
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions justify-end">
            <button onClick={notify} className="btn w-full btn-primary">Buy Now</button>
            <ToastContainer />
            </div>
            </div>
            </div>
        </div>
    );
};

export default ChackoutPage;