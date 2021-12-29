import { SummaryWrapper } from './styles';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';

export const Summary = () => {
  return (
    <SummaryWrapper>
      <div>
        <header>
          <p>get in</p>
          <img src={incomeIcon} alt="get in" />
        </header>
        <strong className="getIn">R$1.000,00</strong>
      </div>
      <div>
        <header>
          <p>get out</p>
          <img src={outcomeIcon} alt="get out" />
        </header>
        <strong className="getOut">R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>total</p>
          <img src={totalIcon} alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </SummaryWrapper>
  );
};
