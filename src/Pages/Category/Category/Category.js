import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummeryDetail from '../../Share/CoursSummeryDetail/CourseSummeryDetail';

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <div>
            <h2 className='text-center'>Category:{categoryCourse.length}</h2>

            {
                categoryCourse.map(educate => <CourseSummeryDetail
                key={educate.id}
                educate={educate}
                ></CourseSummeryDetail>)
            }
        </div>
    );
};

export default Category;