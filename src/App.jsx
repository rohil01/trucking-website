import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom"
import React from 'react'
import Home from "./components/Home"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"
import Page4 from "./components/Page4"
import Page5 from "./components/Page5"
function App() {
  

  return (
    <>
        <Home />
        <Page2 />
        <Page3 />
        {/* <Page4 /> */}
        <Page5 />
    </>
      
  )
}

export default App
