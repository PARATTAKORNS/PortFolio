import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Homepage from './components/Homepage/Homepage.tsx'
import About from './components/about/About.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Fuzik from './components/work/Fuzik.tsx'
import Play from './play/Play.tsx'
import EventPro from './components/work/EventPro.tsx'
import Minibus from './components/work/Minibus.tsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Homepage />
  },
  {
    path : "about", 
    element : <About />
  },
  {
    path : "play",
    element : <Play />
  },
  {
    path : "Fuzik_Project",
    element : <Fuzik />
  },
  {
    path : "Event_Pro",
    element : <EventPro />
  },
  {
    path : "Minibus",
    element : <Minibus />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
