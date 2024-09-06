import React, { useState } from 'react';

const HorariosDisponiveis = () => {
  const horarios = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  const [horarioSelecionado, setHorarioSelecionado] = useState(null);

  const selecionarHorario = (horario) => {
    setHorarioSelecionado(horario);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Horários Disponíveis</h2>
      <div className="grid grid-cols-3 gap-4">
        {horarios.map((horario, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded ${
              horarioSelecionado === horario ? 'bg-gray-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => selecionarHorario(horario)}
          >
            {horario}
          </button>
        ))}
      </div>
      {horarioSelecionado && (
        <p className="mt-4 text-lg">Horário selecionado: {horarioSelecionado}</p>
      )}
    </div>
  );
};

export default HorariosDisponiveis;
