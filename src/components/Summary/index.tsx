import { useTransactions } from '../../hooks/useTransactions';
import { SummaryWrapper } from './styles';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';

export const Summary = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraw += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    },
  );

  return (
    <SummaryWrapper>
      <div>
        <header>
          <p>get in</p>
          <img src={incomeIcon} alt="get in" />
        </header>
        <strong className="getIn">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>get out</p>
          <img src={outcomeIcon} alt="get out" />
        </header>
        <strong className="getOut">
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>total</p>
          <img src={totalIcon} alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </SummaryWrapper>
  );
};
