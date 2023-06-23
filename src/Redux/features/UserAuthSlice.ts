import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../api/api";

export const RegisterAdmin = createAsyncThunk<
  RegisterAdminResponse,
  RegisterAPIRequest
>("UserAuth/register", async (data) => {
  const res = await axiosClient.post<RegisterAdminResponse>(
    "auth/register",
    data
  );
  return res.data;
});

export const LoginAdmin = createAsyncThunk<LoginAdminResponse, LoginAPIRequest>(
  "UserAuth/Login",
  async (data) => {
    const res = await axiosClient.post<LoginAdminResponse>(
      "auth/login",
      data
    );
    return res.data;
  }
);

export const ForgetPasswordAPI = createAsyncThunk<
  any,
  ForgetPasswordAPIRequest
>("UserAuth/ForgetPassword", async (data) => {
  const res = await axiosClient.post("/auth/forgotpassword", data);
  return res.data;
});

type PasswordRequest = {
  user_id: string;
  password: string;
  confirm_password: string;
};

export const ResetPasswordAPI = createAsyncThunk<any, PasswordRequest>(
  "UserAuth/ResetPassword",
  async (data) => {
    const res = await axiosClient.post("auth/confirm-password", data);
    return res.data;
  }
);

interface UserAuthInitialState {
  RegisterAdminIdle: "success" | "rejected" | "loading";
  LoginAdminIdle: "success" | "rejected" | "loading";
  ForgetPasswordAPIIdle: "success" | "rejected" | "loading";
  ResetPasswordAPIIdle: "success" | "rejected" | "loading";
}

const initialState: UserAuthInitialState = {
  RegisterAdminIdle: "success",
  LoginAdminIdle: "success",
  ForgetPasswordAPIIdle: "success",
  ResetPasswordAPIIdle: "success",
};

const UserAuth = createSlice({
  name: "UserAuth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(RegisterAdmin.pending, (state, { payload }) => {
        return {
          ...state,
          RegisterAdminIdle: "loading",
        };
      })
      .addCase(
        RegisterAdmin.fulfilled,
        (state, action: PayloadAction<RegisterAdminResponse>) => {
          console.log(action);
          return {
            ...state,
            RegisterAdminIdle: "success",
          };
        }
      )
      .addCase(RegisterAdmin.rejected, (state, { payload }) => {
        console.log("REJECT");
        return {
          ...state,
          RegisterAdminIdle: "rejected",
        };
      })
      .addCase(LoginAdmin.pending, (state, { payload }) => {

        return {
          ...state,
          LoginAdminIdle: "loading",
        };
      })
      .addCase(
        LoginAdmin.fulfilled,
        (state, action: PayloadAction<LoginAdminResponse>) => {
          console.log(action);

          return {
            ...state,
            LoginAdminIdle: "success",
          };
        }
      )
      .addCase(LoginAdmin.rejected, (state, { payload }) => {
        console.log("REJECT");

        return {
          ...state,
          LoginAdminIdle: "rejected",
        };
      })
      .addCase(ForgetPasswordAPI.pending, (state, { payload }) => {
        return {
          ...state,
          ForgetPasswordAPIIdle: "loading",
        };
      })
      .addCase(
        ForgetPasswordAPI.fulfilled,
        (state, action: PayloadAction<LoginAdminResponse>) => {
          return {
            ...state,
            ForgetPasswordAPIIdle: "success",
          };
        }
      )
      .addCase(ForgetPasswordAPI.rejected, (state, { payload }) => {
        return {
          ...state,
          ForgetPasswordAPIIdle: "rejected",
        };
      })
      .addCase(ResetPasswordAPI.pending, (state, { payload }) => {
        return {
          ...state,
          ResetPasswordAPIIdle: "loading",
        };
      })
      .addCase(
        ResetPasswordAPI.fulfilled,
        (state, action: PayloadAction<PasswordRequest>) => {
          return {
            ...state,
            ResetPasswordAPIIdle: "success",
          };
        }
      )
      .addCase(ResetPasswordAPI.rejected, (state, action) => {
        return {
          ...state,
          ResetPasswordAPIIdle: "rejected",
        };
      });
  },
});

export const {} = UserAuth.actions;

export default UserAuth.reducer;
