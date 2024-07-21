import React from 'react';
import NewItem from 'src/components/home/NewItem';
import './CerealItem.css';

function CerealItem() {
  return (
    <div CerealItem='shopping-cerealItem'>
      <div>
        <div className='new-item-subHeader2'>
            <h1>시리얼</h1>
        </div>
        <NewItem callMenuProg = "cereal"></NewItem>
      </div>
    </div>
  );
}

export default CerealItem;
