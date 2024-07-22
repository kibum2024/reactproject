import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-wrap'>
            <div className='contact-frame'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.811513890148!2d127.0487426155902!3d37.653635126892375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb945899e0a19%3A0x9f30e83796b08458!2z7ISc7Jq47Yq567OE7IucIOuPhOu0ieq1rCDssL3rj5kgMTQ!5e0!3m2!1sko!2skr!4v1608097642908!5m2!1sko!2skr" width="100%" height="540" frameborder="0"  title="google map" style={{border: "0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div className='contact-info-main'>
                <p>CONTACT US</p>
                <span>오시는 길 및 문의 안내</span>
            </div>
            <div className='contact-info'>
                <ul className='contact-info-ul'>
                    <li>
                        <p className='contact-info-title'><i class="bi bi-mic-fill"></i>고객센터</p>
                        <p className='contact-info-tell'>02-123-4567</p>
                        <p className='contact-info-content'>MON-FRI 10:00 - 18:00</p>
                        <p className='contact-info-content'>LUNCH 12:00 - 13:30</p>
                        <p className='contact-info-content'>SAT, SUN, HOLY OFF</p>
                    </li>
                    <li>
                        <p className='contact-info-title'><i class="bi bi-geo-alt-fill"></i>오시는 길</p>
                        <p className='contact-info-content'>서울 강남구 가로수길 23</p>
                    </li>
                    <li>
                        <p className='contact-info-title'><i class="bi bi-envelope-at"></i>메일문의</p>
                        <p className='contact-info-content'>awesomed@awesomed.com</p>
                        <p className='contact-info-content'>메일문의는 위 주소로 보내주세요.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;