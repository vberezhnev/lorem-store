import React, {useContext, useEffect, useState} from 'react';
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

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
  const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

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
