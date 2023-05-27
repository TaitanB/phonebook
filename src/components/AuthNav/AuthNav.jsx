import { AuthNavContainer, AuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  const handleClick = event => {
    event.target.blur();
  };

  return (
    <AuthNavContainer>
      <AuthLink to="/register" onClick={handleClick}>
        Register
      </AuthLink>
      <AuthLink to="/login" onClick={handleClick}>
        Log In
      </AuthLink>
    </AuthNavContainer>
  );
};
