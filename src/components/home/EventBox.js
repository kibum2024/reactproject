import React from "react";
import * as img from 'src/components/img/index';
import './EventBox.css';

const EventBox = () => {
    const images = [
        { img: img.bnnSub01, eventName: "신규 회원가입시 3,000원 쿠폰 증정", eventComment: "가입만 해도 즉시 할인쿠폰이 증정돼요!" },
        { img: img.bnnSub02, eventName: "신상품 5% 할인 이벤트", eventComment: "인기 신상품들을 보다 할인된 가격으로 만나보세요!" },
        { img: img.bnnSub03, eventName: "베스트10 해피 박스 증정", eventComment: "30,000원 이상 구매시 추첨을 통해 해피박스를 드려요!" }
    ];
    return (
        <div className="event-box-wrap">
            <div className="event-box-header">
                <h1>O!SWEET 런칭 기념 이벤트</h1>
                <p>지나치면 손해! 혜택 가득 이벤트를 만나보세요.</p>
            </div>
            <div className="event-box-img-wrap">
                <ul className="event-box-img">
                    {images.map((item, index) => (
                        <li>
                            <img src={item.img} alt={`Slide ${index}`} />
                            <p className="event-name"> {item.eventName } </p>
                            <p className="event-comment"> {item.eventComment } </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default EventBox;