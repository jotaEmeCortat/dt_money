import React from 'react';
import { api } from '../services/api';

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

type TransactionsProviderProps = {
  children: React.ReactNode;
};

/* type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; */
type TransactionInput = Pick<
  Transaction,
  'title' | 'amount' | 'type' | 'category'
>;

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

const TransactionsContext = React.createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransaction] = React.useState<Transaction[]>([]);

  React.useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransaction(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransaction([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions() {
  const context = React.useContext(TransactionsContext);

  return context;
}
