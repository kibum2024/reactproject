import React, { useState, useEffect } from 'react';
import * as img from 'src/components/img/index';
// import { itemData } from "src/components/data/itemData";
import './NewItem.css';

const NewItem = () => {
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/itemdata') 
          .then(response => response.json())
          .then(data => {
            setItemData(data); 
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []); 

    useEffect(() => {
      if (itemData) {
        console.log('Updated itemData:', itemData);
      }
    }, [itemData]);

    if (itemData && Array.isArray(itemData) && itemData.length > 0) {
      console.log('itemData[0].ITEMKIND:', itemData[0].ITEMKIND);
    } else {
      console.warn('itemData가 null, undefined이거나 빈 배열입니다:', itemData);
    }  

    const newItemData = itemData ? itemData.filter(item => item.ITEMKIND === "1") : [];
    console.log('Updated newItemData:', newItemData);
    const shoppingCartClick = () => {
        alert("이상품 선택");
    };

    return (
        <div className='new-item-wrap'>
            <div className="new-item-header">
                <h1>NEW! 신상품</h1>
                <p>새롭게 입고된 제품들을 소개합니다.</p>
            </div>
            <div className='new-item-grid'>
                {newItemData.map((item, index) => (
                    <div key={index} className='new-item'>
                        <img src={img[`image${item.ITEMIMG.substring(0,3)}`]} alt="" />
                        <p className='new-item-name'> {item.ITEMNAME} </p>
                        <p className='new-item-comment'> {item.ITEMCOMMENT} </p>
                        <span className='new-item-originalPrice'><del>{item.ORIGINALPRICE.toLocaleString()}</del>원</span><span className='new-item-discountPrice'> {item.DISCOUNTPRICE.toLocaleString()}원</span><span className='new-item-discountRate'> { item.DISCOUNTRATE === 0 ? "" : item.DISCOUNTRATE + "%" } </span>
                        <div className='shopping-cart' onClick={ shoppingCartClick }><i class="bi bi-bucket"></i></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewItem;
