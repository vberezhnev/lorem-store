import { ChakraProvider, Box } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';

import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';

import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(true);
          user.setIsAuth(true);
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Box p={10}>
          <AppRouter /> {/* <-- Main content */}
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
});

export default App;
