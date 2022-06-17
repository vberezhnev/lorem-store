import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite'

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <div>BrandBar</div>
  )
})

export default BrandBar