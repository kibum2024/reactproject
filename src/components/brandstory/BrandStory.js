import React, { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import 'src/components/brandstory/BrandStory.css';
import Story from "./Story";
import Contact from "./Contact";

const BrandStory = ({stateProp}) => {
    const [menuState, setMenuState] = useState(stateProp);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === `/brandstory/story`) {
          setMenuState(true);
        } else {
          setMenuState(false);
          navigate('/qna/contact');
        }
      }, [location.pathname]);
  
    const storyClick = () => {
        setMenuState(true);
    };

    const contactClick = () => {
        setMenuState(false);
    };

    return (
        <div className="brand-story-wrap">
            <div className="brand-story-header">
                <h1> BRAND </h1>
            </div>
            <div className="brand-story-btn">
                <ul className="brand-story-ul">
                    <li className={`${menuState ? 'on' : ''}`}><Link to="/brandstory/story" className="main-menu-link" onClick={ storyClick }>BRAND STORY</Link></li>
                    <li className={`${menuState ? '' : 'on'}`}><Link to="/qna/contact" className="main-menu-link" onClick={ contactClick }>CONTACT US</Link></li>
                </ul>
            </div>
            <div className="brand-story-content">

            </div>
            <div className='container-wrap'>
                <Routes>
                    <Route path="/" element={<Navigate to="story" />} ></Route>
                    <Route path="story" element={<Story />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    )
};

export default BrandStory;