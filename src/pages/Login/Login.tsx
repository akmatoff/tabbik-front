import { FaGoogle } from "react-icons/fa6";
import { useGoogleLogin } from "@react-oauth/google";

import TabbikLogo from "@/assets/tabbik_logo.svg";
import { convertToken } from "@/requests/convertToken";
import { useState } from "react";
import { StorageKeys } from "@/constants/storageKeys";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router";
import { ROUTES } from "@/constants/routes";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: ({ access_token }) => {
      setIsLoading(true);

      convertToken(access_token)
        .then((data) => {
          localStorage.setItem(StorageKeys.TOKEN, data.access_token);
          navigate(ROUTES.HOME);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

  return (
    <section className="flex flex-col lg:flex-row w-full h-screen py-20 gap-28 justify-center items-center">
      <div className="flex flex-col">
        <img className="w-96 h-96" src={TabbikLogo} alt="Tabbik logo" />
      </div>

      <div>
        <div className="mb-8">
          <h4 className="font-light text-xl">Hey there,</h4>
          <h1 className="font-bold text-4xl">Welcome Back</h1>
        </div>
        <button
          className="flex items-center bg-accent px-12 py-4 rounded-primary text-textLight font-bold text-xl shadow-lg"
          onClick={() => login()}
        >
          {!isLoading ? (
            <FaGoogle className="text-4xl" />
          ) : (
            <LoadingSpinner size="m" light />
          )}
          <h1 className="ml-4">Sign in with Google</h1>
        </button>
      </div>
    </section>
  );
}
