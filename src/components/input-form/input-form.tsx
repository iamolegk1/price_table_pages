import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './input.module.css';

interface InputFormProps {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
  type?: string;
}

export const InputForm: FC<InputFormProps> = ({
  label,
  register,
  error,
  type = 'text',
}) => {
  return (
    <div className={styles.input}>
      <label>
        {label}
        <input type={type} {...register} />
        {error && <span>{error}</span>}
      </label>
    </div>
  );
};
