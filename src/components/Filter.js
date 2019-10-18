import React from "react";

const capitalize = word => {
  if (typeof word === "string") {
    if (word) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return "Hi";
    }
  }
};

const Filter = ({ data, setFilter }) => {
  const arr = data.map(mentor =>
    mentor.technology.split(",").map(t => t.trim().toLowerCase())
  );
  const technologies = [...new Set([].concat.apply([], arr))];
  const countries = [...new Set(data.map(mentor => mentor.country))];

  return (
    <div className="row col-md-12">
      <h3 className="nav-link">Filters</h3>
      <div className="col-md-12">
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
