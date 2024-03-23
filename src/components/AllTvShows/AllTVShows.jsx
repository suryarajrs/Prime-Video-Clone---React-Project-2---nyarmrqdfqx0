
import React, { createRef, useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FantasyTVShow from "../All category/fantasy/FantasyTVShow";
import ComedyTVShows from "../All category/Comedy/ComedyTVShows";
import DramaTVShow from "../All category/Drama/DramaTVShows";
import ScienceFictionTVShows from "../All category/SciFi/ScienceFictionTVShows";
import RomanceTVShows from "../All category/RomanceMain/RomanceTVShows";
import {Top10} from "../Top10/Top10.jsx"
import Top10Video from "../Top10/Top10Video.jsx";
import Top10HomeImages from "../Top10/Top10HomeImages.jsx"
import ActionAdventureTV from "../../Pages/actionAndAdvendure/actionandadventuremain/ActionAdventureTV.jsx";


const AllTVShows = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 415);
    };
    // Initial check on component mount
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="home">
        <div className="card-indv-heading-main">TV Shows</div>
        {isMobile ? (
          <Top10HomeImages showHeader={false} />
        ) : (
          <Top10Video showHeader={false} />
        )}

        <ActionAdventureTV />
        <FantasyTVShow />
        <ComedyTVShows />
        <DramaTVShow />
        <Top10 />
        <ScienceFictionTVShows />
        <div className="last-card-slider" style={{ height: "475px" }}>
          <RomanceTVShows />
        </div>
      </div>
    </>
  );
};

export default AllTVShows;
