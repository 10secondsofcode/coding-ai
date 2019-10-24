import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heart from "./Heart";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

class MentorList extends Component {
  render() {
    return (
      <div className="col-sm-4 ">
        <div className="card">
          <Link
            to={{ pathname: "/MentorList", state: { id: this.props.data } }}
            className="card-link"
          >
            <div className="text-center">
              <img
                className="img-thumbnail img-fluid rounded-circle thumbnail"
                src={this.props.data.image}
                alt={this.props.data.name}
              />{" "}
            </div>

            <div className="content-card">
              <h3>{this.props.data.name}</h3>
              <p className="tags">{this.props.data.technology}</p>
              <div className="bottom-info">
                <p>{this.props.data.country}</p>
                <Heart {...this.props.data} />
              </div>
            </div>
          </Link>

          <div className="social-media">
            <a
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="http://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default MentorList;
