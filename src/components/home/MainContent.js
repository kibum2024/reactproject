import React from "react";
import AdvertisingSlide from "./AdvertisingSlide";
import EventBox from "./EventBox";
import NewItem from "./NewItem";
import VideoDisplay from "./VideoDisplay";
import ReviewDisplay from "./ReviewDisplay";

const MainContent = () => {
    return (
        <div className="main-content">
            <AdvertisingSlide></AdvertisingSlide>
            <EventBox></EventBox>
            <NewItem></NewItem>
            <VideoDisplay></VideoDisplay>                
            <ReviewDisplay></ReviewDisplay>
        </div>
    )
}

export default MainContent;