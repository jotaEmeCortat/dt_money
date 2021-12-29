import { HeaderContainer, HeaderWrapper } from './styles';
import Logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={Logo} alt="dt money" />
        <button type="button">
          New transition
        </button>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
