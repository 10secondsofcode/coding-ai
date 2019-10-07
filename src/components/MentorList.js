import React, { Component } from "react";
import { Link } from 'react-router-dom';

class MentorList extends Component {
    render() {
        return (
            <div className="col-sm-4">
                <Link to={{ pathname: '/MentorList', state: { id: this.props.data } }} className="card">
                    <div className="thumbnail" style={ { backgroundImage: `url(${this.props.data.image})` } } alt="Card cap" />
                    <div className="content-card">
                        <h3>{this.props.data.name}</h3>
                        <p className="tags">{this.props.data.technology}</p>
                        <div className="bottom-info">
                          <p>{this.props.data.country}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
export default MentorList;
