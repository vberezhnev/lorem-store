import React, { useContext, useState } from 'react';
import { Flex, Heading, Button, Input, Link } from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { registration, login, check } from '../http/userAPI';
import { Context } from '../index';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const { user } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    let data;
    if (isLogin) {
      data = await login(email, password);
    } else {
      data = await registration(email, password);
    }

    user.setUser(user)
    user.setIsAuth(true)
  };

  return (
    <Flex height="70vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={15}>
        <Heading mb={6}>{isLogin ? 'Авторизация' : 'Регистрация'}</Heading>
        <Input onClick={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" mb={3} />
        <Input
          onClick={(e) => setPassword(e.target.value)}
          placeholder="· · · · · · · ·"
          variant="outline"
          mb={6}
          type="password"
        />

        {isLogin ? (
          <Button colorScheme="green">Войти</Button>
        ) : (
          <Button colorScheme="green" onClick={click}>
            Зарегистрироваться
          </Button>
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
};

export default Auth;
