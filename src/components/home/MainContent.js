import React from "react";
import AdvertisingSlide from "src/components/home/AdvertisingSlide";
import EventBox from "src/components/home/EventBox";
import NewItem from "src/components/home/NewItem";
import VideoDisplay from "src/components/home/VideoDisplay";
import ReviewDisplay from "src/components/home/ReviewDisplay";

const MainContent = () => {
    return (
        <div className="main-content">
            <AdvertisingSlide></AdvertisingSlide>
            <EventBox></EventBox>
            <NewItem  callMenuProg = "main"></NewItem>
            <VideoDisplay></VideoDisplay>                
            <ReviewDisplay></ReviewDisplay>
        </div>
    )
}

export default MainContent;