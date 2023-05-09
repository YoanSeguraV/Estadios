import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import {BrowserRouter} from "react-router-dom";
import {ServicesContextProvider} from './context/context'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ServicesContextProvider>
  <React.StrictMode>
    
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
  </ServicesContextProvider>
)
