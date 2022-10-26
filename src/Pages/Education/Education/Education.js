import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummeryDetail from '../../Share/CoursSummeryDetail/CourseSummeryDetail';

const Education = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h2>This is education page{allCourse.length}</h2>

            {
                allCourse.map(educate => <CourseSummeryDetail
                key={educate.id}
                educate={educate}
                ></CourseSummeryDetail>)
            }

        </div>
    );
};

export default Education;