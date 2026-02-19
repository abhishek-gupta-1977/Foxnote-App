import React from 'react'
import { Navigate } from 'react-router-dom'

const OtpFlowGuard = ({children}) => {
    const otpVerified = localStorage.getItem("otpVerified")

    if(!otpVerified){
        return <Navigate to="/verify-otp"/>
    }
  return children
}

export default OtpFlowGuard
