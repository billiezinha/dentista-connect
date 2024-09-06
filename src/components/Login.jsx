"use client";

import styles from "@/styles/login.module.css";
import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={styles.cadastrar}>
          <h3>Já tem uma conta? <strong><Link href="/cadastro">Cadastre-se</Link></strong></h3>
          {/* <Link href="/cadastro">Já tem uma conta?<strong>Se cadastre</strong></Link> */}

        </div>

        <Link href="/home">
          <button type="submit" className={styles.loginButton}>
           Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
