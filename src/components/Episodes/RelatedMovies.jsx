import React from "react";
import MysteryAndThriller from "../mysteryThrillerMain/MysteryAndThriller";


const RelatedMovies = () => {
  const heading = true;
  return (
    <>
      <MysteryAndThriller heading={heading} />
      <div className="emptypadding" style={{ paddingTop: "180px" }}></div>
    </>
  );
};

export default RelatedMovies;
