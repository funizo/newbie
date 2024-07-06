export interface UserDataType {
  _id: string;
  username: string;
  email: string;
  role: "user" | "admin";
  //직무
}

export interface UserLoginDataType extends UserDataType {
  passwordResetToken?: string;
  passwordResetExpires?: Date;
}

// Auth
export interface SignUpFormDataType {
  password: string;
  password_confirm: string;
  email: string;
  username: string;
  //직무
}

export interface LoginFormDataType {
  email: string;
  password: string;
}
