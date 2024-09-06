"use client"; // Garante que o código será executado no lado do cliente

import * as React from "react";
import { useState } from "react";  // Importar o hook useState
import dynamic from "next/dynamic";
import CheckboxCard from "@/components/CheckboxCard";  // Importando o componente CheckboxCard
import styles from "@/styles/horarios.module.css"
import HorariosDisponiveis from "@/components/HorariosDisponiveis"
// Importa o componente CalendarDemo de forma dinâmica com SSR desativado
const CalendarDemo = dynamic(
  () => import("@/components/ui/calendar").then((mod) => mod.CalendarDemo),
  { ssr: false } // Desativa a renderização no servidor
);

export default function Home() {
  // Estado que controla qual checkbox está selecionado
  const [selected, setSelected] = useState(null);

  // Função para selecionar um único checkbox
  const handleSelect = (id) => {
    setSelected(id);  // Atualiza o estado com o ID do checkbox selecionado
  };

  return (

    <div className={styles.hrdisponivel}>
   
      {/* Renderiza os checkboxes */}
      <div className={styles.text}>
      <h1><strong>Escolha um profissional</strong></h1>
      </div>




      <div className={styles.chekbox} style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>

        <CheckboxCard
          label="Maria"
          imageSrc="https://storage.alboom.ninja/sites/1071/albuns/839102/00418_c1c65bb55736.jpg?t=1622227019"
          checked={selected === "maria"}  // Verifica se "maria" está selecionado
          onChange={() => handleSelect("maria")}  // Função para selecionar Maria
        />
        <CheckboxCard
          label="Jeydson"
          imageSrc="https://th.bing.com/th/id/OIP.TYEO0Q04pISIYexCqcD40AHaEm?rs=1&pid=ImgDetMain"
          checked={selected === "jeydson"}  // Verifica se "jeydson" está selecionado
          onChange={() => handleSelect("jeydson")}  // Função para selecionar Jeydson
        />
        <CheckboxCard
          label="Maycon"
          imageSrc="https://th.bing.com/th/id/OIP.H_PJ_L-WQnJlxNKoJh_5bAHaFW?rs=1&pid=ImgDetMain"
          checked={selected === "maycon"}  // Verifica se "maycon" está selecionado
          onChange={() => handleSelect("maycon")}  // Função para selecionar Maycon
        />
      </div>
      <div className={styles.separar}>
      <div className={styles.horarios}>
      <h1 className="text-2xl font-bold mb-6">Selecione um Horário</h1>
        {/* Chame o componente de horários disponíveis */}
        <HorariosDisponiveis />

      </div>
      <div className={styles.calendar}>
      <h1><strong>Escolha uma data</strong></h1>

      {/* Renderiza o componente CalendarDemo */}
      <CalendarDemo />

    
      </div>

      </div>
      <div className={styles.buton}>
          <button type="button" className={styles.agendaB}>Agendar</button>
      </div>
    </div>
  );
}
