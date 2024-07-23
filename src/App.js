import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import 'src/App.css';
import { submenuData } from 'src/components/data/submenuData';
import DropdownMenu from 'src/components/main/DropdownMenu';
import MainContent  from 'src/components/home/MainContent';
import BrandStory  from 'src/components/brandstory/BrandStory';
import Story  from 'src/components/brandstory/Story';
import Contact  from 'src/components/brandstory/Contact';
import ItemIntroduce  from 'src/components/item/ItemIntroduce';
import Shopping  from 'src/components/shopping/Shopping';
import ShoppingNewItem from 'src/components/shopping/ShoppingNewItem';
import BestItem from 'src/components/shopping/BestItem';
import YogurtItem from 'src/components/shopping/YogurtItem';
import CerealItem from 'src/components/shopping/CerealItem';
import YogurtCerealItem from 'src/components/shopping/YogurtCerealItem';
import FooterDisplay from "src/components/main/FooterDisplay";
import TopDownBtn from 'src/components/main/TopDownBtn';
import ItemOrder from 'src/components/common/ItemOrder';


function App() {
  const { submenu1, submenu2, submenu3 } = submenuData;
  const [showDropdown, setShowDropdown] = useState(false);
  const [subMenus, setSubMenus] = useState([]);
  const [mouseRect, setMouseRect] = useState(null);
  const timeoutRef = useRef(null);
  const homeNavigate = useNavigate();
  const itemOrderNavigate = useNavigate();
  const location = useLocation(); // useLocation 훅으로 현재 경로를 가져옵니다.
  const [selectedItemNo, setSelectedItemNo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const logoClick = () => {
    homeNavigate('/home');
  };

  const menuMouseEnter = (items, event) => {
    const rect = event.target.getBoundingClientRect();
    setMouseRect(rect);
    setSubMenus(items);
    setShowDropdown(true);
    clearTimeout(timeoutRef.current);
  };

  const menuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleImageClick = (itemNo) => {
    setSelectedItemNo(itemNo);
    itemOrderNavigate('/item-order');
  };

  return (
    <div className='wrap'>
      <div className="header-wrap">
        <div className="header-logo">
          <h1 onClick={logoClick} >AWESOMED</h1>
        </div>
        <div className="main-menu-wrap">
          <ul className="main-menu">
            <li><Link to="/brandstory" className='main-menu-link'>브랜드스토리</Link></li>
            <li><Link to="/item" className='main-menu-link'>상품소개</Link></li>
            <li
              onMouseEnter={(e) => menuMouseEnter(submenu1, e)}
              onMouseLeave={menuMouseLeave}
            >쇼핑하기
            </li>
            <li
              onMouseEnter={(e) => menuMouseEnter(submenu2, e)}
              onMouseLeave={menuMouseLeave}
            >
              커뮤니티</li>
            <li><Link to="/qna" className='main-menu-link'>문의하기</Link></li>
          </ul>
        </div>
        <div className="my-menu-wrap">
          <ul className="my-menu">
            <li
                onMouseEnter={(e) => menuMouseEnter(submenu3, e)}
                onMouseLeave={menuMouseLeave}
            >
              <i className="bi bi-person"></i>
            </li>
            <li>
              <i className="bi bi-cart"></i>
            </li>
            <li>
              <i className="bi bi-search"></i>
            </li>
          </ul>
        </div>
        {showDropdown && (
          <DropdownMenu
            items={subMenus}
            mouseRect={mouseRect}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          />
        )}
        <TopDownBtn></TopDownBtn>
      </div>
      <div className='container-wrap'>
        <Routes>
          <Route path="/reactproject" element={<Navigate to="/home" />} ></Route>
          <Route path="/home" element={<MainContent />} ></Route> 
          <Route path="/brandstory" element={<BrandStory stateProp ={true}/>} >
            <Route path="story" element={<Story />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/item" element={<ItemIntroduce />} ></Route>
          <Route path="/shopping" element={<Shopping onImageClick={handleImageClick}/>}>
            <Route path="ShoppingNewItem" element={<ShoppingNewItem onImageClick={handleImageClick}/>}></Route>
            <Route path="BestItem" element={<BestItem onImageClick={handleImageClick}/>}></Route>
            <Route path="YogurtItem" element={<YogurtItem onImageClick={handleImageClick}/>} ></Route>
            <Route path="CerealItem" element={<CerealItem onImageClick={handleImageClick}/>} ></Route>
            <Route path="YogurtCerealItem" element={<YogurtCerealItem onImageClick={handleImageClick}/>} ></Route>
          </Route>
          <Route path="/qna" element={<BrandStory stateProp ={false}/>} >
            <Route path="story" element={<Story />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/item-order" element={<ItemOrder  itemNoProp={selectedItemNo} />} />
        </Routes>
      </div>
      <div className='footer-wrap'>
        <FooterDisplay></FooterDisplay>
      </div>
    </div>
  );
}

export default App;