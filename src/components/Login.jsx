"use client";

import styles from "@/styles/login.module.css";
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação de email e senha
    if (!email || !password) {
      alert('Por favor, preencha ambos os campos de email e senha.');
      return;
    }

    // Lógica de autenticação
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirecionar após o login bem-sucedido
    window.location.href = '/home'; // Alternativa para router.push
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <img
          src="/logo.png"
          alt="Logo"
          className={styles.loginImage}
        />
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={styles.cadastrar}>
          <h3>Já tem uma conta? <strong><a href="/cadastro">Cadastre-se</a></strong></h3>
        </div>

        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
