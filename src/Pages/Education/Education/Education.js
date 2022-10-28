import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummeryDetail from '../../Share/CoursSummeryDetail/CourseSummeryDetail';

const Education = () => {
    const allCourse = useLoaderData();
    return (
        <div>
          
        <div className='grid lg:grid-cols-3 gap-4'>
            {
                allCourse.map(educate => <CourseSummeryDetail
                key={educate.id}
                educate={educate}
                ></CourseSummeryDetail>)
            }
            </div>
        </div>
    );
};

export default Education;