export type LoginRegisterProps = {
  type: 'register' | 'login';
};
export type UserFormValues = {
  name?: string;
  email: string;
  password: string;
};
