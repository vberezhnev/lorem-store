import React from 'react';
import { Center, Flex, Wrap, WrapItem, Box } from '@chakra-ui/react';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';

export default function Shop() {
  return (
    <Flex>
      <Wrap>
        <TypeBar />

        <Box>
          <WrapItem>
            <BrandBar />
          </WrapItem>
        </Box>
      </Wrap>
    </Flex>
  );
}
