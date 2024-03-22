import { FaGoogle } from "react-icons/fa6";
import { useGoogleLogin } from "@react-oauth/google";

import TabbikLogo from "@/assets/tabbik_logo.svg";
import { convertToken } from "@/requests/convertToken";
import { useState } from "react";
import { StorageKeys } from "@/constants/storageKeys";
import { useNavigate } from "react-router";
import { ROUTES } from "@/constants/routes";
import { useNotification } from "@/hooks/useNotification";
import Button from "@/components/Button/Button";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { showErrorNotification, showSuccessNotification } = useNotification();

  const login = useGoogleLogin({
    onSuccess: ({ access_token }) => {
      setIsLoading(true);

      convertToken(access_token)
        .then((data) => {
          localStorage.setItem(StorageKeys.TOKEN, data.access_token);
          showSuccessNotification("Logged in successfully!");
          navigate(ROUTES.HOME);
        })
        .catch(() => {
          showErrorNotification("Login failed");
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
        <Button
          icon={<FaGoogle />}
          text="Sign in with Google"
          isLoading={isLoading}
          onClick={() => login()}
        />
      </div>
    </section>
  );
}
