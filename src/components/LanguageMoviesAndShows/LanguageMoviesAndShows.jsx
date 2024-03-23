import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./languageMoviesAndShows.css";
import Loader from "../Loader/Loader";
import ComedyTVShows from "../All category/Comedy/ComedyTVShows";
import ScienceFictionTVShows from "../All category/SciFi/ScienceFictionTVShows";
import SciFi from "../All category/SciFi/SciFi";
import HorrorMovies from "../All category/Horror/HorrorMovies";
import MysteryAndThriller from "../mysteryThrillerMain/MysteryAndThriller";
import ActionAdventureMovies from "../../Pages/actionAndAdvendure/ActionAdventureMovies/ActionAdventureMovies";
import DramaMovies from "../All category/Drama/DramaMovies";
import ComedyMovies from "../All category/Comedy/ComedyMovies";
import Documentries from "../All category/DocumentaryMain/Documentries";
import RomanceMovies from "../All category/RomanceMain/RomanceMovies";
import FantasyMovies from "../All category/fantasy/FantasyMovies";

const LanguageMoviesAndShows = () => {
  const language = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="home">
        <div className="language-container">
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="language-banner">
                <img
                  className="lang-banner-img"
                  src="/language-banner.PNG"
                  alt="watch in your language"
                />
                <div className="language-text">
                  <h1 className="watch-in">WATCH IN</h1>
                  <h1 className="watch-in">
                    {language.language.toUpperCase()}
                  </h1>

                  <button className="lang-more-details">More Details</button>
                </div>
              </div>

              {language.language === "English" && (
                <>
                  <ComedyTVShows />
                  <ScienceFictionTVShows />
                </>
              )}
              {language.language === "Hindi" && (
                <>
                  <SciFi />
                  <HorrorMovies />
                </>
              )}
              {language.language === "Kannada" && (
                <>
                  <MysteryAndThriller />
                  <ActionAdventureMovies />
                </>
              )}
              {language.language === "Telugu" && (
                <>
                  <DramaMovies />
                  <ComedyMovies />
                </>
              )}
              {language.language === "Tamil" && (
                <>
                  <Documentries />
                  <MysteryAndThriller />
                </>
              )}
              {language.language === "Punjabi" && (
                <>
                  <ActionAdventureMovies />
                  <RomanceMovies />
                </>
              )}
              {language.language === "Bengali" && (
                <>
                  <RomanceMovies />
                  <FantasyMovies />
                </>
              )}
              {language.language === "Punjabi" && (
                <>
                  <FantasyMovies />
                  <SciFi />
                </>
              )}
              {language.language === "Marathi" && (
                <>
                  <HorrorMovies />
                  <Documentries />
                </>
              )}
              {language.language === "Gujarati" && (
                <>
                  <FantasyMovies />
                  <ComedyMovies />
                </>
              )}
            </>
          )}
        </div>
        <div className="emptypadding" style={{ paddingTop: "180px" }}></div>
      </div>
    </>
  );
};

export default LanguageMoviesAndShows;
