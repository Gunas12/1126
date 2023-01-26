import React from 'react';
import './main.scss';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Mainpage from './Pages/Mainpage';
import Add from './Pages/Add';
import Detail from './Pages/Detail';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"add",
        element:<Add/>
      },
      {
        path:"detail",
        element:<Detail/>
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


