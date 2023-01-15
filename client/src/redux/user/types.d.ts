export type UserStateType = {
  user: UserType;
  isLoggedIn: boolean;
};

export type UserType = {
  name: string;
  email: string;
  password: string;
};
