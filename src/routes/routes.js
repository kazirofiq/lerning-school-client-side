import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Courses from '../Courses/Courses';
import Main from '../layout/Main';
import Login from '../Login/Login/Login';
import Register from '../Login/Register/Register';
import Blog from '../Others/Blog/Blog';
import Profile from '../Others/Profile/Profile';
import TermsCondition from '../Others/TermsCondition/TermsCondition';
import Category from '../Pages/Category/Category/Category';
import Education from '../Pages/Education/Education/Education';
import Home from '../Pages/Home/Home/Home';

import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
          {
              path:'/home',
              element: <Home></Home>
              // loader: () => fetch('http://localhost:5000/education')
          },
          {
              path:'/courses',
              element: <Courses></Courses>,
              // loader: () => fetch('http://localhost:5000/education')
          },
          
          {
              path:'/category/:id',
              element: <Category></Category>,
              // loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
          },
          {
              path:'/education/:id',
              element: <Education></Education>,
              // loader: ({params}) => fetch(`http://localhost:5000/education/${params.id}`)
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
            path:'/login',
            element: <Login></Login>
          },
          {
            path:'/register',
            element: <Register></Register>
          },
  
        ]

    },
  ]);