import React, { useContext } from 'react';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

import { List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react';

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <>
      <List spacing={3}>
        {device.types.map((type) => (
          <ListItem key={type.id}>
            <ListIcon color="green.500" />
            {type.name}
          </ListItem>
        ))}
      </List>
    </>
  );
});

export default TypeBar;
