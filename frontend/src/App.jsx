import React from 'react'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import VerifyOtp from './pages/VerifyOtp'
import Home from './pages/Home'
import ForgotFlowGuard from './routes/ForgotFlowGuard'
import OtpFlowGuard from './routes/OtpFlowGuard'
import Dashboard from './pages/Dashboard'

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    },
    {
      path:"*",
      element:<NotFound/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    },
    {
      path:"/forgot-password",
      element:<ForgotPassword/>
    },
    
    {
      path:"/verify-otp",
      element:(
        <ForgotFlowGuard>
          <VerifyOtp/>
        </ForgotFlowGuard>
      )
    },
    {
      path:"/reset-password",
      element:(
        <OtpFlowGuard>
          <ResetPassword/>
        </OtpFlowGuard>
      )
    },
    
  ])
  
  
  return (
    <>
      <div className="absolute inset-0 -z-10"
          style={{
            background: `
        radial-gradient(ellipse 85% 65% at 8% 8%, rgba(175, 109, 255, 0.42), transparent 60%),
            radial-gradient(ellipse 75% 60% at 75% 35%, rgba(255, 235, 170, 0.55), transparent 62%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(255, 100, 180, 0.40), transparent 62%),
            radial-gradient(ellipse 70% 60% at 92% 92%, rgba(120, 190, 255, 0.45), transparent 62%),
            linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      `,
          }}>
        <RouterProvider router={router}>
          
        </RouterProvider>
      </div>
    </>
  )
}

export default App
