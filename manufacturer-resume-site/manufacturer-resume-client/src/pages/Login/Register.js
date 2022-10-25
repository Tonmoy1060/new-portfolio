import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, uError] = useUpdateProfile(auth);

  const handleRegister = async(event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name});
    event.target.reset();
  };

  const [token] = useToken(user || gUser);

  const from = location.state?.from?.pathname || "/";
  if(token){
    navigate(from, { replace: true });
  }

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  let errorMessage = '';
  if (error || gError || uError) {
    errorMessage = (error?.message || gError?.message);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-1/4 shadow-2xl">
        <h1 className="text-center text-2xl font-semibold shadow-2xl">
          Register
        </h1>

        <div className="flex flex-col p-4 py-5  w-full border-opacity-50">
          <form
            onSubmit={handleRegister}
            className="flex justify-center items-center w-full"
            action=""
          >
            <div className="pt-1">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered w-full shadow-2xl max-w-xs"
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Type email"
                className="input input-bordered my-3 shadow-2xl w-full max-w-xs"
                required
              />
              <input
                type="text"
                name="password"
                placeholder="Your password"
                className="input input-bordered mb-3 shadow-2xl w-full max-w-xs"
                required
              />
              <button className="btn btn-secondary w-1/2  text-white shadow-2xl max-w-xs">
                Register
              </button>
            </div>
          </form>
          <label className="px-5">
            {/* <span className="label-text-alt">Alt label</span> */}
            <p className="pt-3 pb-0">
              <small>
                Already registered?{" "}
                <Link className="text-secondary" to="/login">
                  {" "}
                  Please login
                </Link>
              </small>
            </p>
            <p className="pt-0 pb-0 text-red-500">
              <small>
                {errorMessage}
              </small>
            </p>
          </label>
          <div className="divider pb-0 mb-0 px-5">OR</div>
          <div className="grid h-22 card pt-5  rounded-box place-items-center">
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-primary input w-full max-w-xs text-sm text-white"
            >
              Goo<FcGoogle className="text-2xl"></FcGoogle>le
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
