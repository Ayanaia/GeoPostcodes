import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import dataExplorerImg from "../../assets/data_explorer.svg";
import mapExplorerImg from "../../assets/map_explorer.webp";
import downloadCenterImg from "../../assets/dowload_center.svg";
import knowledgeBaseImg from "../../assets/kb.svg";
import backgroundGlobe from "../../assets/main_background.webp";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <main className="landing-page__content">
        <h1>Welcome to GeoPostcodes' Customer Portal</h1>

        <div className="landing-page__cards">
          <div
            className="card"
            data-name="Data Explorer"
            onClick={() => navigate("/data-explorer")}
          >
            <p>Data Explorer</p>
            <img src={dataExplorerImg} alt="Data Explorer" />
          </div>
          <div className="card" data-name="Map Explorer">
            <p>Map Explorer</p>
            <img src={mapExplorerImg} alt="Map Explorer" />
          </div>
          <div className="card" data-name="Download Center">
            <p>Download Center</p>
            <img src={downloadCenterImg} alt="Download Center" />
          </div>
          <div className="card" data-name="Knowledge Base">
            <p>Knowledge Base</p>
            <img src={knowledgeBaseImg} alt="Knowledge Base" />
          </div>
        </div>
        <img
          src={backgroundGlobe}
          alt="Background Globe"
          className="landing-page__background-globe"
        />
      </main>
    </div>
  );
};

export default LandingPage;
