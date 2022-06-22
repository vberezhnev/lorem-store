import React, { useState } from 'react';
import { createType } from '../../http/deviceAPI';

// UI Components
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
} from '@chakra-ui/react';

const CreateType = ({ show, onHide }) => {
  const finalRef = React.useRef(null);
  const [value, setValue] = useState('');

  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  return (
    <div>
      <Modal isOpen={show} onClose={onHide} finalFocusRef={finalRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Добавить тип</ModalHeader>
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
            <Button colorScheme="green" onClick={addType}>Добавить</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateType;
