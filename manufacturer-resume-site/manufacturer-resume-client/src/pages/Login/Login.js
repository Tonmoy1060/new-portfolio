import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import useToken from "../../hooks/useToken";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    event.target.reset();
  };

  const [token] = useToken(user || gUser);

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  let errorMessage = "";
  if (error || gError) {
    errorMessage = error?.message || gError.message;
  }

  const from = location.state?.from?.pathname || "/";
  if(token){
    navigate(from, { replace: true });
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-1/4 shadow-2xl">
        <h1 className="text-center text-2xl pt-2  font-semibold ">Login</h1>

        <div className="flex flex-col p-4 py-5  w-full border-opacity-50">
          <form
            onSubmit={handleSignIn}
            className="flex justify-center items-center w-full"
            action=""
          >
            <div className="pt-1">
              <input
                type="text"
                name="email"
                placeholder="Type email"
                className="input input-bordered w-full shadow-2xl max-w-xs"
              />
              <input
                type="text"
                name="password"
                placeholder="Your password"
                className="input input-bordered my-3 shadow-2xl w-full max-w-xs"
              />
              <button
                className="input w-1/2 bg-secondary mt-2 text-white shadow-2xl max-w-xs"
              >Login</button>
            </div>
          </form>
          <label className="px-5">
            {/* <span className="label-text-alt">Alt label</span> */}
            <p className="pt-3 pb-0">
              <small>
                New here?{" "}
                <Link className="text-secondary" to="/register">
                  {" "}
                  Register now
                </Link>
              </small>
            </p>
            {/* <p>
              <small>
                Forgot Password?{" "}
                <Link className="text-red-500" to="/register">
                  {" "}
                  Reset Password
                </Link>
              </small>
            </p> */}
            <p className="pt-0 pb-0 text-red-500">
              <small>{errorMessage}</small>
            </p>
          </label>
          <div className="divider pb-0 pt-3 px-5">OR</div>
          <div className="grid h-22 card pt-5 pb-3 rounded-box place-items-center">
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-primary input w-full max-w-xs  text-sm text-white"
            >
              <FcGoogle className="text-2xl "></FcGoogle>oogle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
