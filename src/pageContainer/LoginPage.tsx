"use client";

import { Input } from "@/components";
import { usePostLogin } from "@/hooks";
import { LoginType } from "@/types";
import { setCookie } from "@/utils";
import { PROJECT_PAGE_PATH } from "@/constant";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [userName, setUserName] = useState<string>("coding_test");
  const [userPassword, setUserPassword] = useState<string>("coding0000");

  const { push } = useRouter();

  const { mutate: login } = usePostLogin({
    onSuccess: ({ token, shortTermToken }) => {
      setCookie("token", token, 3);
      setCookie("shortTermToken", shortTermToken, 1);
      push(PROJECT_PAGE_PATH);
    },
  });

  const onLoginButtonClick = () => {
    const userInfo: LoginType = {
      username: userName,
      password: userPassword,
    };

    login(userInfo);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4 text-white">로그인</h2>
        <Input
          text={"user name"}
          inputValue={userName}
          setInputValue={setUserName}
        />
        <Input
          text={"user password"}
          inputValue={userPassword}
          setInputValue={setUserPassword}
        />
        <button
          onClick={onLoginButtonClick}
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 hover:bg-indigo-600"
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
