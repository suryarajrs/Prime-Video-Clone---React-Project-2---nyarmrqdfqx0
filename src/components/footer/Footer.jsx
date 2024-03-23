import React, { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
  const noShow = window.location.pathname.includes("TVShow");


  if (noShow) {
    return null;
  }
  return (
    <>
      

      <div className="footer-containerr noFooter" style={{ padding: "24px" }}>
        <div className="footer-img">
          <img
            src="/Prime-Video-footer.png"
            alt="Prime Video Footer"
            width={102}
            height={32}
          />
        </div>

        <ul className="footer-ul">
          <li className="footer-li footer-links">
            <a href="#">Terms and Privacy Notes</a>
          </li>
          <li className="footer-li footer-links">
            <a href="#">Send us Feedback</a>
          </li>
          <li className="footer-li footer-links">
            <a href="#">Help</a>
          </li>
        </ul>
        <br />
          <div className="footer-li">
            <p >
              @1996-2023, created by
              <span style={{ color: "grey" }}> Amazon.com, Inc. or its affiliates</span>
            </p>
          </div>
      </div>
    </>
  );
};

export default Footer;
