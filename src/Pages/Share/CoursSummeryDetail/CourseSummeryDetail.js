import React from 'react';

const CourseSummeryDetail = ({educate}) => {
    const {description, title, image,id} = educate;
    console.log(educate)
    return (
        <div className='grid grid-cols-3 gap-4'>
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
            <img  src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            </div>
            </div>
        </div>
    </div>
    );
};

export default CourseSummeryDetail;