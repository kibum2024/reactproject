import React from 'react';
import { useOutletContext } from 'react-router-dom';
import NewItem from 'src/components/home/NewItem';
import 'src/components/shopping/BestItem.css';

function BestItem() {
  const { onImageClick } = useOutletContext();
  return (
    <div className='shopping-bestItem'>
      <div>
        <div className='new-item-subHeader2'>
            <h1>베스트</h1>
        </div>
        <NewItem callMenuProg = "best" onImageClick={onImageClick}></NewItem>
      </div>
    </div>
  );
}

export default BestItem;
