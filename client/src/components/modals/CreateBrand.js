import React, { useState } from 'react';
import { createBrand, createType } from '../../http/deviceAPI';

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from '@chakra-ui/react';

const CreateType = ({ show, onHide }) => {
  const finalRef = React.useRef(null);
  const [value, setValue] = useState('');

  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  return (
    <div>
      <Modal isOpen={show} onClose={onHide} finalFocusRef={finalRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder={'Введите название типа'}
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" variant="ghost" mr={3} onClick={onHide}>
              Закрыть
            </Button>
            <Button colorScheme="green" onClick={addBrand}>Добавить</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateType;
