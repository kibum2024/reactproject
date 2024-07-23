import React from 'react';
import { useOutletContext } from 'react-router-dom';
import NewItem from 'src/components/home/NewItem';
import 'src/components/shopping/YogurtCerealItem.css';

function YogurtCerealItem() {
  const { onImageClick } = useOutletContext();
  return (
    <div CerealItem='shopping-yogurtCerealItem'>
      <div>
        <div className='new-item-subHeader2'>
            <h1>시리얼&요거트</h1>
        </div>
        <NewItem callMenuProg = "yogurtcereal" onImageClick={onImageClick}></NewItem>
      </div>
    </div>
  );
}

export default YogurtCerealItem;
