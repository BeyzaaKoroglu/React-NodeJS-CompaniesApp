import { logout } from '../../redux/services/endpoints/users';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { Styled } from './Header.styled';

const Header = () => {
  const userName = useAppSelector((state) => state.user.user.name);

  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <Styled>
      <div>
        <a href="/">
          <h2>Company App</h2>
        </a>
      </div>
      <div className="navigation">
        <a href="/">
          <h3 className={window.location.pathname === '/' ? 'active' : ''}>
            Home
          </h3>
        </a>
        <a href="/companies">
          <h3
            className={
              window.location.pathname === '/companies' ? 'active' : ''
            }
          >
            Companies
          </h3>
        </a>
        <a href="/products">
          <h3
            className={window.location.pathname === '/products' ? 'active' : ''}
          >
            Products
          </h3>
        </a>
        <a href="/">
          <button onClick={handleLogoutClick}>{userName} Logout</button>
        </a>
      </div>
    </Styled>
  );
};

export default Header;
