import styles from "@/styles/cadastro.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
    </div>
    <form>
        <div className={styles.formGroup}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="data-nascimento">Data de nascimento:</label>
            <input type="date" id="data-nascimento" name="data-nascimento" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="genero">Gênero:</label>
            <select id="genero" name="genero" className={styles.input}>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
        </select>
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="voce-e">Você é:</label>
        <select id="voce-e" name="voce-e" className={styles.input}>
            <option value="paciente">Paciente</option>
            <option value="responsavel">Responsável</option>
        </select>
        </div>
        <button type="submit" className={styles.btn}>Cadastrar</button>
    </form>
    </div>
    </div>
);
}

// teste
