import { TableBody } from '../table-body';
import { TableHeader } from '../table-header';

import { FC, useState } from 'react';

import { IUser } from '../../types';

import styles from './users-table.module.css';

interface UsersTableProps {
  users: IUser[];
  handleDelete: (id: string) => void;
  handleEdit: (id: string, key: keyof IUser, value: string) => void;
}

export const UsersTable: FC<UsersTableProps> = ({
  users,
  handleDelete,
  handleEdit,
}) => {
  const [sortedKey, setSortedKey] = useState<keyof IUser>('id');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: keyof IUser) => {
    if (key === sortedKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedKey(key);
      setSortOrder('asc');
    }
  };

  const sortedUsers = users.sort((a, b) => {
    const sortValue = sortOrder === 'asc' ? 1 : -1;
    return a[sortedKey] > b[sortedKey] ? sortValue : -sortValue;
  });

  const keys =
    users.length > 0 ? (Object.keys(users[0]) as Array<keyof IUser>) : [];

  return (
    <div className={styles.tableContainer}>
      {users.length > 0 ? (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <TableHeader
              keys={keys}
              handleSort={handleSort}
              sortedKey={sortedKey}
              sortOrder={sortOrder}
            />
            <TableBody
              users={sortedUsers}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </table>
        </div>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};
