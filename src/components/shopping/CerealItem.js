import React from 'react';
import { useOutletContext } from 'react-router-dom';
import NewItem from 'src/components/home/NewItem';
import './CerealItem.css';

function CerealItem() {
  const { onImageClick } = useOutletContext();
  return (
    <div CerealItem='shopping-cerealItem'>
      <div>
        <div className='new-item-subHeader2'>
            <h1>시리얼</h1>
        </div>
        <NewItem callMenuProg = "cereal" onImageClick={onImageClick}></NewItem>
      </div>
    </div>
  );
}

export default CerealItem;
