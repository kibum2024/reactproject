import React, { useState, useEffect, useRef } from "react";
import * as img from '../img/index';
import './AdvertisingSlide.css';
import { bnnData } from "src/components/data/itemData";


const AdvertisingSlide = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [img.bnnMain01, img.bnnMain02, img.bnnMain03];
    const pageNoRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        if (pageNoRef.current) {
            pageNoRef.current.textContent = currentImageIndex + 1; // 인덱스가 0부터 시작하므로 +1
        }
    }, [currentImageIndex]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const handlePrevious = () => {
        setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
    };

    const handleNext = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    return (
        <div className="main-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered && (
                <div className="page-btn page-left-btn visible" onClick={handlePrevious}>
                    <i className="bi bi-arrow-left-short"></i>
                </div>
            )}
            <ul className="slide-img">
                {images.map((image, index) => {
                    return (
                        <li key={index} className={`slide-item ${index === currentImageIndex ? 'active' : ''}`}>
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className={`slide-image ${index === currentImageIndex ? 'img-view' : ''}`}
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
                <span id="selectedPageNo" ref={ pageNoRef }>1</span> / <span>3</span>
            </div>
        </div>
    )
};

export default AdvertisingSlide;
