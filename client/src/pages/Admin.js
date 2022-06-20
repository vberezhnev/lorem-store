import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';

export default function Admin() {
  const [typeVisible, setTypeVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <div>
      <Button
        mt={2}
        w={'100%'}
        variant="outline"
        colorScheme={'purple'}
        onClick={() => setTypeVisible(true)}>
        Добавить тип
      </Button>
      <Button
        mt={2}
        w={'100%'}
        variant="outline"
        colorScheme={'purple'}
        onClick={() => setBrandVisible(true)}>
        Добавить бренд
      </Button>
      <Button
        mt={2}
        w={'100%'}
        variant="outline"
        colorScheme={'purple'}
        onClick={() => setDeviceVisible(true)}>
        Добавить устройство
      </Button>

      {/* <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} /> */}
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </div>
  );
}
