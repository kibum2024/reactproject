import React, { useState, useEffect, useRef } from "react";
import * as img from 'src/components/img/index';
import 'src/components/home/AdvertisingSlide.css';
import { bnnData } from "src/components/data/itemData";

const AdvertisingSlide = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [leftPosition, setLeftPosition] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [img.bnnMain01, img.bnnMain02, img.bnnMain03];
    const pageNoRef = useRef(null);
    const ulRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    useEffect(() => {
        setLeftPosition(currentIndex * -1460);
    }, [currentIndex]);

    useEffect(() => {
        if (ulRef.current) {
            ulRef.current.style.left = `${leftPosition}px`;
        }
    }, [leftPosition]);

    useEffect(() => {
        if (pageNoRef.current) {
            pageNoRef.current.textContent = currentIndex + 1; 
        }
    }, [currentIndex]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const handlePrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    return (
        <div className="main-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered && (
                <div className="page-btn page-left-btn visible" onClick={handlePrevious}>
                    <i className="bi bi-arrow-left-short"></i>
                </div>
            )}
            <ul className="slide-img" ref={ulRef}>
                {console.log("ul currentIndex : ", currentIndex)}
                {images.map((image, index) => {
                    return (
                        <li key={index} className={`slide-item ${index === currentIndex ? 'active' : ''}`}>
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className="slide-image"
                            />
                            <div className="txt-box">
                                <div className="inner g-sans">
                                    <p className="tit1"> { bnnData[index].itemTitle1 } </p>
                                    <p className="tit2"> { bnnData[index].itemTitle2 } </p>
                                    <p className="txt1"> { bnnData[index].itemEvent1 } </p>
                                    <p className="txt2"> { bnnData[index].itemEvent2 } </p>
                                    <span className="btn-link">SHOP NOW<i className="bi bi-chevron-right"></i></span>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            {isHovered && (
                <div className="page-btn page-right-btn visible" onClick={handleNext}>
                    <i className="bi bi-arrow-right-short"></i>
                </div>
            )}
            <div className="page-no">
                <span id="selectedPageNo" ref={pageNoRef}>1</span> / <span>3</span>
            </div>
        </div>
    )
};

export default AdvertisingSlide;
