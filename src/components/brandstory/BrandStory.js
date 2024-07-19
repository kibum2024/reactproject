import React from "react";
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import 'src/components/brandstory/BrandStory.css';
import Story from "./Story";
import Contact from "./Contact";

const BrandStory = () => {
    return (
        <div className="brand-story-wrap">
            <div className="brand-story-header">
                <h1> BRAND </h1>
            </div>
            <div className="brand-story-btn">
                <ul className="brand-story-ul">
                    <li><Link to="/brandstory/story" className="main-menu-link">BRAND STORY</Link></li>
                    <li><Link to="/brandstory/contact" className="main-menu-link">CONTACT US</Link></li>
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
