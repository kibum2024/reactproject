import React from 'react';
import './VideoDisplay.css';

const VideoDisplay = () => {
    return (
        <div className='video-display-wrap'>
            <div className='video-display'>
                <div className='video-view'>
                    <iframe src="https://www.youtube.com/embed/IjTOkhMbXMI?loop=1&amp;amp;vq=hd1080&amp;amp;controls=0&amp;amp;showinfo=0&amp;amp;rel=0&amp;amp;autoplay=1&amp;amp;loop=1&amp;amp;playlist=IjTOkhMbXMI&amp;amp;mute=1&amp;amp;enablejsapi=1" frameborder="0"></iframe>
                </div>
                <div className='video-comment'>
                    <p className='video-p1'>#편의점 #GS25 #한정콜라보</p>
                    <p className='video-p0'>O!SWEET X GS25</p>
                    <p className='video-p2'>이제 오스윗을 편의점에서도 만나요!</p>
                    <p className='video-p2'>GS25 입점 기념 전 제품 ~30% 세일을 진행합니다.</p>
                    <span className='youtube-link'>유튜브채널로 바로가기<i className="bi bi-chevron-right"></i></span>
                </div>
            </div>
        </div>
    );
}

export default VideoDisplay;     