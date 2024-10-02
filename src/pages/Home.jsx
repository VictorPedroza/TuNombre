import React, { useState } from "react";
import "./Home.css";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";

Modal.setAppElement("#root");

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <main>
      <header>
        <h1>
          Seja bem-vinda <span>MiAmor</span>
        </h1>
        <div className="buttons">
          <button className="btn">Login</button>
          <button className="btn btn-secondary" onClick={openModal}>
            Registrar-se
          </button>
        </div>
      </header>
      <h1>Te Quiero</h1>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <button className="close-button" onClick={closeModal}><IoIosClose /></button>
        <h2>Impossível de se Registrar!</h2>
        <p>
          A única dona de mi corazon és <span>Rafaela Prieto</span>
        </p>
      </Modal>

    </main>
  );
}
