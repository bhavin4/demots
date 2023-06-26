import ButtonComponent from "../Components/ButtonComponent";
import InputComponent from "../Components/InputComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/app/hooks";
import { useCookies } from "react-cookie";
import { LoginAdmin, ResetPasswordAPI } from "../Redux/features/UserAuthSlice";
import { useState } from "react";
import { Resolver } from 'react-hook-form'

type FormValues = {
    password: string;
    confirmPassword: string;
  };
  
const ResetPasswordForm = () => {
  const [view, setView] = useState(true);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.UserAuth.LoginAdminIdle);
  const location = useParams();
  console.log(location.hashedID);
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), ""],
      "Passwords must match"
    ),
  });

//   const {
//     register,
//     watch,
//     handleSubmit,
//     setError,
//     formState: { errors },
//   } = useForm<FormValues>({
//     resolver: yupResolver(validationSchema),
//     defaultValues: { confirmPassword: "", password: ""}
//   });

const {
  register,
  watch,
  handleSubmit,
  setError,
  formState: { errors },
} = useForm<FormValues>({
  resolver: yupResolver(validationSchema) as Resolver<FormValues>,
  defaultValues: { confirmPassword: "", password: "" },
});

  const formValues = watch();


  const onSubmit = (data: FormValues) => {
    dispatch(
      ResetPasswordAPI({
        user_id: String(location.hashedID),
        password: data.password,
        confirm_password: data.confirmPassword,
      })
    ).then((res) => {
      if (res.payload?.success) {
        setView(false);
      } else {
        setError("confirmPassword", { message: "Email not found" });
      }
    });
  };


  return (
    <div className="w-[420px] m-auto h-[calc(100vh-88px)] flex flex-col justify-center items-center">
      {view ? (
        <>
          <h1 className="text-2xl font-bold text-[#1F3161]">Reset Password</h1>
          <h3 className="text-base my-2 text-[#9E9E9E] font-normal">
            Please choose your new password
          </h3>
          <form
            className="flex w-[90%] gap-4 flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputComponent
              register={register}
              inputRef="password"
              errorname={errors.password?.message}
              label="Password"
              name="password"
              value={formValues.password}
            />

            <InputComponent
              register={register}
              inputRef="confirmPassword"
              errorname={errors.confirmPassword?.message}
              label="Confirm Password"
              name="confirmPassword"
              value={formValues.confirmPassword}
            />
            <ButtonComponent loading={loading} CTA="Submit" varient="primary" />
          </form>
        </>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1F3161]">
            Password Changed
          </h1>
          <h3 className="text-base my-2 text-[#9E9E9E] font-normal">
            Password Successfully Changed, Please Login Again
          </h3>
        </div>
      )}
    </div>
  );
};

export default ResetPasswordForm;
