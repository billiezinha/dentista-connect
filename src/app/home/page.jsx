import React from 'react';
import styles from '@/styles/home.module.css';
import Search from '@/components/Search';
import Card from '@/components/Card';
import ProceduresList from '@/components/ProceduresList';
// import HamburguerMenu from '@/components/HamburguerMenu';
export default function Home() {
  const procedures = [
    { name: 'Limpeza dentária', completed: false },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <div className={styles.search}>
        <Search />
      </div>
        <div className={styles.logo}>
          <img src="/logoLateral.png" alt="logo" />
          </div>
      </div>

      <div className={styles.procedures}>
        <ProceduresList procedures={procedures} />
      </div>

      <div className={styles.cards}>
        <Card
          title="SORRISO FORTE"
          description="Av. Getúlio Vargas Centro (6018.36 Mi, Picos Pi Brazil Pi 64600-002), Picos Pi Brazil Pi 600-002, PI "
          imageUrl="https://th.bing.com/th/id/OIP.vfpUSKl7Ykj5yppoBumpuAHaHa?rs=1&pid=ImgDetMain" // URL de exemplo de uma imagem
        />
        <Card
          title="COIFE ODONTO"
          description="Avenida Nossa Senhora de Fátima 803, Picos, PI, 64600-320 ·"
          imageUrl="https://th.bing.com/th/id/OIP.8mGDgiCqEjMCarISwTunRgAAAA?rs=1&pid=ImgDetMain" // Outra URL de imagem
        />
        <Card
          title="BRILHO ODONTO"
          description="Rua Coelho Rodrigues 412, Picos, PI, 64600-054"
          imageUrl="https://th.bing.com/th/id/OIP.wzWRwOMx0Ub0QDEQVNf94wHaHa?rs=1&pid=ImgDetMain" // Coloque uma imagem padrão se imageUrl for null
        />
         <Card
          title="SORRISO FORTE"
          description="Av. Getúlio Vargas Centro (6018.36 Mi, Picos Pi Brazil Pi 64600-002), Picos Pi Brazil Pi 600-002, PI "
          imageUrl="https://th.bing.com/th/id/OIP.vfpUSKl7Ykj5yppoBumpuAHaHa?rs=1&pid=ImgDetMain" // URL de exemplo de uma imagem
        />
        <Card
          title="COIFE ODONTO"
          description="Avenida Nossa Senhora de Fátima 803, Picos, PI, 64600-320 ·"
          imageUrl="https://th.bing.com/th/id/OIP.8mGDgiCqEjMCarISwTunRgAAAA?rs=1&pid=ImgDetMain" // Outra URL de imagem
        />
        <Card
          title="BRILHO ODONTO"
          description="Rua Coelho Rodrigues 412, Picos, PI, 64600-054"
          imageUrl="https://th.bing.com/th/id/OIP.wzWRwOMx0Ub0QDEQVNf94wHaHa?rs=1&pid=ImgDetMain" // Coloque uma imagem padrão se imageUrl for null
        />
      </div>
    </div>
  );
}
