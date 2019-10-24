import React from "react";

const capitalize = word => {

  if (typeof word === "string") {
    return String(word[0]).toUpperCase() + String(word.slice(1));
  }
};

const Filter = ({ data, setFilter }) => {
  const arr = data.map(mentor =>
    mentor.technology.split(",").map(t => t.trim().toLowerCase())
  );

  const technologies = [...new Set([].concat.apply([], arr))]
    // remove technologies with empty string
    .filter(tech => tech.length > 0);

  const countries = [...new Set(data.map(mentor => mentor.country))];

  return (
    <div className="row col-md-12">
      <h3 className="nav-link">Filter by</h3>
      <div className="col-md-12">
        <p>Technology</p>
        <select
          className="form-control dropdown"
          name="technology"
          onChange={setFilter}
        >
          {technologies.map((tec, i) => (
            <option key={i} value={tec} className="dropdown-item">
              {capitalize(tec)}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-12">
      <p>Country</p>
        <select
          className="form-control dropdown"
          name="country"
          onChange={setFilter}
        >
          {countries.map((country, i) => (
            <option key={i}>{country}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
