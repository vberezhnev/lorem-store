import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { Flex, Box } from '@chakra-ui/react';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <div>
      {device.brands.map((brand) => (
        <Box
          style={{ cursor: 'pointer' }}
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          borderColor={brand.id === device.selectedBrand.id ? 'red.400' : 'gray.400'}>
          {brand.name}
        </Box>
      ))}
    </div>
  );
});

export default BrandBar;
