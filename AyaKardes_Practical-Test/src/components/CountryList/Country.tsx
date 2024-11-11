import React from "react";
import { Link } from "react-router-dom";
import "./CountryList.css";

interface Country {
  name: string;
  continent: string;
  url: string;
  iso: string;
}

interface CountryListProps {
  countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  // Group countries by continent using `continent` field
  const groupedCountries = countries.reduce((acc, country) => {
    if (!acc[country.continent]) {
      acc[country.continent] = [];
    }
    acc[country.continent].push(country);
    return acc;
  }, {} as Record<string, Country[]>);

  // Sort continents alphabetically
  const sortedGroupedCountries = Object.entries(groupedCountries).sort(
    ([continentA], [continentB]) => continentA.localeCompare(continentB)
  );

  return (
    <div>
      {sortedGroupedCountries.map(([continent, countries]) => (
        <div key={continent} className="continent__section">
          <h2 className="continent__title">{continent}</h2>
          <ul className="country__list">
            {countries.map((country) => (
              <li key={country.url} className="country__item">
                <span className="country__flag">
                  {/* Adjust flag URL based on ISO country code */}
                  <img
                    src={`https://flagcdn.com/24x18/${country.iso.toLowerCase()}.png`}
                    alt={country.name}
                  />
                </span>
                <Link to={`/data-explorer/${country.url}`}>{country.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
