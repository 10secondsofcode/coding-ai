import React from 'react';

const Filter =  ({data, filter}) => {

    const arr = data.map(mentor => mentor.technology.split(',').map(t => t.trim().toLowerCase()));
    const technologies = [...new Set([].concat.apply([], arr))];
    const countries = [...new Set(data.map(mentor => mentor.country))];

    const handleTechChange = e => {
        filter({tech: e.target.value})
    }

    const handleCountryChange = e => {
        filter({country: e.target.value})
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <select class="form-control" onChange={handleTechChange}>
                    {technologies.map((tec, i) => <option key={i} value={tec} className="dropdown-item">{tec}</option>)}
                </select>
            </div>
            <div className="col-md-6">
                <select class="form-control" onChange={handleCountryChange}>
                    {countries.map((country, i) => <option key={i}>{country}</option>)}
                </select>
            </div>
        </div>
    )
}

export default Filter;