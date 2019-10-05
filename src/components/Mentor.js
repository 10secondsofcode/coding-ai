import React, { Component } from "react";
// import Header from "./components/Header";
import data from "../response/response";

class Mentor extends Component {
    render() {
        console.log('data-->'+data);
        let mentorData = data;
        return (
            <div className="main thememain-white">
                {
                mentorData.map((mentor) =>
                    <div className="container content-main">
                    <div className="row">
                        <div className="col-12">
                        <h3>{mentor.name}</h3>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-sm">
                        <ul>
                            {title.topics.map((topics) =>
                            <li><Link to={topics.url}>{topics.title}</Link></li>
                            )}
                        </ul>
                        </div>
                    </div> */}
                    </div>
                )
                }
            </div>
        );
    }
}
export default Mentor;
