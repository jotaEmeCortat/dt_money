import React from 'react';
import Modal from 'react-modal';
import {
  NewTransactionModalWrapper,
  RadioBox,
  TransactionTypeContainer,
} from './styles';
import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import { api } from '../../services/api';

Modal.setAppElement('#root');

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const [title, setTitle] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  const [type, setType] = React.useState('deposit');
  const [category, setCategory] = React.useState('');

  function handleCreateNewTransaction(event: React.FormEvent) {
    event.preventDefault();
    const data = {
      title,
      amount,
      type,
      category,
    };

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar Modal" />
      </button>

      <NewTransactionModalWrapper onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valeu"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            onClick={() => setType('deposit')}
            activeColor="green"
          >
            <img src={incomeIcon} alt="Entrada" />
            <span>In come</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === 'withdraw'}
            onClick={() => setType('withdraw')}
            activeColor="red"
          >
            <img src={outcomeIcon} alt="Saída" />
            <span>Out come</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </NewTransactionModalWrapper>
    </Modal>
  );
};
