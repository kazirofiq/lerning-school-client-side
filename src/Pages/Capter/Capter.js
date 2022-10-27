import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Capter = () => {
    const educate = useLoaderData();
    console.log(educate)
    return (
        <div>
            <h2>This is all coarse {educate.title}</h2>
        </div>
    );
};

export default Capter;