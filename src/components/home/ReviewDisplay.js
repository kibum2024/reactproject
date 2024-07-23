import React, { useState, useEffect, useRef } from 'react';
import * as img from 'src/components/img/index';
import { reviewData, itemData } from 'src/components/data/itemData';
import 'src/components/home/ReviewDisplay.css';

const ReviewDisplay = () => {
    const [leftPosition, setLeftPosition] = useState(0);
    let [currentIndex, setCurrentIndex] = useState(3);
    const ulRef = useRef(null);
    const xScrollRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === (reviewData.length)) {
                setCurrentIndex(3);
                setLeftPosition(0);
            } else {
                if ((currentIndex) > 3 && (currentIndex) <= (reviewData.length - 1)) {
                  setLeftPosition((currentIndex - 3 ) * -370);
                } else if (currentIndex === 3) {
                    setLeftPosition(0);
                };
                setCurrentIndex(currentIndex + 1);
            }
        }, 800);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    useEffect(() => {
        if (ulRef.current) {
            ulRef.current.style.left = `${leftPosition}px`;
        }
    }, [leftPosition]);

    const findItem = (itemNo) => {
        const findItemData = itemData.find(iteminfo => iteminfo.itemNo === itemNo);
        return findItemData ? findItemData : itemNo;
    };


    const handleMouseDown = (e) => {
        setIsMouseDown(true);
    };

    const handleMouseMove = (e) => {
        if (isMouseDown && xScrollRef.current) {
            const deltaX = e.clientX - xScrollRef.current.getBoundingClientRect().left;
            xScrollRef.current.style.transform = `translate3d(${deltaX}px, 0px, 0px)`;
            setLeftPosition(deltaX);
            // console.log('isMouseDown X Position:', isMouseDown);
            // console.log('Mouse X clientX:', e.clientX);
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };
    const handleMouseLeave = () => {
        setIsMouseDown(false); 
    };

    return (
        <div className='review-display-wrap'>
            <div className='review-display-header'>
                <h1>포토리뷰</h1>
                <p>실제 사용자들의 생생한 리얼리뷰를 소개합니다.</p>
            </div>
            <div className='review-display-item'>
                <ul className='review-display-ul' ref={ulRef}>
                    { reviewData.map((reviewItem, index) => {
                        const itemInfo = findItem(reviewItem.itemNo);
                        return (
                            <li key={index} className='review-item'>
                                <div className='review-img'>
                                    <img src={img[`image${itemInfo.itemImg.substring(0, 3)}`]} alt="" />
                                </div>
                                <div className='review-rating'>
                                    <div>
                                        <img src={img[`image${itemInfo.itemImg.substring(0, 3)}`]} alt="" />
                                    </div>
                                    <div>
                                        <p> {itemInfo.itemName} </p>
                                        <p><img src={img[`icoPoint${reviewItem.reviewRating}`]} alt="" /></p>
                                    </div>
                                </div>
                                <div className='review-rating-wrap'>
                                    <p className='review-title'> {reviewItem.reviewTitle} </p>
                                    <p className='review-comment'> {reviewItem.reviewContent} </p>
                                </div>
                                <div><span className='reviewer'> {reviewItem.reviewer} </span><span className='review-date'> {reviewItem.reviewDate} </span></div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='x-scrollBar-wrap'>
                <div className='x-scrollBar'></div>
                <div className='x-scrollBar-active' 
                     style={{transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms', width: '1470px'}} 
                     ref={ xScrollRef }
                     onMouseDown={handleMouseDown}
                     onMouseMove={handleMouseMove}
                     onMouseUp={handleMouseUp} 
                     onMouseLeave={handleMouseLeave}               
                >
                </div>
            </div>
        </div>
    );
}

export default ReviewDisplay;
