import { FC, useState } from 'react';

import { AddUserForm } from '../../components/add-user-form';
import { UsersTable } from '../../components/users-table';

import { IUser } from '../../types';

import { USERS } from '../../constants';

import styles from './users-page.module.css';

export const UsersPage: FC = () => {
  const [users, setUsers] = useState(USERS);
  const [latestId, setLatestId] = useState(USERS.length);

  const handleAddUser = (newUser: IUser) => {
    const newUserData: IUser = {
      id: latestId + 1, // also to create an id for a new user, you could use the uuid library or the current time in milliseconds
      name: newUser.name,
      email: newUser.email,
      age: newUser.age,
    };

    setUsers([...users, newUserData]);
    setLatestId(latestId + 1);
  };

  const handleDelete = (id: string) => {
    const updatedUsers = users.filter((user) => user.id !== parseInt(id));
    setUsers(updatedUsers);
  };

  const handleEdit = (id: string, editedKey: keyof IUser, value: string) => {
    const updatedUsers = users.map((user) => {
      if (user.id === parseInt(id)) {
        return {
          ...user,
          [editedKey]: value,
        };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div className={styles.container}>
      <h1>Add User Form</h1>
      <div className={styles.formWrapper}>
        <AddUserForm onAddUser={handleAddUser} />
      </div>

      <h2>Users Table</h2>
      <UsersTable
        users={users}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};
