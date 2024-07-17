import React from "react";
import AdvertisingSlide from "./AdvertisingSlide";
import EventBox from "./EventBox";
import NewItem from "./NewItem";
import ShoppingCart from "./ShoppingCart";
import VideoDisplay from "./VideoDisplay";
import ReviewDisplay from "./ReviewDisplay";

const MainContent = () => {
    return (
        <div className="main-content">
            {/* <AdvertisingSlide></AdvertisingSlide>
            <EventBox></EventBox> */}
            {/* <NewItem></NewItem> */}
            {/* <ShoppingCart></ShoppingCart> */}
            {/* <VideoDisplay></VideoDisplay>                 */}
            <ReviewDisplay></ReviewDisplay>
        </div>
    )
}

export default MainContent;