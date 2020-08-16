import React from 'react';

import styles from '../styles/Home.module.scss'

const Main = ({ children }) => (
  <main className={styles.container}>
    <h1>Hey, world! I'm Sam.</h1>
    { children }
  </main>
);

export default Main;