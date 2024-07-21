import React from 'react';
import NewItem from 'src/components/home/NewItem';
import './ShoppingNewItem.css';

function ShoppingNewItem() {
  return (
    <div className='shopping-newItem'>
      <div>
        <div className='new-item-subHeader2'>
            <h1>신상품</h1>
        </div>
        <NewItem callMenuProg = "shopping"></NewItem>
      </div>
    </div>
  );
}

export default ShoppingNewItem;
