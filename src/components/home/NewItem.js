import React, { useState } from 'react';
import Modal from 'react-modal';
import * as img from 'src/components/img/index';
import { itemData } from "src/components/data/itemData";
import './NewItem.css';
import ShoppingCart from './ShoppingCart';

Modal.setAppElement('#root');


const NewItem = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedNo, setSelectedNo] = useState(null);

    const newItemData = itemData.filter(item => item.newKind === "1");

    const shoppingCartClick = (itemImg, itemNo) => {
        setSelectedImage(itemImg);
        setSelectedNo(itemNo);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setSelectedNo(null);
        setModalIsOpen(false); // 모달을 닫을 때 상태를 false로 설정합니다.
    };

    return (
        <div className='new-item-wrap'>
            <div className="new-item-header">
                <h1>NEW! 신상품</h1>
                <p>새롭게 입고된 제품들을 소개합니다.</p>
            </div>
            <div className='new-item-grid'>
                {newItemData.map((item, index) => (
                    <div key={index} className='new-item'>
                        <img src={img[`image${item.itemImg.substring(0,3)}`]} alt="" />
                        <p className='new-item-name'> {item.itemName} </p>
                        <p className='new-item-comment'> {item.itemComment} </p>
                        <span className='new-item-originalPrice'><del>{item.originalPrice.toLocaleString()}</del>원</span><span className='new-item-discountPrice'> {item.discountPrice.toLocaleString()}원</span><span className='new-item-discountRate'> {item.discountRate} </span>
                        <div className='shopping-cart' onClick={ () => shoppingCartClick(img[`image${item.itemImg.substring(0,3)}`], item.itemNo) }><i class="bi bi-bucket"></i></div>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Shopping Cart"
                            style={{
                                content: {
                                    top: '56%',
                                    left: '50%',
                                    right: 'auto',
                                    bottom: 'auto',
                                    marginRight: '-50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '600px', // 모달창의 너비 설정
                                    height: '570px', // 모달창의 높이 설정
                                    padding: '0'
                                },
                                overlay: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)' // 배경을 반투명하게 설정
                                }
                            }}
                        >
                            <div style={{
                                backgroundColor: 'black', // 창 제목의 배경색 설정
                                color: 'white',
                                padding: '10px 30px', // 창 제목의 패딩 설정
                                borderBottom: '1px solid #ccc', // 창 제목의 하단 경계선 설정
                                height: '25px', // 창 제목의 높이 설정
                                display: 'flex', // 플렉스박스를 사용하여 정렬
                                alignItems: 'center', // 수직 중앙 정렬
                                justifyContent: 'space-between' // 공간을 균등하게 분배하여 정렬
                            }}>
                                <h5 style={{ margin: '0' }}>옵션 선택</h5> {/* 창 제목 */}
                                <img onClick={closeModal} style={{ color: 'white',  cursor: 'pointer' }} src={ img.btnClose } alt="" />
                            </div>
                            <div style={{ padding: '20px' }}>
                                {selectedImage && <ShoppingCart imgProp={selectedImage} itemNoProp={selectedNo}/>}
                            </div>
                        </Modal>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewItem;
