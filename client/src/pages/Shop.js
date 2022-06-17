import React from 'react';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import TypeBar from '../components/TypeBar';

export default function Shop() {
  return (
    <Container>
      <Grid h="200px" templateRows="repeat(2, 1fr)" templateColumns="repeat(6, 1fr)" gap={4}>
        <GridItem rowSpan={2} colSpan={2}>
          <TypeBar />
        </GridItem>
      </Grid>
    </Container>
  );
}
