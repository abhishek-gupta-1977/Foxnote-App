import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SmallBanner from "@/components/SmallBanner";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success,setSuccess] = useState(false)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError("")
    setSuccess(false)
    try {
      await axios.post("http://localhost:1100/api/users/forgot-password", { email });
      setSuccess(true)
       localStorage.setItem("resetEmail", email);
       localStorage.setItem("forgotPasswordDone", "true");
      setTimeout(() => {
        navigate("/verify-otp")
      }, 2000);
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message)
      console.log(err.response.data);
      
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center gap-30">
      <SmallBanner/>
      <div className="w-full max-w-md h-3/4">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Forgot Password</CardTitle>
            <CardDescription>
              Enter your email below for resetting password
            </CardDescription>
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">OTP sent succssfully!</p>}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="m@example.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <CardFooter className="flex-col gap-2">
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading? "Sending..." : "Send OTP"}
                  </Button>
                  <div className="flex items-center gap-3">
                  <p className="">Remembered Password ?</p>
                  <a
                      href="/login"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline font-bold text-cyan-500"
                    >
                     Login
                    </a>
                </div>
                </CardFooter>
              </div>
              
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
