import React from 'react';
import * as img from 'src/components/img/index';
import { itemData } from "src/components/data/itemData";
import './ShoppingCart.css';

const ShoppingCart = () => {
    return (
        <div className='shopping-cart-wrap'>
            <div className='shopping-cart-modal'>
                <div className='shopping-window-top'><span>옵션선택</span><img src={ img.btnClose } alt="" /></div>
                <div>딸기 요거트 초코볼</div>
                <hr />
                <img src={ img.image001 } alt="" />
                <table>
                    <tbody>
                        <tr>
                            <td>색상</td>
                            <td>
                                <div>
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                                <p>[필수] 옐로우</p>
                            </td>
                        </tr>
                        <tr>
                            <td>사이즈</td>
                            <td>
                                <div>
                                    <ul>
                                        <li></li>
                                    </ul>
                                </div>
                                <p>[필수] 라지</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div></div>
                <p>위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.</p>
                <table>
                    <tbody>
                        {/* 여기에 아이템 선택 추가 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShoppingCart;