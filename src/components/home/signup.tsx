"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
function SignForm() {
  // const router = useRouter();
  // const [formData, setFormData] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     password: "",
  //     about: "",
  //     image: [],
  // });
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  // const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //     setFormData({ ...formData, about: e.target.value });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     setError("");

  //     const result = await signUpUser(formData);

  //     if (result.error) {
  //         setError(result.error);
  //     } else {
  //         router.push("/login");
  //     }

  //     setLoading(false);
  // };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    if (!email || !password) {
      alert("Please enter both username and password");
      return;
    }
    localStorage.setItem("studentUser", JSON.stringify({ email, password }));
    e.preventDefault();
    alert("Account created! Please log in.");
    router.push("/home/login");
  };

  return (
    <div className="flex p-6 pt-16 justify-center flex-col max-w-[500px] h-full font-raleway sm:h-screen sm:mx-auto">
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-bold">Create Your Account Here</h3>
      </div>

      <form onSubmit={handleSignup}>
        <div className="space-y-3 py-5">
          <div className="grid-cols-2 grid gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              // value={formData.firstName}
              //   onChange={handleChange}
              required
              className="bg-black/10 outline-none p-4 dark:border border-gray-700 placeholder:dark:text-white rounded-md placeholder:text-xs placeholder:text-black/50"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              // value={formData.lastName}
              //   onChange={handleChange}
              required
              className="bg-black/10 outline-none p-3 dark:border border-gray-700 placeholder:dark:text-white rounded-md placeholder:text-xs placeholder:text-black/50"
            />
          </div>
          <div className="grid gap-3">
            <input
              type="email"
              name="email"
              placeholder="Email: user@gmail.com"
              // value={formData.email}
              //   onChange={handleChange}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black/10  dark:border border-gray-700 placeholder:dark:text-white outline-none p-3 rounded-md placeholder:text-xs placeholder:text-black/50"
            />
            <div className="flex items-center bg-black/10 outline-none dark:border border-gray-700  p-3 rounded-md grid-cols-2 justify-between">
              <input
                type="password"
                name="password"
                placeholder="Password"
                // value={formData.password}
                // onChange={handleChange}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="placeholder:text-xs  placeholder:dark:text-white placeholder:text-black/50 bg-transparent outline-none"
              />
              <Eye className="h-4 w-4" />
            </div>
            <div>
              <div className="w-full bg-black/10 outline-none dark:border border-gray-700 p-2 rounded-xl h-24">
                <textarea
                  name="about"
                  id=""
                  placeholder="Please tell us a bit about yourself..."
                  className="w-full outline-none bg-transparent text-xs placeholder:text-black/50 break-words resize-none"
                  // value={formData.about}
                  //   onChange={handleText}
                />
              </div>
            </div>
          </div>
          {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
          <div className="flex items-center w-full pb-3 gap-1 text-xs">
            <p>Already a member?</p>
            <Link href={"/home/login"} className="text-blue-900 underline">
              Login
            </Link>
          </div>
          <Button
            onClick={handleSignup}
            className="w-full rounded-md bg-blue-900"
            type="submit"
            // disabled={loading}
          >
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignForm;
