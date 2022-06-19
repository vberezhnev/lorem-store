import React from 'react';
import { GridItem, Box, Flex, Wrap } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate() // Испульзуем хук для перехода по страницам без их перезагрузки

  return (
    <Flex m={2} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <Wrap>
        <div className="max-w-sm overflow-hidden rounded-md shadow-sm duration-200 hover:scale-[1.01]">
          <img src={device.img} className="h-auto w-full" alt="item"/>
          <Box p={5}>
            <p className="flex justify-center items-center text-lg mb-2 text-gray-700">{device.name}</p>
            <div className="text-red-500 font-bold">★ {device.rating}</div>
            <b className="text-xl">{device.price} ₽</b>
            <button className="w-full rounded-md bg-red-500 py-2 text-indigo-100 hover:bg-red-600 hover:shadow-md duration-200">
              <InfoIcon />
            </button>
          </Box>
        </div>
      </Wrap>
    </Flex>
  );
};

export default DeviceItem;
