import React from 'react';
import { createBrowserRouter, Link } from 'react-router-dom';
import Courses from '../Courses/Courses';
import Main from '../layout/Main';
import Login from '../Login/Login/Login';
import Register from '../Login/Register/Register';
import Blog from '../Others/Blog/Blog';
import Profile from '../Others/Profile/Profile';
import TermsCondition from '../Others/TermsCondition/TermsCondition';
import Category from '../Pages/Category/Category/Category';
import Class from '../Pages/Capter/Capter';
import Education from '../Pages/Education/Education/Education';
import Home from '../Pages/Home/Home/Home';

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Capter from '../Pages/Capter/Capter';
import ChackoutPage from '../Others/ChackoutPage/ChackoutPage';
import Faq from '../Others/Faq/Faq';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
          {
              path:'/',
              element: <Home></Home>
              
          },
          {
              path:'/home',
              element: <Home></Home>
              
          },
          {
              path:'/courses',
              element: <Courses></Courses>,
              loader: () => fetch('https://server-side-gamma.vercel.app/courses')
          },
          
          {
              path:'/category/:id',
              element: <Category></Category>,
              loader: ({params}) => fetch(`https://server-side-gamma.vercel.app/category/${params.id}`)
          },
          {
              path:'/education',
              element: <Education></Education>,
              
          },
          {
              path:'/courses/:id',
              element: <Capter></Capter>,
              loader: ({params}) => fetch(`https://server-side-gamma.vercel.app/courses/${params.id}`)
             
          },
          {
            path:'/login',
            element: <Login></Login>
          },
          {
            path: '/register',
            element: <Register></Register>
          },
          {
            path:'/terms',
            element: <TermsCondition></TermsCondition>
          },
          {
            path:'/profile',
            element: <Profile></Profile>
          },
          {
            path:'/blog',
            element: <Blog></Blog>
          },
         
          {
            path:'/checkout/:id',
            element: <PrivateRoute><ChackoutPage></ChackoutPage></PrivateRoute>,
            loader: ({params}) => fetch(`https://server-side-gamma.vercel.app/checkout/${params.id}`) 
          },
          {
            path:'/faq',
            element: <Faq></Faq>,
            
          },
         
  
        ]

    },
    {
      path:'*',
      element: <div className='text-center text-5xl text-red-600 mt-4 '>This Page Not Found <span className='text-blue-600 text-sm'><Link to='/home'>click Home</Link></span>
      </div>
    }
  ]);