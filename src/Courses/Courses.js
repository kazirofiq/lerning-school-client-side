import React from 'react';
import Education from '../Pages/Education/Education/Education';
import RightSideNav from '../Pages/Share/RightSideNav/RightSideNav';

const Courses = () => {
    return (
        <div className="grid lg:grid-cols-3 gap-4 p-5">
        <div class="lg:col-span-2 ...">
            
            <Education></Education>
        
        </div>
        <div className='hidden lg:block'>
            <RightSideNav></RightSideNav>
            
        </div>
      </div>
    );
};

export default Courses;