import React from 'react';
import './Story.css';

const Stroy = () => {
    return (
        <div className='story-wrap'>
            <div className="story-img">
                <img src="https://via.placeholder.com/1452x592" alt="Placeholder Image" />
            </div>
            <p class="text-tit">브랜드의 가치를 높이는 선택, 어썸디</p>
            <p class="text-box">
                어썸디는 다양한 프로젝트 경험을 통해 제작된, 사용자 위주의 스킨을 판매합니다.<br />
                고객이 원하는 그 이상의 가치를 만드는 디자인 서비스, 편리한 기능, 이 모든 것을 만나보실 수 있습니다.<br />
                디자인이 어려우신 분들을 위해 깔끔한 레이아웃으로 구성된 브랜드 페이지를 제공해드립니다.<br />
                해당 페이지의 자세한 수정 방법은 메뉴얼을 통해 안내해드립니다.
            </p>
        </div>
    );
}

export default Stroy;