"use client";

import { useState } from "react";

import { Eye, Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use next/navigation for redirect
import { Button } from "@/components/ui/button";

const LoginForm = () => {
  // const router = useRouter();
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [loading, setLoading] = useState(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("studentUser") || "{}");

    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/studentDashboard/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex p-6 pt-16 justify-center flex-col max-w-[500px] h-full font-raleway sm:h-screen sm:mx-auto">
      <form onSubmit={handleLogin}>
        <div className="flex flex-col gap-3">
          <h3 className="text-3xl font-bold">Login Here</h3>
        </div>
        <div className="space-y-3 py-5">
          <div className="grid gap-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-black/10 outline-none dark:border border-gray-700 p-3  placeholder:text-xs placeholder:dark:text-white placeholder:text-black/50"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex items-center bg-black/10 outline-none p-3  justify-between dark:border border-gray-700 dark:text-white">
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="placeholder:text-xs placeholder:text-black/50 placeholder:dark:text-white bg-transparent outline-none"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Eye className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-center w-full pb-3 gap-1 text-xs">
            <p>Not yet a member?</p>
            <Link href={"/home/signup"} className="text-blue-900 underline">
              Sign up
            </Link>
          </div>
          <Button
            onClick={handleLogin}
            className="w-full rounded-md bg-blue-900"
            type="submit"
            // disabled={loading}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
