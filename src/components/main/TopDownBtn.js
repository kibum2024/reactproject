import React, { useRef } from 'react';
import 'src/components/main/TopDownBtn.css';

const TopDownBtn = () => {
    const rightBoxRef = useRef(null);

    function qBoxSet(action) {
        let documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );

        if (action === "top") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (action === "down") {
            window.scrollTo({ top: documentHeight, behavior: 'smooth' });
        };
    };

    return (
        <div className="right-quick-wrap">
            <ul className="right-box" id="rightBox" ref={ rightBoxRef }>
                <li onClick={() => qBoxSet("top")}><i className="bi bi-chevron-up"></i></li>
                <li onClick={() => qBoxSet("down")}><i className="bi bi-chevron-down"></i></li>
            </ul>
        </div>
    );
}

export default TopDownBtn;
