import React from 'react';
import NewItem from 'src/components/home/NewItem';
import './YogurtCerealItem.css';

function YogurtCerealItem() {
  return (
    <div CerealItem='shopping-yogurtCerealItem'>
      <div>
        <div className='new-item-subHeader2'>
            <h1>시리얼&요거트</h1>
        </div>
        <NewItem callMenuProg = "yogurtcereal"></NewItem>
      </div>
    </div>
  );
}

export default YogurtCerealItem;
