import React, { useEffect, useState } from "react";
import CountryList from "../../components/CountryList/Country";
import "./DataExplorer.css";

interface Country {
  name: string;
  continent: string;
  url: string;
  iso: string;
}

const DataExplorer = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/GeoPostcodes/technical-test/main/front-end/data/countries.json"
      );
      const data = await response.json();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  return (
    <div className="data-explorer__container">
      <div className="data-explorer__left">
        <h1>Data Explorer</h1>
        <p>
          <span className="bold">Index</span> of Countries
        </p>
        <CountryList countries={countries} />
      </div>
      <div className="data-explorer__center">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by postcode, locality or region"
          />
        </div>
        <div className="dataset__content">
          <div className="dataset__title">
            <span className="bold">Dataset</span> content
          </div>
          <div className="dataset__item">
            <span>Countries</span>
            <span>193</span>
          </div>
          <div className="dataset__item">
            <span>Administrative Regions</span>
            <span className="number">284,626</span>
          </div>
          <div className="dataset__item">
            <span>Streets</span>
            <span className="number">34,404,491</span>
          </div>
          <div className="dataset__item">
            <span>Businesses & admin.</span>
            <span className="number">1,721,216</span>
          </div>
        </div>
      </div>
      <div className="data-explorer__right"></div>
    </div>
  );
};

export default DataExplorer;
