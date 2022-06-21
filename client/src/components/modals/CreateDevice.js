import React, { useContext, useState } from 'react';
import { Context } from '../..';

import {
  Box,
  Grid,
  GridItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
  Select,
} from '@chakra-ui/react';

const CreateType = ({ show, onHide }) => {
  const finalRef = React.useRef(null);
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  return (
    <div>
      <Modal isOpen={show} onClose={onHide} finalFocusRef={finalRef} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Добавить девайс</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Добавляем типы */}
            <Select mb={1}>
              {device.types.map((type) => (
                <option key={type.id}>{type.name}</option>
              ))}
            </Select>

            {/* Добавляем бренды */}
            <Select mb={1}>
              {device.brands.map((brand) => (
                <option key={brand.id}>{brand.name}</option>
              ))}
            </Select>

            <Input placeholder={'Введите название устройства'} mb={1} />

            <NumberInput placeholder={'Введите стоимость устройства'} mb={1}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <input type="file" mt={1}></input>

            <Button onClick={addInfo} mt={1}>
              Добавить новое устройство
            </Button>
            {info.map((i) => (
              <Grid templateColumns="repeat(2, 2fr)" gap={6} mt={3} key={i}>
                <GridItem>
                  <Input w="100%" minWidth={'150px'} placeholder={'Название свойства'} mb={1} />
                  <Input w="100%" minWidth={'150px'} placeholder={'Описание свойства'} mb={1} />
                </GridItem>
                <GridItem>
                  <Button onClick={() => removeInfo(i.number)} colorScheme={'yellow'}>
                    Удалить
                  </Button>
                </GridItem>
              </Grid>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" variant="ghost" mr={3} onClick={onHide}>
              Закрыть
            </Button>
            <Button colorScheme="green" >Добавить</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateType;
