import React, { useEffect, useState } from "react";
import "../../../Pages/actionAndAdvendure/ActionAdventureMovies/recommendedMovies.css";
import "react-multi-carousel/lib/styles.css";

import { useNavigate } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useApi } from "../../../APIContext";
import WatchCards from "../../WatchCards/WatchCards";

const HorrorMovies = () => {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();
  const { setApi } = useApi();

  const bearerToken = localStorage.getItem("bearer_token");

  const projectId = "nyarmrqdfqx0";
  const horrorURL = `https://academics.newtonschool.co/api/v1/ott/show?filter={"$and": [{"keywords": "horror"}, {"type": "movie"}]}`;

  useEffect(() => {
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(horrorURL, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((exdata) => {
        const allData = exdata.data;
        setMyData(allData);
      });
  }, [projectId, bearerToken]);

  const handleSeeMoreClick = () => {
    setApi(horrorURL);
    navigate("/CompleteShowList/Horror");
  };

  return (
    <>
      <div className="cards-heaading">
        <h2
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="prime-text-heading" style={{ marginRight: "8px" }}>
            Prime
          </span>

          <span className="card-indv-heading">Horror Movies</span>
          <span className="seeMore" onClick={handleSeeMoreClick}>
            See More
            <MdKeyboardArrowRight
              className="seeMoreIcon"
              style={{ fontSize: "40px" }}
            />
          </span>
        </h2>
      </div>
      {/* )} */}

      <div className="carousel-main" style={{ display: "flex" }}>
        <WatchCards
          // key={item._id}
          actualData={myData}
          projectId={projectId}
        />
      </div>
    </>
  );
};

export default HorrorMovies;
