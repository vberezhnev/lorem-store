import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import DeviceItem from './DeviceItem';

import { GridItem, Box } from '@chakra-ui/react';

const DeviceList = () => {
  const { device } = useContext(Context);

  return (
    <Box className="flex flex-wrap justify-center items-center lg:ml-10">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Box>
  );
};

export default DeviceList;
