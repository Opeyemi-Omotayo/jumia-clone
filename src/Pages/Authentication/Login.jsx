import { useState, useEffect } from "react";
import { MdStars } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { handleLogin, handleSignup } from "../../Store/thunk";
import Alert from "../../components/Alert";
import { resetNotify } from "../../Store/auth/AuthSlice";
import MiniLoader from "../../components/preloader/MiniLoader";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { auth, error, notify, status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (notify) {
      setTimeout(() => {
        dispatch(resetNotify());
        navigate("/");
      }, 1000); 
    }
  }, [notify, dispatch, navigate]);

  const onSubmit = async (data) => {
    if (isLogin) {
      loginHandler({data})
    } else {
      signupHandler({data});
    }
  };

  const loginHandler = async (data) => {
    await dispatch(handleLogin({ data }))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          console.log(res, "User logged in successfully");
        
        } else {
          console.log(res.payload, "Login failed");
        }
      });
  };

  const signupHandler = async (data) => {
    await dispatch(handleSignup({ data })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        console.log(res, "User created successfully");  
      } else {
        console.log(res.payload, "Login failed");
      }
    });
  };

  // const handleGoogleLogin = async () => {
  //   try {
  //     const provider = new GoogleAuthProvider(); 
  //     const result = await signInWithPopup(auth, provider);
  //     console.log("User logged in with Google successfully:", result.user);
  //   } catch (error) {
  //     console.error("Google login error:", error.message);
  //   }
  // };


  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16">
      {notify && <Alert message={auth} />}
      <div className="w-full md:w-3/5 lg:w-[35%] xl:w-[30%]">
        <div className="flex items-center justify-center flex-col">
          <Link to="/">
            <MdStars className="text-primary w-20 h-20" />
          </Link>
          <h1 className="font-mono text-xl font-semibold">Welcome to Jumia</h1>
          <p className="text-sm text-gray-600 pb-4 text-center">
            Type your email to log in to your Jumia-clone account.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } })}
              className={`p-4 border border-gray-400 focus:border-primary w-full my-4 outline-none rounded-md placeholder:text-gray-500 ${
                errors.email && "border-red-500 "
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-[-0.75rem] mb-4">{errors.email.message}</p>}

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
              className={`p-4 border border-gray-400 focus:border-primary w-full my-4 outline-none rounded-md placeholder:text-gray-500 ${
                errors.password && "border-red-500"
              }`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-[-0.75rem] mb-4">{errors.password.message}</p>}

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary100 text-white p-4 rounded-md shadow-md mt-4 mb-2"
            >
              {status === "loading" ? <MiniLoader /> : (isLogin ? "Log in" : "Create Account")}
            </button>
          </form>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <p className="text-xs w-[60%] text-center">
            By continuing you agree to Jumia’s <br />
            <span className="underline text-primary">Terms and Conditions</span>
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="w-full bg-primary hover:bg-primary100 text-white p-4 rounded-md shadow-md mt-4 mb-2"
          >
            {isLogin ? "Create Account" : "Log in"}
          </button>
          <button className="w-full border flex items-center justify-center border-gray-500 hover:border-gray-600  p-4 rounded-md shadow-md mt-4 mb-2">
            Log in with Google{" "}
            <img
              src="images/Google_Icons.webp"
              alt="google"
              className="w-7 h-7"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
