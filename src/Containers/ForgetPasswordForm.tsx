import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../Components/ButtonComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import InputComponent from "../Components/InputComponent";
import { useAppDispatch } from "../Redux/app/Hooks";
import { ForgetPasswordAPI } from "../Redux/features/UserAuthSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { error } from "console";


type FormValues = {
  email: string;
};
type Props = {};

const ForgetPasswordForm = (props: Props) => {
  const [view, setView] = useState(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid email"),
  });
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });
  const formValues = watch();
  const dispatch = useAppDispatch();
  const onSubmit = (data: FormValues) => {
    dispatch(ForgetPasswordAPI({ email: data.email })).then(
      (res: PayloadAction<any>) => {
        !res.payload?.success
          ? setError("email", { message: "Invalid User" })
          : setView(true);
      }
    );
  };

  return (
    <div className="w-[420px] m-auto h-[calc(100vh-88px)] flex flex-col justify-center items-center">
      <div className="bg-white text-center w-full m-auto py-4">
        {!view ? (
          <>
            <h1 className="text-2xl  font-bold text-[#1F3161]">
              Forgot password?
            </h1>
            <h3 className="text-base text-center my-2 text-[#9E9E9E] font-normal">
              Enter your email address below and we'll send you password reset
              OTP.
            </h3>
            <form
              className="flex w-[90%] m-auto gap-4 flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <InputComponent
                register={register}
                inputRef="email"
                errorname={errors.email?.message}
                label="Email"
                name="email"
                value={formValues.email}
              />

              <ButtonComponent
                buttonType="submit"
                CTA="Send"
                varient="primary"
              />
            </form>
          </>
        ) : (
          <>
            <h1 className="text-2xl  font-bold text-[#1F3161]">
              Check Mail
            </h1>
            <h3 className="text-base text-center my-2 text-[#9E9E9E] font-normal">
              We have sent a password recover instructions to your email.
            </h3>
            <ButtonComponent
              CTA="Back"
              varient="primary"
              onClick={() => navigate("/")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
