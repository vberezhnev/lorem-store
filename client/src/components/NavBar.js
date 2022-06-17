import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { Context } from '../index';
import { SHOP_ROUTE } from '../utils/consts';

import { Box, Flex, HStack, Button, Menu, Heading } from '@chakra-ui/react';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return (
    <>
      <Box bg={'gray.800'} px={20}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} color="white">
          <HStack spacing={8} alignItems={'center'}>
            <Heading colorScheme={'twitter'} as="h3" size="lg">
              <NavLink to={SHOP_ROUTE}>Lorem Store</NavLink>
            </Heading>
          </HStack>
          <Flex alignItems={'center'}>
            {user.isAuth ? (
              <Menu>
                <Button colorScheme="green" mr={2}>
                  Админ-панель
                </Button>
                <Button colorScheme="green" onClick={() => user.setIsAuth(false)}>
                  Выйти
                </Button>
              </Menu>
            ) : (
              <Menu>
                <Button colorScheme="green" onClick={() => user.setIsAuth(true)}>
                  Авторизация
                  {/* <NavLink to={LOGIN_ROUTE}>Авторизация</NavLink> */}
                </Button>
              </Menu>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
});

export default NavBar;
