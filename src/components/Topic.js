import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ match }) => {
  return (
    <div title="topics">
        <h1>{'Topic : ' + match.params.Id}</h1>
        <Link to="/topics">Back</Link>
    </div>
  );
}

export default Topic;
