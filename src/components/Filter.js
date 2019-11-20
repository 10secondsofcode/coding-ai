import React from 'react';

const capitalize = word => {
  if (typeof word === 'string') {
    return String(word[0]).toUpperCase() + String(word.slice(1));
  }
};

const Filter = ({ data, setFilter, filter }) => {
  const arr = data.map(mentor =>
    mentor.technology.split(',').map(t => t.trim().toLowerCase())
  );

  const technologies = [...new Set([].concat.apply([], arr))]
    // remove technologies with empty string
    .filter(tech => tech.length > 0)
    .sort();

  const countries = [...new Set(data.map(mentor => mentor.country))].sort();

  return (
    <div className='row col-md-12 filter-row sticky-top mt-5'>
      <h3 className='nav-link filter-header mx-auto'>Filter</h3>
      <div className='col-md-12 mt-3'>
        <p className='filter-set'>Technology</p>
        <select
          className='form-control dropdown'
          name='technology'
          onChange={setFilter}
        >
          {technologies.map((tec, i) => (
            <option key={i} value={tec} className='dropdown-item' selected={filter.technology === tec}>
              {capitalize(tec)}
            </option>
          ))}
        </select>
      </div>
      <div className='col-md-12 mt-3'>
        <p className='filter-set'>Country</p>
        <select
          className='form-control dropdown'
          name='country'
          onChange={setFilter}
        >
          {countries.map((country, i) => (
            <option key={i} selected={filter.country === country}>{country}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
