import styles from "@/styles/cardp.module.css";
import Link from "next/link"; 

function CardP({ title, duration }) {
    return (
        <div className={styles.cardP}>
            <div className={styles.CardPinfo}>
                <h3 className={styles.cardPtitle}>{title}</h3>
                <p className={styles.cardPduration}>{duration}</p> 
            </div>
            <Link href="/horarios"> 
                <button className={styles.buttonP}>
                    Agendar
                </button>
            </Link>
        </div>
    );
}

export default CardP;
