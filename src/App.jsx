import { useState } from 'react'
import './App.css'
import Header from './Header'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },

    {
        path: "/about",
        element: <About></About>,
      },

  ]);

function App() {


  return (
    <>

    <RouterProvider router = {router}>
  <Header></Header>
  </RouterProvider>

  
    </>
  )
}

export default App
