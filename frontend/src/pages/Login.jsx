import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
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
import { Link, useNavigate } from "react-router-dom";
import SmallBanner from "@/components/SmallBanner";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:1100/api/users/Login",
        payload,
      );

      login(response.data.user, response.data.token);

      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen max-w-full  flex items-center justify-center gap-30">
      <SmallBanner />
      <div className="max-w-md   flex-1 ">
        <Card className="w-full max-w-sm text-center">
          <CardHeader>
            <CardTitle className="text-xl text-cyan-600">
              Login to your account
            </CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>

            {error && <p className="text-red-600">{error}</p>}
            {success && (
              <p className="text-green-600">Logged In successfully</p>
            )}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
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
                    <Link
                      to="/forgot-password"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                  />
                </div>
              </div>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full mt-8">
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <Spinner /> Logging In...cd
                    </span>
                  ) : (
                    "Login"
                  )}
                </Button>

                <div className="flex items-center gap-3">
                  <p className="font-semibold">Don't have an account ?</p>
                  <Link
                    to="/Signup"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline font-bold text-cyan-500"
                  >
                    Sign Up
                  </Link>
                </div>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
