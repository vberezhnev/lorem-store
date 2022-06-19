import React from 'react';
import { Box, Image, Grid, GridItem, Button } from '@chakra-ui/react';

export default function DevicePage() {
  const device = {
    id: 1,
    name: 'Смартфон iPhone 12 Pro 128GB Purple',
    price: '59 999',
    rating: 5.0,
    img: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/7398264163a6ada9a49f0dca196a210f/593fe22ee29c6e2a0eca266bbcef3b1505d2c8c3df5828e40db3f98129ca0751.jpg.webp',
  };

  const description = [
    { id: 1, title: 'Оперативная память', description: '5гб' },
    { id: 2, title: 'Камера', description: '12 мп' },
    { id: 3, title: 'Процессор', description: 'Pentium 3' },
    { id: 4, title: 'Колличество ядер', description: '2' },
    { id: 5, title: 'Аккумулятор', description: '4000' },
];

  return (
    <Box className="h-screen">
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)" gap={4} mt={10}>
        <GridItem rowSpan={2} colSpan={1}>
          <Image src={device.img} />
        </GridItem>

        <GridItem>
          <p className="text-3xl font-bold">{device.name}</p>
          <div className="text-red-500 font-bold">
            ★★★★★★ {device.rating} <span className="text-purple-400">|</span>{' '}
            <span className="text-blue-400">6 отзывов</span>
          </div>
        </GridItem>

        <GridItem>
          <Box border="1px" borderColor="gray.200" p={3} borderRadius={10} mb={2} maxWidth={'190'}>
            <p className="text-2xl font-bold">{device.price} ₽</p>
          </Box>
          <Button colorScheme={'red'}>Добавить в корзину</Button>
        </GridItem>

        <GridItem>
          <p className="text-2xl">Характеристики:</p>
          {description.map((info) => (
            <Box key={info.id}>
              {info.title}: {info.description}
            </Box>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
}
