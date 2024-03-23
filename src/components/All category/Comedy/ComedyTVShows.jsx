import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import WatchCards from "../../WatchCards/WatchCards";
import { useApi } from "../../../APIContext";

const ComedyTVShows = () => {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();
  const { setApi } = useApi();

  const bearerToken = localStorage.getItem("bearer_token");

  {console.log("bearer Token"+bearerToken)}

  const projectId = "nyarmrqdfqx0";
  const comedyTV = `https://academics.newtonschool.co/api/v1/ott/show?filter={"$and": [{"keywords": "comedy"}, {"type": "tv show"}]}`;

  useEffect(() => {
    const headers = {
      projectId: projectId,
      Authorization: `Bearer ${bearerToken}`,
    };

    fetch(comedyTV, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((exdata) => {
        const allData = exdata;
        setMyData(exdata.data);
      });
  }, [projectId, bearerToken]);

  const handleSeeMoreClick = () => {
    setApi(comedyTV);
    navigate("/CompleteShowList/Comedy TV Show");
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

          <span className="card-indv-heading">Comedy TV Shows</span>
          <span className="seeMore" onClick={handleSeeMoreClick}>
            See More
            <MdKeyboardArrowRight
              className="seeMoreIcon"
              style={{ fontSize: "40px" }}
            />
          </span>
        </h2>
      </div>

      {/* <div className="carousel-main"> */}
      <div className="content">
        <WatchCards actualData={myData} projectId={projectId} />
      </div>
    </>
  );
};

export default ComedyTVShows;
