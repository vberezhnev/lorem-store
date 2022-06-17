import React from 'react';
import { Center, Flex, Wrap, WrapItem, Box } from '@chakra-ui/react';
import TypeBar from '../components/TypeBar';

export default function Shop() {
  return (
    <Flex>
      <Wrap>
        <TypeBar />

        <Box>
          <WrapItem>
            <Center w="180px" h="80px" bg="red.200">
              Box 1
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="green.200">
              Box 2
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="tomato">
              Box 3
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px" h="80px" bg="blue.200">
              Box 4
            </Center>
          </WrapItem>
        </Box>
      </Wrap>
    </Flex>
  );
}
