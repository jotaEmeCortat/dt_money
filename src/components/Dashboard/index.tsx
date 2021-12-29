import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { DashboardWrapper } from './styles';

export const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Summary />
      <TransactionsTable />
    </DashboardWrapper>
  );
};
