import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'src/components/main/DropdownMenu.css';

const DropdownMenu = ({ items, mouseRect, onMouseEnter = () => {}, onMouseLeave = () => {} }) => {    
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleClick = (menuLink) => {
    navigate(menuLink);
  };
  

  const style = {
    position: 'absolute',
    left: mouseRect ? `${mouseRect.left -230}px` : 0,
    top: mouseRect ? `${mouseRect.bottom}px` : 0,
  };

  return (
    <div>
        <div className='menu-point' style={style}></div>
        <ul 
            className="dropdown-menu"
            style={style}
            ref={dropdownRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.map((item, index) => (
                <li key={index} onClick={() => handleClick(item.menuLink)}>
                {item.menuName}
                </li>
            ))}
        </ul>
    </div>
  );
};

export default DropdownMenu;