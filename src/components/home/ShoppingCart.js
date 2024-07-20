import React, { useState } from 'react';
import * as img from '../img/index';
import { itemData, itemInColor, itemInSize } from 'src/components/data/itemData';
import './ShoppingCart.css';

const ShoppingCart = ({imgProp, itemNoProp}) => {
    const [colorSelected, setColorSelected] = useState(true);
    const [isColor, setIsColor] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    const newItemData = itemData.filter(item => item.itemNo === itemNoProp);
    const newItemInColor = itemInColor.filter(itemColor => itemColor.itemNo === itemNoProp);
    const newItemInSize = itemInSize.filter(itemSize => itemSize.itemNo === itemNoProp);

    const coloerClick = (setColor) => {
        setColorSelected(false);
        setIsColor(setColor);
        if (newItemInSize.length === 0) {
            const item = { itemNO: itemNoProp, itemColor: setColor, itemSize: "", itemCount: 1, itemAmt: newItemData[0].discountPrice};
    
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
    
        const item = { itemNO: itemNoProp, itemColor: isColor, itemSize: size, itemCount: 1, itemAmt: newItemData[0].discountPrice};
    
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
    // console.log("selectedItems :", selectedItems);
    // console.log("newItemInSize :", newItemInSize);

    return (
        <div className='shopping-cart-wrap'>
            <div className='shopping-cart-modal'>
                <div className='shopping-cart-title'>{newItemData[0].itemName}</div>
                <hr />
                <div className='shopping-cart-item'>
                    <img src={ imgProp } alt="" />
                    <div>
                        <div className='shopping-cart-color'>
                            {newItemInColor.length > 0 && (
                                <>
                                    <span>색상</span>
                                    <ul className='shopping-cart-color-ul'>
                                        {newItemInColor.map((mapColor, index) => (
                                            <li key={index} 
                                                style={{ border: isColor === mapColor.itemColorName ? '2px solid blue' : '1px solid #aaa'}} >
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
                                            <li key={index}  className={`${colorSelected ? 'disabled' : ''}`} style={{ border: '1px solid #aaa' }} onClick={() => sizerClick(mapSize.itemSize)}>
                                                { mapSize.itemSize }
                                            </li>
                                        ))}
                                    </ul>
                                    <p>[필수] 사이즈를 선택하세요. </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className='shopping-cart-guide'>
                    <div>!</div>
                    <p>위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.</p>
                </div>
                <hr className='hr'/>
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
                                <img src={ img.countUp } alt="Increase Count" onClick={() => increaseCount(index)} />
                                <img src={ img.countDown } alt="Decrease Count" onClick={() => decreaseCount(index)} />
                            </div>
                            <div className='shopping-cart-selected-delete'><img src={ img.btnPriceDelete } alt="Remove item" onClick={() => removeItem(item)} /></div>
                            <div className='shopping-cart-selected-amt'>{(item.itemCount * item.itemAmt).toLocaleString() + '원'}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <hr />
                    <div className='shopping-cart-total'>
                        <span className='shopping-cart-total-title'>총 상품금액(수량) : </span>
                        <span className='shopping-cart-total-amt'>{calculateTotalAmt().toLocaleString()}원</span>
                        <span className='shopping-cart-total-cnt'>({calculateTotalCount() })개</span>
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
    );
}

export default ShoppingCart;