import React from "react";
import * as img from './img/index';

function ColorClick(props) {
    const { itemData } = props;

    return (
        <div>
            <p>여기는 color Click</p>
            <img src={ img.image002 } alt="" />
            <p> {itemData[2].itemName } </p>
        </div>
    );
};

export default ColorClick;