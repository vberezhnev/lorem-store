import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

// UI Elements
import { Center, Grid, Wrap, WrapItem, Box, GridItem, Flex } from '@chakra-ui/react';

// Components
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import DeviceItem from '../components/DeviceItem';

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(null, null, 1, 2).then((data) => {
      device.setDevices(data.rows);
      // device.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchDevices().then((data) => {
      device.setDevices(data.rows);
      // device.setTotalCount(data.count);
    });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <div className="flex flex-wrap h-screen">
      <TypeBar />

      <div>
        <div className="flex justify-center items-center">
          <BrandBar />
        </div>
        <DeviceList />
      </div>
    </div>
  );
});

export default Shop;
