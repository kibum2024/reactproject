import React, { useState, useRef, useEffect, useCallback } from 'react';
import ImgScroll from 'src/components/common/ImgScroll';
import { itemData, itemInColor, itemInSize } from 'src/components/data/itemData';
import * as img from 'src/components/img/index';
import 'src/components/common/ItemOrder.css';

const ItemOrder = ({ itemNoProp }) => {
    const [colorSelected, setColorSelected] = useState(true);
    const [isColor, setIsColor] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    const newItemData = itemData.filter(item => item.itemNo === Number(itemNoProp));
    const newItemInColor = itemInColor.filter(itemColor => itemColor.itemNo === itemNoProp);
    const newItemInSize = itemInSize.filter(itemSize => itemSize.itemNo === itemNoProp);

    const coloerClick = (setColor) => {
        setColorSelected(false);
        setIsColor(setColor);
        if (newItemInSize.length === 0) {
            const item = { itemNO: itemNoProp, itemColor: setColor, itemSize: "", itemCount: 1, itemAmt: newItemData[0].discountPrice };

            const isDuplicate = selectedItems.some(
                selectedItem => selectedItem.itemColor === item.itemColor
            );

            if (isDuplicate) {
                alert('이미 선택한 색상입니다.');
            } else {
                setSelectedItems([...selectedItems, item]);
            }

        }
    };

    const sizerClick = (size) => {
        if (colorSelected) {
            alert('색상을 먼저 선택하세요.');
            return;
        }

        const item = { itemNO: itemNoProp, itemColor: isColor, itemSize: size, itemCount: 1, itemAmt: newItemData[0].discountPrice };

        const isDuplicate = selectedItems.some(
            selectedItem => selectedItem.itemColor === item.itemColor && selectedItem.itemSize === item.itemSize
        );

        if (isDuplicate) {
            alert('이미 선택한 색상과 사이즈입니다.');
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const updateCount = (index, newCount) => {
        const updatedItems = [...selectedItems];
        updatedItems[index].itemCount = newCount;
        setSelectedItems(updatedItems);
    };

    const increaseCount = (index) => {
        const updatedItems = [...selectedItems];
        updatedItems[index].itemCount += 1;
        setSelectedItems(updatedItems);
    };

    const decreaseCount = (index) => {
        const updatedItems = [...selectedItems];
        if (updatedItems[index].itemCount > 1) {
            updatedItems[index].itemCount -= 1;
            setSelectedItems(updatedItems);
        }
    };

    const removeItem = (itemToRemove) => {
        setSelectedItems(selectedItems.filter(
            item => item.itemColor !== itemToRemove.itemColor || item.itemSize !== itemToRemove.itemSize
        ));
    };

    const calculateTotalCount = () => {
        return selectedItems.reduce((total, item) => total + item.itemCount, 0);
    };

    const calculateTotalAmt = () => {
        return selectedItems.reduce((total, item) => total + item.itemCount * item.itemAmt, 0);
    };

    // 줌 시작
    const zoomFactor = 3;
    const imgRef = useRef(null);
    const imgZoomRef = useRef(null);
    const imgZoomViewRef = useRef(null);
    const rafIdRef = useRef(null); 
    const isMouseOverRef = useRef(false);
    const lastX = useRef(0);
    const lastY = useRef(0); 

    const initializeZoom = () => {
        imgZoomViewRef.current.style.backgroundImage = `url(${imgRef.current.src})`;
        imgZoomViewRef.current.style.backgroundSize = `${imgRef.current.width * zoomFactor}px ${imgRef.current.height * zoomFactor}px`;

        imgZoomRef.current.style.width = `${imgRef.current.width / zoomFactor}px`;
        imgZoomRef.current.style.height = `${imgRef.current.height / zoomFactor}px`;

        imgRef.current.style.position = 'relative';
        imgZoomRef.current.style.position = 'absolute';
        imgZoomRef.current.style.pointerEvents = 'none';
    };

    const moveZoomArea = useCallback(() => {
        rafIdRef.current = null;
        if (!isMouseOverRef.current) return;
    
        const zoomAreaWidth = imgZoomRef.current.offsetWidth;
        const zoomAreaHeight = imgZoomRef.current.offsetHeight;
    
        let x = lastX.current - zoomAreaWidth / 2;
        let y = lastY.current - zoomAreaHeight / 2;
    
        // 이미지 영역을 벗어나지 않도록 x와 y 좌표 제한
        x = Math.max(0, Math.min(x, imgRef.current.offsetWidth - zoomAreaWidth));
        y = Math.max(0, Math.min(y, imgRef.current.offsetHeight - zoomAreaHeight));
    
        imgZoomRef.current.style.left = `${x + 80}px`;
        imgZoomRef.current.style.top = `${y}px`;
        imgZoomRef.current.style.display = 'block';
    
        const zoomedX = -(x * zoomFactor);
        const zoomedY = -(y * zoomFactor);
    
        imgZoomViewRef.current.style.backgroundPosition = `${zoomedX}px ${zoomedY}px`;
    
        rafIdRef.current = requestAnimationFrame(moveZoomArea);
    }, []); 

    useEffect(() => {
        const img = imgRef.current;

        const updateZoomArea = (e) => {
            const rect = imgRef.current.getBoundingClientRect();
            lastX.current = e.clientX - rect.left;
            lastY.current = e.clientY - rect.top;
            if (!rafIdRef.current) {
                rafIdRef.current = requestAnimationFrame(moveZoomArea);
            }
        };

        const handleMouseEnter = (e) => {
            isMouseOverRef.current = true;
            imgZoomRef.current.style.display = 'block';
            imgZoomViewRef.current.style.display = 'block';
            updateZoomArea(e);
        };

        const handleMouseMove = updateZoomArea;

        const handleMouseLeave = (e) => {
            isMouseOverRef.current = false;
            imgZoomRef.current.style.display = 'none';
            imgZoomViewRef.current.style.display = 'none';
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
                rafIdRef.current = null;
            }
        };

        if (img.complete) {
            initializeZoom();
        } else {
            img.addEventListener('load', initializeZoom);
        }

        img.addEventListener('mouseenter', handleMouseEnter);
        img.addEventListener('mousemove', handleMouseMove);
        img.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            img.removeEventListener('mouseenter', handleMouseEnter);
            img.removeEventListener('mousemove', handleMouseMove);
            img.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [moveZoomArea]);
     // 줌 끝

    return (
        <div className='item-order-wrap'>
            <div className="item-order-main-wrap">
                <div className="item-order-img-main">
                    <div className="item-order-selected-item">
                        <img className="item-order-selected-img" src={img[`image${newItemData[0].itemImg.substring(0, 3)}`]} alt="selectedItemImg" ref={ imgRef }/>
                        <div className="item-order-zoom-area" ref={ imgZoomRef }></div>
                    </div>
                    <div className="item-order-img-view">
                        <img className="item-order-view" src={img[`image${newItemData[0].itemImg.substring(0, 3)}`]} alt="itemView" />
                    </div>
                </div>
                <div className="item-order-wrap">
                    <div className="item-order-title">{newItemData[0].itemName}</div>
                    <div className='item-order-price-wrap'>
                        <div className="item-order-price">
                            <p className="item-order-originalPrice"><del>{newItemData[0].originalPrice.toLocaleString()}원</del></p>
                            <p className="item-order-discountPrice">{newItemData[0].discountPrice.toLocaleString()}원</p>
                        </div>
                        <div className="item-order-discountRate">{newItemData[0].discountRate}</div>
                    </div>
                    <div className='item-order-condition'>
                        <table>
                            <thead>
                                <tr>
                                    <td className="deliverKind">국내·해외배송</td>
                                    <td>국내배송</td>
                                </tr>
                                <tr>
                                    <td className="deliveryWay">배송방법</td>
                                    <td>택배</td>
                                </tr>
                                <tr>
                                    <td className="deliverPrice">배송비</td>
                                    <td>2,500원 (50,000원 이상 구매 시 무료)</td>
                                </tr>
                                <tr>
                                    <div>
                                        <div className='shopping-cart-color'>
                                            {newItemInColor.length > 0 && (
                                                <>
                                                    <span>색상</span>
                                                    <ul className='shopping-cart-color-ul'>
                                                        {newItemInColor.map((mapColor, index) => (
                                                            <li key={index}
                                                                style={{ border: isColor === mapColor.itemColorName ? '2px solid blue' : '1px solid #aaa' }} >
                                                                <div style={{ backgroundColor: mapColor.itemColor }} onClick={() => coloerClick(mapColor.itemColorName)}></div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <p>[필수] 색상을 선택하세요. </p>
                                                </>
                                            )}
                                        </div>
                                        <div className='shopping-cart-size'>
                                            {newItemInSize.length > 0 && (
                                                <>
                                                    <span>사이즈</span>
                                                    <ul className='shopping-cart-size-ul'>
                                                        {newItemInSize.map((mapSize, index) => (
                                                            <li key={index} className={`${colorSelected ? 'disabled' : ''}`} style={{ border: '1px solid #aaa' }} onClick={() => sizerClick(mapSize.itemSize)}>
                                                                {mapSize.itemSize}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <p>[필수] 사이즈를 선택하세요. </p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </tr>
                                <tr>
                                    <td className="minCount">(최소주문수량 1개 이상)</td>
                                    <td></td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className='shopping-cart-selected'>
                        {selectedItems.map((item, index) => (
                            <div key={index} className='shopping-cart-selected-item'>
                                <div className='shopping-cart-selected-namecolor'>
                                    <div className='shopping-cart-selected-name'>{newItemData[0].itemName}</div>
                                    <div className='shopping-cart-selected-color'>{newItemInSize.length > 0 ? `- ${item.itemColor}/${item.itemSize}` : `- ${item.itemColor}`}</div>
                                </div>
                                <div className='shopping-cart-selected-count'>
                                    <input
                                        type="text"
                                        value={item.itemCount}
                                        onChange={(e) => updateCount(index, parseInt(e.target.value) || 1)}
                                        min="1"
                                    />
                                </div>
                                <div className='shopping-cart-selected-updown'>
                                    <img src={img.countUp} alt="Increase Count" onClick={() => increaseCount(index)} />
                                    <img src={img.countDown} alt="Decrease Count" onClick={() => decreaseCount(index)} />
                                </div>
                                <div className='shopping-cart-selected-delete'><img src={img.btnPriceDelete} alt="Remove item" onClick={() => removeItem(item)} /></div>
                                <div className='shopping-cart-selected-amt'>{(item.itemCount * item.itemAmt).toLocaleString() + '원'}</div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <hr />
                        <div className='shopping-cart-total'>
                            <span className='shopping-cart-total-title'>총 상품금액(수량) : </span>
                            <span className='shopping-cart-total-amt'>{calculateTotalAmt().toLocaleString()}원</span>
                            <span className='shopping-cart-total-cnt'>({calculateTotalCount()})개</span>
                        </div>
                        <hr />
                    </div>
                    <div>
                        <ul className='shopping-cart-btn'>
                            <li>바로 구매하기</li>
                            <li>장바구니 담기</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="zoomed-image-view" ref={ imgZoomViewRef }></div>

            <ImgScroll></ImgScroll>
        </div>
    );
}

export default ItemOrder;