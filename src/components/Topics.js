import React from "react";
import { Route, Link } from "react-router-dom";
import Topic from "../components/Topic";

const Topics = ({ match }) => {
    return (
        <div title="topics">
            <h1>Topics Page</h1>
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/rendering1`}>Rendering with React</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components1`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state1`}>Props v. State</Link>
                    </li>
                </ul>
                <Route path={`${match.path}/:topicId`} component={Topic} />
            </div>
        </div>
    );
};

export default Topics;
