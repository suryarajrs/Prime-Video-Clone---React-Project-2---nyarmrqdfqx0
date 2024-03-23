import React, { createRef, useEffect, useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MysteryAndThriller from "../../components/mysteryThrillerMain/MysteryAndThriller";
import SciFi from "../../components/All category/SciFi/SciFi";
import { Top10 } from "../../components/Top10/Top10";
import ComedyMovies from "../../components/All category/Comedy/ComedyMovies";
import HorrorMovies from "../../components/All category/Horror/HorrorMovies";
import ActionAdventureMovies from "../actionAndAdvendure/ActionAdventureMovies/ActionAdventureMovies";
import RomanceMovies from "../../components/All category/RomanceMain/RomanceMovies";
import FantasyMovies from "../../components/All category/fantasy/FantasyMovies";
import Documentries from "../../components/All category/DocumentaryMain/Documentries";
import DramaMovies from "../../components/All category/Drama/DramaMovies";
import Top10Video from "../../components/Top10/Top10Video";
import Top10HomeImages from "../../components/Top10/Top10HomeImages";
import WatchInLanguage from "../../components/Top10/WatchInLanguage";

export default function Home_Corousel() {
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
    <div className="home">
      <div className="card-indv-heading-main">Movies</div>

      {isMobile ? (
        <Top10HomeImages showHeader={false} />
      ) : (
        <Top10Video showHeader={false} />
      )}
      {/* <RecommendedMovies /> */}

      <MysteryAndThriller />
      <SciFi />
      <Top10 />
      <ComedyMovies />
      <HorrorMovies />
      <WatchInLanguage />
      <ActionAdventureMovies />
      <RomanceMovies />
      <FantasyMovies />
      <Documentries />

      <div className="last-card-slider" style={{ height: "475px" }}>
        <DramaMovies />
      </div>
    </div>
  );
}
