import React, { useEffect } from 'react';
import { Box, Image, Grid, GridItem, Button, Center } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';

export default function DevicePage() {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Box className="h-screen">
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={4} mt={10}>
        <div>
          <Image className="w-[300px] h-[300px]" src={`http://localhost:7000/${device.img}`} />
        </div>

        <div>
          <p className="text-3xl font-bold">{device.name}</p>
          <div className="text-red-500 font-bold">
            ★★★★★★ {device.rating} <span className="text-purple-400">|</span>{' '}
            <span className="text-blue-400">6 отзывов</span>
          </div>

          <Box border="1px" borderColor="gray.200" p={3} borderRadius={10} mb={2} mt={6} maxWidth={'190'}>
            <p className="text-2xl font-bold">{device.price} ₽</p>
          </Box>
          <Button colorScheme={'red'}>Добавить в корзину</Button>
        </div>

        <GridItem>
          <Center>
            <Box>
              <p className="text-2xl">Характеристики:</p>
              {/* {description.map((info) => (
                <Box key={info.id}>
                  {info.title}: {info.description}
                </Box>
              ))} */}
            </Box>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
}
