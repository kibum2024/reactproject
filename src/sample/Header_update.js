import React, { useState, useCallback } from 'react';
// import PropTypes from 'prop-types';
import './Header.css';
import * as img from '../components/img/index';
import ColorClick from "../components/ColorClick";

const HeaderUp = ({ itemData }) => {
    const [showClickData, setShowClickData] = useState([]);

    const insertEvent = useCallback(() => {
        setShowClickData(prevData => [...prevData, { id: prevData.length, itemData }]);
    }, [itemData]);

    const deleteEvent = useCallback((id) => {
        setShowClickData(prevData => prevData.filter(data => data.id !== id));
    }, []);

    return (
        <div>
            <ImageSection itemData={itemData} />
            <ButtonSection insertEvent={insertEvent} />
            <ColorClickList
                showClickData={showClickData}
                deleteEvent={deleteEvent}
            />
        </div>
    );
};

const ImageSection = ({ itemData }) => {
    return (
        <>
            <p>여기에 이미지를 넣자</p>
            <p>{itemData[0].itemName}</p>
            <img src={img.image001} alt="" />
        </>
    );
};

const ButtonSection = ({ insertEvent }) => (
    <div>
        <button onClick={insertEvent}>이미지추가</button>
    </div>
);

const ColorClickList = ({ showClickData, deleteEvent }) => (
    <div>
        {showClickData.map((data, index) => (
            <div key={index}>
                <ColorClick itemData={data.itemData} />
                <button onClick={() => deleteEvent(data.id)}>삭제</button>
            </div>
        ))}
    </div>
);

// HeaderUp.propTypes = {
//     itemData: PropTypes.arrayOf(
//         PropTypes.shape({
//             itemName: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// };

export default HeaderUp;