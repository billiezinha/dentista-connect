import React, { useState } from 'react';
import '@/styles/popupconfirma.module.css';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAgendamentoConcluido = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleAgendamentoConcluido}>
        Concluir Agendamento
      </button>

      {showPopup && (
        <div className="popupOverlay">
          <div className="popup">
            <div className="checkIcon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <p>AGENDAMENTO FEITO COM SUCESSO!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
