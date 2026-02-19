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
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SmallBanner from "@/components/SmallBanner";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("Enter all the six digits of the OTP");
      return;
    }
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const email = localStorage.getItem("resetEmail");

      if (!email) {
        setError("Email not found. Please retry forgot-password");
        return;
      }
      await axios.post("http://localhost:1100/api/users/verify-otp", {
        email,
        otp,
      });

      setSuccess(true);
      localStorage.setItem("otpVerified", "true");

      setTimeout(() => {
        navigate("/reset-password");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "OTP Verification failed!");
      console.log(err.response.data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen max-w-full flex items-center justify-center gap-30">
      <SmallBanner />
      <div className="flex-1 max-w-md">
        <Card className="w-full max-w-sm ">
          <CardHeader>
            <CardTitle>Verify OTP</CardTitle>
            <CardDescription>
              Enter OTP received on your Email for reset password
            </CardDescription>
            {error && <p className="text-red-600">{error}</p>}
            {success && (
              <p className="text-green-600">OTP verified successfully!</p>
            )}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Enter OTP</Label>
                  <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS}
                    value={otp}
                    onChange={setOtp}
                  >
                    <InputOTPGroup className=" flex items-center justify-center w-full">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSeparator />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSeparator />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </div>
              <CardFooter className="flex-col gap-2 mt-5">
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Verifying..." : "Verify OTP"}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VerifyOtp;
