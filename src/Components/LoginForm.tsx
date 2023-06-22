import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";

type FormValues = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 8 characters"),
});
const LoginForm = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: { email: "", password: "" }
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const formValues = watch();

  const navigate = useNavigate();
  return (
    <div className="w-[420px] m-auto h-[calc(100vh-88px)] flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-[#1F3161]">Hi, Welcome back</h1>
      <h3 className="text-base my-2 text-[#9E9E9E] font-normal">
        Login in to your account
      </h3>
      <form
        className="flex w-[90%] gap-4 flex-col"
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

        <InputComponent
          register={register}
          inputRef="password"
          errorname={errors.password?.message}
          label="Password"
          name="password"
          value={formValues.password}
        />

        <div className="flex gap-2 justify-between">
          <div>
            <label className="flex gap-2" htmlFor="label">
              <input name="label" type="checkbox" />
              Remember Me
            </label>
          </div>
          <div>Forget Password?</div>
        </div>
        <div>
          <ButtonComponent
            onClick={() => navigate("/LoginPage")}
            CTA="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
