import React from 'react';
import NewItem from 'src/components/home/NewItem';
import './BestItem.css';

function BestItem() {
  return (
    <div className='shopping-bestItem'>
      <div>
        <div className='new-item-subHeader2'>
            <h1>베스트</h1>
        </div>
        <NewItem callMenuProg = "best"></NewItem>
      </div>
    </div>
  );
}

export default BestItem;
