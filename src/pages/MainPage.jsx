import React from 'react';
import { Advantages } from '../components/blocks/Advantages';
import { Contacts } from '../components/blocks/Contacts';
import { FirstBlock } from '../components/blocks/FirstBlock';
import { ProductShort } from '../components/blocks/ProductShort';

export const MainPage = () => {
  return (
    <>
      <FirstBlock />
      <Advantages />
      <ProductShort />
      <Contacts />
    </>
  );
};
