import React, { useState } from "react";
import "./Home.css";
import Login from "../login/Login";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";

Modal.setAppElement("#root");

const WelcomeComponent = () => (
  <div>
    <h1>Bem-vindo!</h1>
    <p>Você está logado.</p>
  </div>
);

export default function Home() {
  const [openModal, setOpenModal] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function openSpecificModal(modalId) {
    setOpenModal(modalId);
  }

  function closeModal() {
    setOpenModal(null);
  }

  function handleLoginSuccess() {
    setIsAuthenticated(true);
    closeModal();
  }

  return (
    <main>
      {isAuthenticated ? (
        <WelcomeComponent />
      ) : (
        <header>
          <h1>Seja bem-vinda <span>MiAmor</span></h1>
          <div className="buttons">
            <button className="btn" onClick={() => openSpecificModal("first")}>
              Login
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => openSpecificModal("second")}
            >
              Registrar-se
            </button>
          </div>
        </header>
      )}
      <h1>Te Quiero</h1>

      <Modal
        isOpen={openModal === "first"}
        onRequestClose={closeModal}
        contentLabel="First Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <button className="close-button" onClick={closeModal}>
          <IoIosClose size={40} />
        </button>

        <Login onLoginSuccess={handleLoginSuccess} />
      </Modal>

      <Modal
        isOpen={openModal === "second"}
        onRequestClose={closeModal}
        contentLabel="Second Modal"
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <button className="close-button" onClick={closeModal}>
          <IoIosClose size={40} />
        </button>
        <h2>Impossível de se Registrar!</h2>
        <p>
          A única dona de mi corazon és <span>Rafaela Prieto</span>
        </p>
      </Modal>
    </main>
  );
}
