import React from 'react';
import { useOutletContext } from 'react-router-dom';
import NewItem from 'src/components/home/NewItem';
import 'src/components/shopping/ShoppingNewItem.css';

function ShoppingNewItem() {
  const { onImageClick } = useOutletContext();
  return (
    <div className='shopping-newItem'>
      <div>
        <div className='new-item-subHeader2'>
            <h1>신상품</h1>
        </div>
        <NewItem callMenuProg = "shopping" onImageClick={onImageClick}></NewItem>
      </div>
    </div>
  );
}

export default ShoppingNewItem;
