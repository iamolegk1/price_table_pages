import { FC } from 'react';

import { IUser } from '../../types';

interface TableHeaderProps {
  keys: Array<keyof IUser>;
  handleSort: (key: keyof IUser) => void;
  sortedKey: keyof IUser;
  sortOrder: 'asc' | 'desc';
}

export const TableHeader: FC<TableHeaderProps> = ({
  keys,
  handleSort,
  sortedKey,
  sortOrder,
}) => {
  const handleColumnClick = (key: keyof IUser) => {
    if (sortedKey === key) {
      handleSort(key);
    } else {
      handleSort(key);
    }
  };

  return (
    <thead>
      <tr>
        {keys.map((key) => (
          <th key={key} onClick={() => handleColumnClick(key)}>
            {key}
            {sortedKey === key && (
              <span>{' ' + (sortOrder === 'asc' ? '↑' : '↓')}</span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};
