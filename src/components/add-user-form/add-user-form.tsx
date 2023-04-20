import { InputForm } from '../input-form';

import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { IUser } from '../../types';

import { AddUserFormResolver } from './add-user-form.validation';
import styles from './add-user.module.css';

interface AddUserFormProps {
  onAddUser: (data: IUser) => void;
}

export const AddUserForm: FC<AddUserFormProps> = ({ onAddUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUser>({
    resolver: AddUserFormResolver,
  });

  const onSubmit = (data: IUser) => {
    onAddUser(data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        label='Name'
        register={register('name')}
        error={errors?.name?.message}
      />
      <InputForm
        label='Email'
        type='email'
        register={register('email')}
        error={errors?.email?.message}
      />
      <InputForm
        type='number'
        label='Age'
        register={register('age')}
        error={errors?.age?.message}
      />
      <button type='submit'>Add User</button>
    </form>
  );
};
