import React, { useState, useContext } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import { Context } from '../index';

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className="border border-gray-200 p-2 rounded-md w-96" fontSize="md">
      <ul>
        {device.types.map(
          (
            type, // FIXME: исправить подсветку кнопки (выбраной категории)
          ) => (
            <li>
              <Button
                key={type.id}
                onClick={() => device.setSelectedType(type)}
                //className={type.id === device.selectedType.id ? 'active' : ''}
                px={4}
                py={2}
                m={2}>
                {type.name}
              </Button>
            </li>
          ),
        )}
      </ul>
    </div>
  );
});

export default TypeBar;

/*
{device.types.map((type) => (
    <li
        onClick={() => device.setSelectedType(type)}
        ariaCurrent={type.id === device.selectedType.id}
        key={type.id}
        className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
        {type.name}
    </li>
))}
*/
