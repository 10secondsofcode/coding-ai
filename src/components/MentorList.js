import React, { Component } from "react";
import { Link } from 'react-router-dom';

class MentorList extends Component {
    render() {
        return (
            <div className="col-sm-4 productList">
                <Link to={{ pathname: '/MentorList', state: { id: this.props.data } }}>
                    <div className="productItems">
                        <div>
                            {/* <img className="card-img-top"
                            src={`../assets/${this.props.data.image}`} alt="Card cap" /> */}
                            <img className="card-img-top"
                                src={this.props.data.image} alt="Card cap" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{this.props.data.name}</h5>
                            <p>{this.props.data.technology}</p>
                            <p>{this.props.data.country}</p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
export default MentorList;
