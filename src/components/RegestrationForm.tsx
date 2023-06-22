import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import InputComponent from "./InputComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ButtonComponent from "./ButtonComponent";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/app/Hooks";
import { RegisterAdmin } from "../Redux/features/UserAuthSlice";
import { useCookies } from "react-cookie";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

const RegistrationForm = () => {
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.UserAuth.RegisterAdminIdle);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").label("Invalid name"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const formValues = watch();

  const dispatch = useAppDispatch();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    dispatch(RegisterAdmin({ ...data, user_type: "admin" }));
    // RegisterAdmin({
    //   email: data.email,
    //   password: data.password,
    //   name: data.name,
    //   user_type:"admin"
    // }).then((res) => {
    //   if (RegisterAdmin.fulfilled.match(res)) {
    //     if (res.payload.success) {
    //       setCookie("token", res.payload.token);
    //       // navigate("/usermanagement/adminlist");
    //     } else {
    //       setError("email", { message: "please enter correct email" });
    //       setError("password", { message: "please enter correct password" });
    //     }
    //   }
    // });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mt-24 w-full  p-6 bg-white rounded-[12px]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1F3161]">
            Hi, Welcome back
          </h1>
          <h3 className="text-base my-2 text-[#9E9E9E] font-normal">
            Register Your Account
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <InputComponent
              register={register}
              inputRef="name"
              errorname={errors.name?.message}
              label="name"
              name="name"
              value={formValues.name}
            />
          </div>
          <div className="mb-4">
            <InputComponent
              register={register}
              inputRef="email"
              errorname={errors.email?.message}
              label="Email"
              name="email"
              value={formValues.email}
            />
          </div>
          <div className="mb-4">
            <InputComponent
              register={register}
              inputRef="password"
              errorname={errors.password?.message}
              label="Password"
              name="password"
              value={formValues.password}
            />
          </div>
          <div className="flex gap-2 justify-between">
            <div>
              <label className="flex gap-2" htmlFor="label">
                <input disabled name="label" type="checkbox" />
                Remember Me
              </label>
            </div>
            <Link to={"/RegistrationPage/LoginPage"}>Already Registered?</Link>
          </div>
          <ButtonComponent loading={loading} CTA="Submit" varient="primary" />
        </form>
      </div>
    </div>
  );
};
export default RegistrationForm;
