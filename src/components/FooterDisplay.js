import React from 'react';
import './FooterDisplay.css';

const FooterDisplay = () => {
    return (
        <div className='footer-display-wrap'>
            <div className='footer-display'>
                <div className='footer-display-left'>
                    <div className='footer-tel-info'>
                        <h2>02-123-4567</h2>
                        <p>MON-FRI 10:00 - 18:00</p>
                        <p>LUNCH 12:00 - 13:30</p>
                        <p>SAT, SUN, HOLY OFF</p>
                        <p><span>국민 0000-00-0000</span><span> / </span><span>예금주 어썸디</span></p>
                    </div>
                    <div className='footer-company-info'>
                        <h3>COMPANY</h3>
                        <p>AWESOMED  대표이사:어썸디 개인정보보호책임자:어썸디 사업자등록번호:0000-00-00000</p>
                        <p>통신판매신고번호 제2024-서울강남-12345호</p>
                        <p>대표전화 02-123-4567 / 팩스 / 대표메일 awesomed@awesomed.com</p>
                        <p>주소 서울 강남구 가로수길 23</p>
                    </div>
                </div>
                <div className='footer-display-right'>
                    <ul className='footer-main-menu'>
                        <li>회사소개</li>
                        <li>이용약관</li>
                        <li>쇼핑몰이용안내</li>
                        <li>개인정보처리방침</li>
                    </ul>
                    <div className='footer-sub'>
                        <ul className='footer-sub-menu1'>
                            <li>공지사항</li>
                            <li>상품리뷰</li>
                            <li>상품 Q&amp;A</li>
                            <li>이벤트</li>
                        </ul>
                        <ul className='footer-sub-menu2'>
                            <li>마이페이지</li>
                            <li>장바구니</li>
                            <li>관심상품</li>
                            <li>주문조회</li>
                            <li>쿠폰내역</li>
                            <li>적립금내역</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='footer-link-menu'>
                            <li><a href="https://www.facebook.com/"  target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/"  target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a></li>
                            <li><a href="https://yellowid.kakao.com/login"  target="_blank" rel="noopener noreferrer"><i class="bi bi-wechat"></i></a></li>
                            <li><a href="https://blog.naver.com/"  target="_blank" rel="noopener noreferrer"><i class="bi bi-line"></i></a></li>
                        </ul>
                        <p class="copyright">COPYRIGHT ©AWESOMED ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterDisplay;