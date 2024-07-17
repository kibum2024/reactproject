import React from 'react';
import * as img from 'src/components/img/index';
import { itemData } from "src/components/data/itemData";
import './NewItem.css';

const NewItem = () => {
    const newItemData = itemData.filter(item => item.newKind === "1");
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
                {newItemData.map((item) => (
                    <div className='new-item'>
                        <img src={img[`image${item.itemImg.substring(0,3)}`]} alt="" />
                        <p className='new-item-name'> {item.itemName} </p>
                        <p className='new-item-comment'> {item.itemComment} </p>
                        <span className='new-item-originalPrice'><del>{item.originalPrice.toLocaleString()}</del>원</span><span className='new-item-discountPrice'> {item.discountPrice.toLocaleString()}원</span><span className='new-item-discountRate'> {item.discountRate} </span>
                        <div className='shopping-cart' onClick={ shoppingCartClick }><i class="bi bi-bucket"></i></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewItem;
