import React, { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
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
import { Spinner } from "@/components/ui/spinner"
import {  useNavigate } from "react-router-dom";
import SmallBanner from "@/components/SmallBanner";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState("");
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      console.log(name, email, password);
      const response = await axios.post(
        `http://localhost:1100/api/users/signup`,
        {
          username,
          email,
          password,
        },
      );
      console.log("Success: ", response.data);
      setLoading(false)

      if(response.data.success){
        navigate('/login')
      }
      
    } catch (error) {
      setError(error)
      setLoading(false);
    }
  };

  const togglePassword = async (e) => {
    e.preventDefault();
   await setShowPassword(!showPassword);
  };

  return (
    <div>
     
    <div className="min-h-screen w-full flex items-center justify-center   gap-30">
       <SmallBanner/>
      <div className="flex-1 max-w-md ">
        <div className="bg-white w-full   p-5 rounded-2xl  border shadow-2xl flex items-center justify-center">
          <Card className="w-full max-w-sm flex fle-c' gap-8 ">
            <CardHeader>
              <CardTitle className="text-center text-3xl text-cyan-700">
                Sign Up
              </CardTitle>
              <CardDescription className="text-center">
                Enter your email below to Sign Up
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="username">Full Name</Label>

                    <Input
                      id="username"
                      placeholder="Full name"
                      onChange={(e) => setUserName(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <div className="flex">
                      <Input
                      id="password"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <button className="" onClick={togglePassword}>
                      {showPassword  ? <EyeOff height={15}/> : <Eye height={15}/>} 
                    </button>
                    </div>
                  </div>
                  <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                      {loading ? (<span className="flex gap-5"><Spinner/> Loading...</span>) : "SignUp"}
                    </Button>

                    <div className="flex items-center gap-3">
                      <p>Already have an account ?</p>
                      <a href="/login" className="ml-auto inline-block text-sm underline-offset-4 hover:underline font-bold text-cyan-500"> Login</a>
                    </div>
                  </CardFooter>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
