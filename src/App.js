import React, { useState, useRef } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import { submenuData } from './components/data/submenuData';
import DropdownMenu from './components/DropdownMenu';
import MainContent  from './components/home/MainContent';
import BrandStory  from './components/brandstory/BrandStory';
import Story  from './components/brandstory/Story';
import Contact  from './components/brandstory/Contact';
import ItemIntroduce  from './components/item/ItemIntroduce';
import Shopping  from './components/shopping/Shopping';
import NewItem from './components/shopping/NewItem';
import BestItem from './components/shopping/BestItem';
import FooterDisplay from "./components/FooterDisplay";
import TopDownBtn from './components/TopDownBtn';


function App() {
  const { submenu1, submenu2, submenu3 } = submenuData;
  const [showDropdown, setShowDropdown] = useState(false);
  const [subMenus, setSubMenus] = useState([]);
  const [mouseRect, setMouseRect] = useState(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const logoClick = () => {
    navigate('/home');
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
            ><Link to="/shopping" className='main-menu-link'>쇼핑하기</Link>
            </li>
            <li
              onMouseEnter={(e) => menuMouseEnter(submenu2, e)}
              onMouseLeave={menuMouseLeave}
            >
              커뮤니티</li>
            <li>문의하기</li>
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
          <Route path="/" element={<Navigate to="/home" />} ></Route>
          <Route path="/home" element={<MainContent />} ></Route> 
          <Route path="/brandstory" element={<BrandStory />} >
            <Route path="story" element={<Story />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/item" element={<ItemIntroduce />} ></Route>
          <Route path="/shopping" element={<Shopping />}>
            <Route path="NewItem" element={<NewItem />} ></Route>
            <Route path="BestItem" element={<BestItem />} ></Route>
          </Route>
        </Routes>
      </div>
      <div className='footer-wrap'>
        <FooterDisplay></FooterDisplay>
      </div>
    </div>
  );
}

export default App;