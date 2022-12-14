import React from 'react';
import { FaPrint } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Capter = () => {
    const educate = useLoaderData();
    const {title, image, price, description, id} = educate;
    console.log(educate)
    return (
        <div ref={ref} className="card w-9/12 bg-base-300 shadow-xl mx-auto">
        <figure>
            <img src={image} alt="Shoes" />
            
        </figure>
        <div className="card-body">
        <h2 className="card-title">
        {title}
        <div className="badge badge-secondary"></div>
        </h2>
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='flex items-center' onClick={toPdf}><FaPrint></FaPrint>Download <span className='text-3xl font-bold text-red-700'>Pdf</span></button>}
        </Pdf>
        <p>{description}</p>
        <div className="card-actions justify-end">
        <div className="badge badge-outline text-purple-400">Enrol Noe (free)</div> 
        <Link to={`/checkout/${id}`}>
            <div className="badge badge-outline text-fuchsia-600">Get Premium Access</div>
        </Link>
        </div>
        </div>
        </div>
    );
};

export default Capter;