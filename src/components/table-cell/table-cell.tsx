import { Button } from '../button';

import { FC, useState } from 'react';

import { IUser } from '../../types';

import styles from './table-cell.module.css';

interface TableCellProps {
  user: IUser;
  handleDelete: (id: string) => void;
  handleEdit: (id: string, key: keyof IUser, value: string) => void;
}

export const TableCell: FC<TableCellProps> = ({
  user,
  handleDelete,
  handleEdit,
}) => {
  const [editedKey, setEditedKey] = useState<keyof IUser | ''>('');
  const [editedValue, setEditedValue] = useState('');

  const handleEditStart = (key: keyof IUser) => {
    setEditedKey(key);
    setEditedValue(user[key].toString());
  };

  const handleEditSave = (id: string) => {
    if (editedKey) {
      handleEdit(id, editedKey, editedValue);
      setEditedKey('');
      setEditedValue('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleEditSave(String(user.id));
    }
  };

  return (
    <tr>
      {Object.keys(user).map((key) => (
        <td key={key as keyof IUser}>
          {editedKey === key ? (
            <input
              className={styles.editedInput}
              type='text'
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          ) : (
            <span onClick={() => handleEditStart(key as keyof IUser)}>
              {user[key as keyof IUser]}
            </span>
          )}
        </td>
      ))}
      <td className={styles.buttonCell}>
        <Button
          title={'Delete'}
          className={styles.deleteButton}
          handleClick={() => handleDelete(String(user.id))}
        />
        {editedKey && (
          <Button
            title={'Save'}
            className={styles.saveButton}
            handleClick={() => handleEditSave(String(user.id))}
          />
        )}
      </td>
    </tr>
  );
};
