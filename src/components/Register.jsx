import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { useState } from "react";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Signup = () => {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


const { registeredUsers, setRegisteredUsers,  setLoggedInUser  } = useContext(Auth);
const onSubmit = (data) => {
  const userExists = registeredUsers.find(
    (user) => user.email === data.email
  );

  if (userExists) {
   toast.error("User already exists");
    navigate("/auth");
    return;
  }

  const updatedUsers = [...registeredUsers, data];

  setRegisteredUsers(updatedUsers);
  localStorage.setItem("reg users", JSON.stringify(updatedUsers));

  setLoggedInUser(data);
  localStorage.setItem("log user", JSON.stringify(data));

  navigate("/");
    toast.success("Registered and logged in successfully");
};
  const password = watch("password");

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className="w-9 h-9 bg-[#c8f400] rounded-xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-ink fill-ink"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          </div>
          <span className="font-short font-[530] tracking-wide text-xl text-white">
            Sky<span className="text-[#c8f400]">Mart</span>
          </span>
        </div>

        {/* Card */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-6">

          <h2 className="font-short font-[530] tracking-wide text-2xl mb-1 text-white">
            Create account
          </h2>

          <p className="text-white/40 text-sm mb-8">
            Join SkyMart and start shopping
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Full name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              <p className="text-red-400 text-xs mt-1">
                {errors.name?.message}
              </p>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
              />
              <p className="text-red-400 text-xs mt-1">
                {errors.email?.message}
              </p>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password (min 6 chars)"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4.5 text-white/40 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>

              <p className="text-red-400 text-xs mt-1">
                {errors.password?.message}
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                {...register("confirm", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <p className="text-red-400 text-xs mt-1">
                {errors.confirm?.message}
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#c8f400] flex items-center justify-center text-black rounded-xl py-3.5 font-[530] tracking-wide font-short gap-2  mt-2"
            >
              <p>Create Account</p> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>

          </form>

          {/* Footer */}
          <p className="text-center text-white/30 text-sm mt-6">
            Already have an account?{" "}
            <NavLink to="/auth" className="text-[#c8f400] font-semibold">
              Sign in
            </NavLink>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;