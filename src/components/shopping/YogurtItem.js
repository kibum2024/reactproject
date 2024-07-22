import React from 'react';
import { useOutletContext } from 'react-router-dom';
import NewItem from 'src/components/home/NewItem';
import './YogurtItem.css';

function YogurtItem() {
  const { onImageClick } = useOutletContext();
  return (
    <div className='shopping-yogurtItem'>
      <div>
        <div className='new-item-subHeader2'>
            <h1>요거트</h1>
        </div>
        <NewItem callMenuProg = "yogurt" onImageClick={onImageClick}></NewItem>
      </div>
    </div>
  );
}

export default YogurtItem;
