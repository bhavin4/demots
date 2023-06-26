import React from "react";
import LoginForm from "../Components/LoginForm";
import ForgetPasswordForm from "../Containers/ForgetPasswordForm";

type Props = {};

const ForgetPasswordPage = (props: Props) => {
  return (
    <div className="box-border h-screen container">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen  justify-between">
        <div className="col-span-1">
          <div className="flex justify-start p-6 ">
            <img src="/images/logo.svg" className="h-[40px]" alt="" />
          </div>
          <ForgetPasswordForm />
        </div>
        <div className="col-span-1 hidden lg:flex w-full h-screen">
          <img
            className="h-screen  w-full"
            src="/images/background.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
