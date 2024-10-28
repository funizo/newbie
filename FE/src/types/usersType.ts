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
    confirmPassword: string;
    email: string;
    nickname: string;
    tag: string;
}

export interface LoginFormDataType {
    email: string;
    password: string;
}
