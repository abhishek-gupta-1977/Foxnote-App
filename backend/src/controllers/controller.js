import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import crypto from "crypto";

export const SignUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const User = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await User.save();

    const token = jwt.sign({ id: User._id }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60 * 10,
    });

    const safeUser = {
      id: User._id,
      username: User.username,
      email: User.email,
      createdAt: User.createdAt,
    };

    res.status(201).json({
      success: true,
      message: "User created successFully",
      user: safeUser,
      accessToken: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error during signup",
      error: error.message,
    });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }
    const User = await UserModel.findOne({ email });

    if (!User) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, User.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password!",
      });
    }

    const token = jwt.sign({ userId: User._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    const safeUser = {
      user: User.username,
      email: User.email,
    };

    User.isLoggedIn = true;

    User.save();

    return res.status(200).json({
      success: true,
      message: "User LoggedIn successfully!",
      user: safeUser,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server Error!",
      error: error.message,
    });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email field is required to be filled!",
      });
    }
    const User = await UserModel.findOne({ email });

    if (!User) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const resetotp = Math.floor(100000 + Math.random() * 900000);

    const Expiry = Date.now() + 10 * 60 * 1000;

    User.otp = resetotp;
    User.otpExpiry = Expiry;

    await User.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password reset OTP",
      text: `Your otp for password reset is: ${resetotp}`,
    });

    return res.status(200).json({
      success: true,
      message: "Reset OTP sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error sending reset OTP",
      error: error.message,
    });
  }
};

export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user || user.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }
    if (user.otpExpiry < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "OTP has been expired already! Please generate a new one",
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    user.otp = null;
    user.otpExpiry = null;
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 10 * 60 * 1000;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "OTP verified successFully",
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res.status(500).json({
      success: false,
      message: "Error verifying OTP",
      error: error.message,
    });
  }
};

export const resetPassword = async (req, res) => {
  const { resetToken, newPassword, confirmPassword } = req.body;

  try {
    if (!resetToken) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (!newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Both fields are required!",
      });
    }

    if (confirmPassword !== newPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const User = await UserModel.findOne({
      resetToken,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!User) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    User.password = hashedPassword;
    User.resetToken = null;
    User.resetTokenExpiry = null;
    await User.save();

    return res.status(200).json({
      success: true,
      message: "Password reset successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
