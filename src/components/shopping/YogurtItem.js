import React from 'react';
import NewItem from 'src/components/home/NewItem';
import './YogurtItem.css';

function YogurtItem() {
  return (
    <div className='shopping-yogurtItem'>
      <div>
        <div className='new-item-subHeader2'>
            <h1>요거트</h1>
        </div>
        <NewItem callMenuProg = "yogurt"></NewItem>
      </div>
    </div>
  );
}

export default YogurtItem;
