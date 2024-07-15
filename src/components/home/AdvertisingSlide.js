import React from "react";
import * as img from '../img/index';

const AdvertisingSlide = () => {
    return (
        <div>
            <ul>
                <li>
                    <img src={ img.bnnMain01 } alt="" />
                </li>
                <li>
                    <img src={ img.bnnMain02 } alt="" />
                </li>
                <li>
                    <img src={ img.bnnMain03 } alt="" />
                </li>
            </ul>
        </div>
    )
};

export default AdvertisingSlide;