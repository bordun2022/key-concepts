import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import { RouterProvider, createHashRouter } from "react-router-dom";
import Component from "./pages/Component";
import State from "./pages/State";
import Events from "./pages/Events";
import RootLayout from "./pages/RootLayout";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/component", element: <Component /> },
      { path: "/state", element: <State /> },
      { path: "/events", element: <Events /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
