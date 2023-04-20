import { FC } from 'react';

import styles from './button.module.css';

interface ButtonProps {
  title: string;
  handleClick: () => void;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ title, className, handleClick }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={handleClick}>
      {title}
    </button>
  );
};
