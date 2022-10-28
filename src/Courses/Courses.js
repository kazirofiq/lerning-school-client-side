import React from 'react';
import Education from '../Pages/Education/Education/Education';
import RightSideNav from '../Pages/Share/RightSideNav/RightSideNav';

const Courses = () => {
    return (
        <div className="grid lg:grid-cols-4 gap-4 p-5">
        <div class="col-span-3">
        
            
            <Education></Education>
        
        
        
        </div>
        <div className='hidden lg:block'>
            <RightSideNav></RightSideNav>
            
        </div>
      </div>
    );
};

export default Courses;