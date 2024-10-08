import React, { useEffect, useState } from "react";
import "../Pages/actionAndAdvendure/ActionAdventureMovies/recommendedMovies.css";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router";
import { useApi } from "../APIContext";
import WatchCards from "./WatchCards/WatchCards";

const ShortFilms = () => {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();
  const { setApi } = useApi();

  const bearerToken = localStorage.getItem("bearer_token");

  const projectId = "nyarmrqdfqx0";
  const shortFilmsURL = `https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "short film"}`;

  useEffect(() => {
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(shortFilmsURL, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((exdata) => {
        const allData = exdata;
        setMyData(exdata.data);
      });
  }, [projectId, bearerToken]);



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

          <span className="card-indv-heading">Top TV and movies</span>
        </h2>
      </div>

      <div className="carousel-main" style={{ display: "flex" }}>
        <WatchCards actualData={myData} projectId={projectId} />
      </div>
    </>
  );
};

export default ShortFilms;
