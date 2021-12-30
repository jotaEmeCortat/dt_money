import React from 'react';
import { api } from '../../services/api';
import { TransactionsTableWrapper } from './styles';

type TransactionProps = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

export const TransactionsTable = () => {
  const [transactions, setTransaction] = React.useState<TransactionProps[]>([]);

  React.useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransaction(response.data.transactions));
  }, []);
  return (
    <TransactionsTableWrapper>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt),
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TransactionsTableWrapper>
  );
};
