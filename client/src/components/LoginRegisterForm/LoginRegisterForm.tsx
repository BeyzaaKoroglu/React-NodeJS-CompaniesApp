import { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '../../redux/services/endpoints/users';
import { useAppDispatch } from '../../redux/store';
import { Styled } from './LoginRegisterForm.styled';
import { LoginRegisterProps, UserFormValues } from './LoginRegisterForm.types';

const LoginRegisterForm: FC<LoginRegisterProps> = ({ type }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<UserFormValues>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleRegisterClick = () => {
    dispatch(register(formValues)).then(() => {
      navigate('/login');
    });
  };

  const handleLoginClick = () => {
    dispatch(login(formValues)).then(() => {
      navigate('/');
    });
  };

  return (
    <Styled>
      {type === 'login' ? (
        <h2>LOGIN</h2>
      ) : (
        <>
          <h2>REGISTER</h2>
          <input
            onChange={handleChange}
            name="name"
            value={formValues.name}
            placeholder="User Name"
            type="Text"
          />
        </>
      )}
      <input
        onChange={handleChange}
        name="email"
        value={formValues.email}
        placeholder="E-mail"
        type="email"
      />
      <input
        onChange={handleChange}
        name="password"
        value={formValues.password}
        placeholder="Password"
        type="Password"
      />

      {type === 'login' ? (
        <>
          <button onClick={handleLoginClick} className="addBtn">
            Login
          </button>
          <button onClick={() => navigate('/register')} className="linkBtn">
            Sign Up
          </button>
        </>
      ) : (
        <>
          <button onClick={handleRegisterClick} className="addBtn">
            Register
          </button>
          <button onClick={() => navigate('/login')} className="linkBtn">
            Sign In
          </button>
        </>
      )}
    </Styled>
  );
};

export default LoginRegisterForm;
