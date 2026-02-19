import React from 'react'
import { Navigate } from 'react-router-dom'

const ForgotFlowGuard = ({children}) => {
    const forgotDone = localStorage.getItem("forgotPasswordDone")

    if(!forgotDone){
        return <Navigate to="/forgot-password" replace/>
    }
  return children;
}

export default ForgotFlowGuard
