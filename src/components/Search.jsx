import styles from "@/styles/search.module.css"

export default function Search (){
    return(
        <div className={styles.search}>
        <input type="text" placeholder="Busque aqui.."/>
        <button className={styles.buttonP}>
         Buscar
            </button>
        </div>

    );
}