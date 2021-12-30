import React from 'react';
import { GlobalStyle } from './theme/GlobalStyle';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] =
    React.useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false);
  }
  return (
    <>
      <GlobalStyle />
      <Header onNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
