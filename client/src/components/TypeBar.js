import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

import { Box } from '@chakra-ui/react';

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Box border="1px" borderColor="gray.200" p={5} borderRadius="lg" w={'80'} fontSize="md">
      <ul>
        {device.types.map((type) => (
          <Box
            key={type.id}
            onClick={() => device.setSelectedType(type)}
            className={(type.id === device.selectedType.id) ? {bg: 'red'} : console.log('none')}
            _hover={{ bg: '#ebedf0', width: '100%', borderRadius: '10px', cursor: 'pointer' }}
            px={4}
            py={2}>
            {type.name}
          </Box>
        ))}
      </ul>
    </Box>
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
