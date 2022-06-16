import { ChakraProvider, Box } from '@chakra-ui/react';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar /> 
        <Box p={20}>
          <AppRouter /> {/* <-- Main content */}
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
