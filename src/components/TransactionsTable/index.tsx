import React from 'react';
import { api } from '../../services/api';
import { TransactionsTableWrapper } from './styles';

export const TransactionsTable = () => {
  React.useEffect(() => {
    api
      .get('transactions')
      .then((response) => console.log(response.data));
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

        <tbody></tbody>
      </table>
    </TransactionsTableWrapper>
  );
};
