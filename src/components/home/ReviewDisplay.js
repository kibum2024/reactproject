import React from 'react';
import * as img from '../img/index';
import { reviewData, itemData } from '../data/itemData';

const ReviewDisplay = () => {
    const findItem = (itemNo) => {
        const findItemData = itemData.find(iteminfo => iteminfo.itemNo === itemNo);
        return findItemData ? findItemData : itemNo;
        // if (findItemData) {
        //     return findItemData;
        // } else {
        //     return itemNo;
        // }
    };

    return (
        <div className='review-display-wrap'>
            <div className='review-display-header'>
                <h1>포토리뷰</h1>
                <p>실제 사용자들의 생생한 리얼리뷰를 소개합니다.</p>
            </div>
            <div className='review-display-item'>
                <ul className='review-display-ul'>
                    { reviewData.map((reviewItem, index) => {
                        const itemInfo = findItem(reviewItem.itemNo);
                        return (
                            <li key={index}>
                                <img src={img[`image${itemInfo.itemImg.substring(0, 3)}`]} alt="" />
                                <div>
                                    <img src={img[`image${itemInfo.itemImg.substring(0, 3)}`]} alt="" />
                                </div>
                                <div>
                                    <p>맛있어요</p>
                                    <p><img src={img[`icoPoint${reviewItem.reviewRating}`]} alt="" /></p>
                                </div>
                                <p>엄청</p>
                                <p>좋아요</p>
                                <div><span>홍길동</span><span>2024.01.10</span></div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ReviewDisplay;
