import CardP from "@/components/CardP";
import Search from "@/components/Search";
import styles from "@/styles/procedimento.module.css"

export default function Procedimento(){

return (

    <div className={styles.procedimento}>
      <div className={styles.text}>
        <h1><b>PROCEDIMENTO</b></h1>
      </div>
  <div>
    <div className="search">
    <Search/>

    </div>
   
    <div className={styles.cardsP}>
      <CardP title="Avaliação" duration="30 min" />
      <CardP title="Limpeza" duration="40 min" />
      <CardP title="Clareamento" duration="60 min" />
    </div>
  </div>
  </div>
  );
}