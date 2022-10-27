import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummeryDetail from '../../Share/CoursSummeryDetail/CourseSummeryDetail';

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <div>
            <h2>This is Category Page :{categoryCourse.length}</h2>

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