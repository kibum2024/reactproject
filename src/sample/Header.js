import React, { useState } from "react";
import './Header.css';
import * as img from '../components/img/index';
import ColorClick from "../components/ColorClick";

function Header(props) {
    const { itemData } = props;
    const [showClickData, setShowClickData] = useState([]);

    function insertEvent() {
        setShowClickData([...showClickData, { id: showClickData.length, itemData }]);
        console.log(showClickData);
    };
    function deleteEvent(id) {
        setShowClickData(showClickData.filter(data => data.id !== id));
    };

    return (
        <div>
            <p>여기에 이미지를 넣자</p>
            <p> { itemData[0].itemName } </p>
            <img src= { img.image001} alt="" />
            <div>
                <button onClick={ insertEvent }>이미지추가</button>
            </div>
            <div>
                {showClickData.map(data => (
                        <div key={data.id}>
                            <ColorClick itemData={data.itemData} />
                            <button onClick={() => deleteEvent(data.id)}>삭제</button>
                        </div>
                    ))}
            </div>
        </div>

    )
};

export default Header;