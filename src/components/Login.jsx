import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { useState } from "react";
import { useContext } from "react";
import { Auth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
    let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


const { registeredUsers, setLoggedInUser } = useContext(Auth);

const onSubmit = (data) => {
  const user = registeredUsers.find(
    (u) =>
      u.email === data.email &&
      u.password === data.password
  );

  if (!user) {
    alert("User does not exist");
    return;
  }

  // ✅ login success
  setLoggedInUser(user);
  localStorage.setItem("log user", JSON.stringify(user));

  // ✅ REDIRECT
  navigate("/");   // 🔥 use your actual route
};

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex">

      {/* LEFT SIDE (hidden on mobile) */}
      <div className="hidden lg:flex flex-col w-1/2 bg-[#111] border-r border-white/10 p-12 relative">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#c8f400] rounded-2xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currectColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-ink fill-ink"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          </div>
          <span className="font-short font-bold text-2xl text-white">
            Sky<span className="text-[#c8f400]">Mart</span>
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <p className="text-[#c8f400] text-sm mb-4 uppercase tracking-widest">
            Welcome back
          </p>

          <h1 className="font-short font-bold text-5xl text-white mb-6">
            Shop the future.<br />
            <span className="text-[#c8f400]">Today.</span>
          </h1>

          <p className="text-white/40 max-w-sm">
            Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="flex-1 flex items-center justify-center p-6">

        <div className="w-full max-w-md">

          {/* Logo (mobile) */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currectColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-ink fill-ink"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            <span className="font-short text-white font-bold">
              Sky<span className="text-[#c8f400]">Mart</span>
            </span>
          </div>

          <div className="bg-[#111] border border-white/10 rounded-3xl p-6">

            <h2 className="font-short text-2xl text-white mb-1">
              Sign in
            </h2>

            <p className="text-white/40 text-sm mb-8">
              Enter your credentials to continue
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                  {...register("email", {
                    required: "Email is required",
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
                  placeholder="Password"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-white/40"
                >
                  👁
                </button>

                <p className="text-red-400 text-xs mt-1">
                  {errors.password?.message}
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#c8f400] text-black rounded-xl py-3.5 font-bold"
              >
                Sign in →
              </button>

            </form>

            {/* FOOTER */}
            <p className="text-center text-white/30 text-sm mt-6">
              Don't have an account?{" "}
              <NavLink
                to="/auth/register"
                className="text-[#c8f400] font-semibold"
              >
                Create one
              </NavLink>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;