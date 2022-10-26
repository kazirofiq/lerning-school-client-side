import React from 'react';

const Courses = () => {
    return (
        <div className="grid grid-cols-3 gap-4 p-5">
        <div class="col-span-2 ...">
            <h2>Home page</h2>
        <div className='grid grid-cols-3 gap-4'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                <img  src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
                </div>
            </div>
        </div>
        
        </div>
        <div class="...">
            <h2>ALL COURSES</h2>
            
        </div>
      </div>
    );
};

export default Courses;