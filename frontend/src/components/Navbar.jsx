import React from "react";
import logo from "../assets/noBG.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LayoutDashboard,
  LogOutIcon,
  UserIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    if (!user) return;
    logOut();
    navigate("/login");
  };

  const Dashboard = () => {
    navigate("/dashboard");
  };
  return (
    <nav className=" bg-white/40 backdrop-blur-3xl border-b border-gray-200">
      <motion.div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16"
       initial={{ opacity: 0, scale: 0.6, y: 40 }}  
        animate={{ opacity: 1, scale: 1, y: 0 }}     
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-10" alt="Foxnote Logo" />
          <span className="self-center text-xl text-heading font-serif whitespace-nowrap">
            Foxnote
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row gap-10 md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <a
                href="/#Hero"
                className="block py-2 px-3 text-cyan-600 bg-brand rounded md:bg-transparent hover:underline md:text-fg-brand md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#Features"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary hover:underline md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/#Pricing"
                className="block py-2 px-3 text-heading rounded hover:underline hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/#Faqs"
                className="block py-2 px-3 text-heading rounded hover:underline hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                    <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                  </Avatar>
                </div>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Profile</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <UserIcon />
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={Dashboard}>
                        <LayoutDashboard />
                        Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={handleLogout}
                        variant="destructive"
                      >
                        <LogOutIcon />
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ) : (
              <button
                className="text-whitebg-indigo-600 hover:bg-indigo-500 transition px-8 py-2 font-bold rounded-lg "
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
