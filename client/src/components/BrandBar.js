import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { Button, Box } from '@chakra-ui/react';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <div>
      {device.brands.map((brand) => (
        <Button
          style={{ cursor: 'pointer' }}
          key={brand.id}
          mt={1}
          mr={2}
          mb={1}
          ml={2}
          onClick={() => device.setSelectedBrand(brand)}
          borderColor={true ? 'gray.400' : 'gray.400'}
          >
          {brand.name}
        </Button>
      ))}
    </div>
  );
});

export default BrandBar;
