import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
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
        <img src={closeImg} alt="botao fechar" />
      </button>
      <Container>
        <h2>Cadastrar Transacao</h2>
        <input type="text" placeholder="titulo" />
        <input type="number" placeholder="valor" />
        <input type="text" placeholder="category" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
