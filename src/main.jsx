import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import{createBrowserRouter,RouterProvider}from 'react-router-dom'
import  HomePage  from '@/routes/homePage';
import  DashboardPage  from '@/routes/dashboardPage';
import  ChatPage  from '@/routes/chatPage';
import  RootLayout  from '@/routes/layouts/rootLayout';
import  DashboardLayout  from '@/routes/layouts/dashboardLayout';
import  SignInPage  from '@/routes/signInPage';
import  SignUpPage  from '@/routes/signUpPage';

// Import your publishable key



const router = createBrowserRouter([
{
  element: <RootLayout/>,
  children:[
    {
      path:'/',
      element:<HomePage/>
      },
      {
        path:'/sign-in/*',
        element:<SignInPage/>
      },
      {
        path:'/sign-up/*',
        element:<SignUpPage/>
      },
      {
       
        element:<DashboardLayout/>,
        children:[
          {
            path:'/dashboard',
            element:<DashboardPage/>
          },
          {
            path:'/dashboard/chats/:id',
            element:<ChatPage/>
          }
        ]
      }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


