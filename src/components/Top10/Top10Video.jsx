import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { BiVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {  InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { MdOutlineTrendingUp } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import { Tooltip } from "antd";
import { videoSources, titleNames } from "../carouselData";

import { Link } from "react-router-dom";

const Top10Video = ({ showHeader }) => {
  const videoRef = useRef([]);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const [isMuted, setIsMuted] = useState(true);
  const projectId = "nyarmrqdfqx0";

  const handleVideoEnded = () => {
    if (currentIndex < videoSources.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.addEventListener("ended", handleVideoEnded);
    }
  }, [currentIndex]);

  const handleSlideChange = (index) => {
    // Pause all videos when manually changing slides
    videoRef.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    setCurrentIndex(index);
  };

  return (
    <>
      {showHeader ? (
        <div className="cards-heaading">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="card-indv-heading">Top 10 in India</span>
            <span className="seeMore">
              <MdOutlineTrendingUp
                className="seeMoreIcon-trending"
                style={{
                  fontSize: "30px",
                  border: "3px solid white",
                  borderRadius: "50%",
                }}
              />
            </span>
          </h2>
        </div>
      ) : (
        <div className="cards-heaading">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
            }}
          ></h2>
        </div>
      )}

      <div className="corousel-container">
        <Carousel
          showThumbs={false}
          autoplay
          infiniteLoop
          interval={5000}
          selectedItem={currentIndex}
          ref={carouselRef}
          dot={true}
          renderIndicator={false}
        >
          {videoSources.map((source, index) => (
            <>
              <div className="corousel-container-left-right" key={index}>
                <div className="carousel-height">
                  <span className="home-main-text">New Episode Friday</span>
                  <picture className="home-corousel-pic">
                    <h2 className="series-name" style={{ color: "white" }}>
                      {titleNames[index]}
                    </h2>

                    <div
      
                    >
                      <div className="prime-btn-UA">
                        <span className="blue-tick">
                          <img
                            className="blue-tick-img"
                            src="/prime-blue-tick.png"
                            alt="prime-blue-tick"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                        <span
                          className="prime-text"
                          style={{ color: "white", margin: "10px 0" }}
                        >
                          Included with Prime
                        </span>
                        <span className="UA-container">U/A 16+</span>
                      </div>

                      <div
                      
                      >
                       
                        <div className="watchlist-details-container">
                          <Link
                            to={`/TVShow/64cffee700bad552e8dcd509`}
                            onClick={()=>{   if (!isloggedIn) {
                              window.location.href = "/login";
                              return;
                            }}}
                            state={{
                              projectId: projectId,
                            }}
                          >
                            <BsPlayFill
                              className="carousel-play-btn"
                              style={{
                                fontSize: "65px",
                              }}
                              
                            />
                          </Link>

                          <span className="play-text">Play</span>

                         
                          <div>
                            <button className="watchlist-btn">
                              <Tooltip
                                title="Details"
                                placement="bottom"
                                arrow={false}
                                style={{ paddingTop: "10px" }}
                              >
                                

                                <InfoCircleOutlined
                                  className="watchlist-icon-img"
                                  onClick={() => {
                                    navigate(
                                      "/watchDetails/64cffee700bad552e8dcd5fe"
                                    );
                                  }}
                                />
                              </Tooltip>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </picture>
                </div>
                <div className="top-10-video-container">
                  <div className="video-banner-main" key={index}>
                    <video
                      className="home-banner-video "
                      autoPlay
                      muted={isMuted}
                      ref={videoRef}
                      onEnded={handleVideoEnded}
                    >
                      <source src={source} type="video/mp4" />
                    </video>
                    {isMuted ? (
                      <BiVolumeMute
                        className="volume-btn mute"
                        onClick={() => {
                          setIsMuted(false);
                        }}
                      />
                    ) : (
                      <GoUnmute
                        className="volume-btn unmute"
                        onClick={() => {
                          setIsMuted(true);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Top10Video;
