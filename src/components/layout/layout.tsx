import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants';

import styles from './layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to={ROUTES.price} className={styles.navButton}>
              Price Page
            </Link>
          </li>
          <li>
            <Link to={ROUTES.users} className={styles.navButton}>
              Users Page
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};
