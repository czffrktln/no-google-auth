import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"


import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import { AuthProvider } from './AuthContext'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { path: "login", element: <LoginPage /> },
    { path: "registration", element: <RegistrationPage />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
