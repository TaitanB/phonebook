import { useAuth } from '../../hooks/useAuth';

import { Nav, Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const handleClick = event => {
    event.target.blur();
  };

  return (
    <Nav>
      <Link to="/" onClick={handleClick}>
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/contacts" onClick={handleClick}>
          Contacts
        </Link>
      )}
    </Nav>
  );
};
