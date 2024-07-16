import React, { useState, useEffect } from "react";
import * as img from '../img/index';
import './AdvertisingSlide.css';

const AdvertisingSlide = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [img.bnnMain01, img.bnnMain02, img.bnnMain03];

// ReactDOM.render(<ImageSlider images={images} />, document.getElementById('root'));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 1000); // 1초마다 이미지 변경

        return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 interval 정리
    }, [images.length]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div className="main-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered && (
                <div  className={`page-btn page-left-btn ${isHovered ? 'visible' : ''}`}>
                    <i class="bi bi-arrow-left-short"></i>
                </div>
            )}
            <ul className="slide-img">
                {images.map((image, index) => (
                    <li key={index} style={{ display: index === currentImageIndex ? 'block' : 'none' }}>
                        <img src={image} alt={`Slide ${index}`} />
                    </li>
                ))}            
            </ul>
            {isHovered && (
                <div  className={`page-btn page-right-btn ${isHovered ? 'visible' : ''}`}>
                    <i class="bi bi-arrow-right-short"></i>
                </div>
            )}
        </div>
    )
};

export default AdvertisingSlide;