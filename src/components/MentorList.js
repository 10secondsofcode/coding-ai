import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heart from "./Heart";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

class MentorList extends Component {
  render() {
    const { data } = this.props;
    const techs = data.technology.split(",").filter(tech => tech.length !== 0);

    return (
      <div className="col-sm-4 ">
        <div className="card">
          <Link
            to={{ pathname: "/MentorList", state: { id: data } }}
            className="card-link"
          >
            <div className="text-center">
              <img
                className="img-thumbnail img-fluid rounded-circle thumbnail"
                src={data.image}
                alt={data.name}
              />{" "}
            </div>

            <div className="content-card">
              <h3>{this.props.data.name}</h3>
              {techs.map((tech, i) => (
                <div key={i} className="tags">
                  <span>{tech}</span>
                </div>
              ))}
              <div className="bottom-info">
                {}
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
