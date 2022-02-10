import { useState } from "react";
import Modal from "react-modal";
import { GlobalStyle } from "./assets/styles/globals";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

Modal.setAppElement("root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      ></Header>
      <Dashboard></Dashboard>
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar Transacao</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
