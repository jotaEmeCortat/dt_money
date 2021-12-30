import { HeaderContainer, HeaderWrapper } from './styles';
import Logo from '../../assets/logo.svg';

type HeaderProps = {
  onNewTransactionModal: () => void;
};

export const Header = ({ onNewTransactionModal }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={Logo} alt="dt money" />
        <button type="button" onClick={onNewTransactionModal}>
          New transition
        </button>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
