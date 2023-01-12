import { Styled } from './Header.styled';

const Header = () => {
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
      </div>
    </Styled>
  );
};

export default Header;
