import React, { Component } from "react";
import { Link } from "react-router-dom";
import Heart from "./Heart";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import ReactImageFallback from "react-image-fallback";

import loader from '../assets/loader.gif';
import mentorImage from '../assets/mentor-default.svg';

class MentorList extends Component {
  render() {
    const { data } = this.props;
    const techs = data.technology.split(",").filter(tech => tech.length !== 0).sort();

    return (
      <div className="col-sm-4 ">
        <div className="card">
          <Link
            to={{ pathname: `/mentor/profile/${this.props.data.id}`, state: { id: this.props.data } }}
            className="card"
          >
            <div className="text-center">
              <ReactImageFallback
                src={this.props.data.image}
                fallbackImage={mentorImage}
                initialImage={loader}
                alt={this.props.data.name}
                className="img-thumbnail img-fluid rounded-circle thumbnail" />
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
