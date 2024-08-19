import React from 'react';
import styles from './Header.module.scss';
import type { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = () => {
  return <div className={styles.root}>Header</div>;
};

export default Header;
