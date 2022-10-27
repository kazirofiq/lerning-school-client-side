import React from 'react';
import { Link } from 'react-router-dom';

const CourseSummeryDetail = ({educate}) => {
    const {description, title, image,id} = educate;
    console.log(educate)
    return (
        
        <div className="card w-100 bg-base-100 shadow-xl col-span-1 ">
            <figure className="px-10 pt-10">
            <img  src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>

            {
                description.length > 100 ?
                <p>{description.slice(0, 250) + '...'} <Link to={`/courses/${id}`}>Read More...</Link></p>
                :
                <p>{description}</p>
            }
            
            <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            </div>
            </div>
        
    </div>
    );
};

export default CourseSummeryDetail;