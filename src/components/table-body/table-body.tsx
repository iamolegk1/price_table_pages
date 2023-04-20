import { TableCell } from '../table-cell';

import { FC } from 'react';

import { IUser } from '../../types';

interface TableBodyProps {
  users: IUser[];
  handleDelete: (id: string) => void;
  handleEdit: (id: string, key: keyof IUser, value: string) => void;
}

export const TableBody: FC<TableBodyProps> = ({
  users,
  handleDelete,
  handleEdit,
}) => {
  return (
    <tbody>
      {users.map((item) => (
        <TableCell
          key={item.id}
          user={item}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </tbody>
  );
};
