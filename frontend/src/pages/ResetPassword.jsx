import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import SmallBanner from "@/components/SmallBanner";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [success,setSuccess] = useState(false)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault()

      setLoading(true)
      setError("")
      setSuccess(false)

       const email = localStorage.getItem('resetEmail')

        if(!email){
          setError("Email missing. Please restart the forgot password flow")
          setLoading(false)
          return;
        }

        if(newPassword !== confirmPassword){
          setError("Passwords do not match")
          setLoading(false)
          return;
        }

      try {

       
        await axios.post('http://localhost:1100/api/users/reset-password', {email,newPassword,confirmPassword})

        setSuccess(true)
        console.log('Password changed successfully!');

        setTimeout(() => {
          navigate("/login")
        }, 2000);
        
      } catch (err) {
        setError(err.response?.data?.message || "Password reset failed!")
        console.log(err);
        
      }finally{
        setLoading(false)
      }
    }

    
  return (
    <div className="min-h-screen max-w-full flex items-center justify-center gap-30">
      <SmallBanner/>
      <div className="flex-1 max-w-md">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              Enter new password to Reset password of your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="New password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Confirm Password</Label>
                  </div>
                  <Input
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" disabled={loading} className="w-full mt-5">
                 {loading ? "Resetting..." : "Reset Password"}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;
