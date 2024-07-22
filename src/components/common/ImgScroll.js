import React, { useState, useEffect, useRef } from "react";
import * as img from 'src/components/img/index';
import { itemData } from "src/components/data/itemData";
import 'src/components/common/ImgScroll.css';

const ImgScroll = () => {
    const [leftPosition, setLeftPosition] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    let [currentIndex, setCurrentIndex] = useState(0);
    const ulRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === (itemData.length)) {
                setCurrentIndex(0);
                setLeftPosition(0);
                setActiveIndex(0);
            } else {
                if ((currentIndex) > 0 && (currentIndex) <= (itemData.length - 5)) {
                  setLeftPosition(currentIndex * -292);
                } else if (currentIndex === 0) {
                    setLeftPosition(0);
                } else {   
                    setLeftPosition(11 * -292);
                }
                setActiveIndex(currentIndex);
                setCurrentIndex(currentIndex + 1);
            }
        }, 2000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    useEffect(() => {
        if (ulRef.current) {
            ulRef.current.style.left = `${leftPosition}px`;
        }
    }, [leftPosition]);

    const controlClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slider-container-wrap">
            <div className="slider-container">
                <ul className="item-list" ref={ulRef}>
                    {itemData.map((item, index) => (
                        <li key={item.itemNo}>
                            <div className="item-content">
                                <img src={img[`image0${String(index + 1).padStart(2, '0')}`]} alt={item.itemName} />
                                <p className="item-name">{item.itemName}</p>
                                <p className="item-comment">{item.itemComment}</p>
                                <p className="discount-price">{item.discountPrice.toLocaleString()}원</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="control-container">
                {itemData.map((item, index) => (
                    <div className={`control-item ${index === activeIndex ? 'active' : ''}`} 
                         key={item.itemNo } 
                         onClick={() => controlClick(index)}
                    ></div>
                ))}
            </div>
        </div>
);
};

export default ImgScroll;
