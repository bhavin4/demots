declare interface LoginAdminResponse extends PayloadType {
  user: {
    _id: string;
    full_name: string;
    email: string;
    user_type: "admin" | "user" | "coach";
    registered_at?: string;
    userid: number;
    is_confirm: 0 | 1;
    updated_at: string;
    created_at: string;
  };
  token: string;
  type: string;
}

declare interface ForgetPasswordAPIRequest {
  email: string;
}

declare interface LoginAPIRequest {
  email: string;
  password: string;
  user_type: "admin" | "user" | "coach";
}

type Status = "loading" | "success" | "error";
declare interface PayloadType {
  success?: boolean;
  message?: string;
}

declare interface RegisterAdminResponse extends PayloadType {
  user: {
    full_name: string;
    email: string;
    user_type: "admin" | "user" | "coach";
  };
  token: string;
  type: string;
}

declare interface RegisterAPIRequest {
  name: string;
  email: string;
  password: string;
  user_type: "admin" | "user" | "coach";
}
ter;
