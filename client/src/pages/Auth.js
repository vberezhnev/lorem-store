import React from 'react';
import { Flex, Heading, Button, Input, Link } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';

export default function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  console.log(location);

  return (
    <Flex height="70vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={15}>
        <Heading mb={6}>{isLogin ? 'Авторизация' : 'Регистрация'}</Heading>
        <Input placeholder="example@gmail.com" mb={3} />
        <Input placeholder="· · · · · · · ·" variant="outline" mb={6} type="password" />

        {isLogin ? (
          <Button colorScheme="green">Войти</Button>
        ) : (
          <Button colorScheme="green">Зарегистрироваться</Button>
        )}

        {isLogin ? (
          <Link color={'blue.400'} mt={5}>
            <NavLink to={REGISTRATION_ROUTE}>Нет аккаунта?</NavLink>
          </Link>
        ) : (
          <Link color={'blue.400'} mt={5}>
            <NavLink to={LOGIN_ROUTE}>Есть аккаунт?</NavLink>
          </Link>
        )}
      </Flex>
    </Flex>
  );
}
