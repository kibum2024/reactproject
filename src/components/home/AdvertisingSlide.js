import React, { useState, useEffect } from "react";
import * as img from '../img/index';
import './AdvertisingSlide.css';

const AdvertisingSlide = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isView, setIsView] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [img.bnnMain01, img.bnnMain02, img.bnnMain03];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
            handleScroll();
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleScroll = () => {
        // 페이지 스크롤 이벤트 또는 다른 방법으로 이미지가 뷰포트에 보이는지 여부를 확인할 수 있음
        const imageElement = document.getElementById('slide-image');
        if (imageElement) {
            const rect = imageElement.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
            setIsView(isVisible);
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div className="main-slide" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* 좌측 화살표 버튼 */}
            {isHovered && (
                <div className={`page-btn page-left-btn ${isHovered ? 'visible' : ''}`} onClick={() => setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length)}>
                    <i className="bi bi-arrow-left-short"></i>
                </div>
            )}
            {/* 이미지 슬라이드 */}
            <ul className="slide-img">
                {images.map((image, index) => (
                    <li key={index} className={`slide-item ${index === currentImageIndex ? 'active' : ''}`}>
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            id="slide-image"
                            className={`slide-image ${index === currentImageIndex ? 'img-view' : ''}`}
                            // style={{
                            //     transform: index === currentImageIndex ? 'scale(1)' : 'scale(0.9)',
                            //     transition: 'transform 1s ease',
                            // }}
                        />
                    </li>
                ))}
            </ul>
            {/* 우측 화살표 버튼 */}
            {isHovered && (
                <div className={`page-btn page-right-btn ${isHovered ? 'visible' : ''}`} onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}>
                    <i className="bi bi-arrow-right-short"></i>
                </div>
            )}
        </div>
    )
};

export default AdvertisingSlide;
