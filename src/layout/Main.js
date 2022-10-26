import React from 'react';
import { Footer } from 'react-daisyui';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Share/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;