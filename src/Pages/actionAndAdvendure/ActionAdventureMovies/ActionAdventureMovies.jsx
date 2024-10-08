import React, { useEffect, useState } from "react";
import "./recommendedMovies.css";
import { useApi } from "../../../APIContext";
import { useNavigate } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import WatchCards from "../../../components/WatchCards/WatchCards";

const ActionAdventureMovies = () => {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();
  const { setApi } = useApi();

  const bearerToken = localStorage.getItem("bearer_token");

  const projectId = "nyarmrqdfqx0";
  const actionAdventureMovieURL = `https://academics.newtonschool.co/api/v1/ott/show?filter={"$and":[{"keywords":"action"},{"type":"movie"},{"keywords":"adventure"}]}`;

  useEffect(() => {
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(actionAdventureMovieURL, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((exdata) => {
        const allData = exdata.data;
        setMyData(allData);
      });
  }, [projectId, bearerToken]);

  const handleSeeMoreClick = () => {
    setApi(actionAdventureMovieURL);
    navigate("/CompleteShowList/Action And Adventure");
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
          <span
            className="prime-text-heading prime-show"
            style={{ marginRight: "8px" }}
          >
            Prime
          </span>

          <span className="card-indv-heading">Action and adventure movies</span>
          <span className="seeMore" onClick={handleSeeMoreClick}>
            See More
            <MdKeyboardArrowRight
              className="seeMoreIcon"
              style={{ fontSize: "40px" }}
            />
          </span>
        </h2>
      </div>

      <div className="carousel-main" style={{ display: "flex" }}>
        <WatchCards actualData={myData} projectId={projectId} />
      </div>
    </>
  );
};

export default ActionAdventureMovies;
