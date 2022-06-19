import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import DeviceItem from './DeviceItem';

import { GridItem, Box } from '@chakra-ui/react';

const DeviceList = () => {
  const { device } = useContext(Context);

  return (
    <Box className="flex h-screen">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Box>
  );
};

export default DeviceList;
