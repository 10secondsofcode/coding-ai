import React, { Component } from "react";
// import Header from "./components/Header";
import data from "../response/response";
import {Link} from 'react-router-dom';
import MentorList from "../components/MentorList";
import Filter from '../components/Filter';

class Mentor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Product: []
        }
    }

    componentDidMount() {
        this.products();
    }

    products() {

        console.log("sdsss==>" + JSON.stringify(data));

        this.setState({
            Product: data,
            tech: null,
            country: null
        });

        /*fetch(Data)
         .then(response => {
    console.log("sdsss==>"+JSON.stringify(response));
             return response;
         }).then(data => {
         this.setState({
            Product: data.product_list
         });      
        });*/
    }

    getSearchedProducts() {
        const { search } = this.props;
        return search ? this.state.Product.filter(
            (data) => data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        ) : this.state.Product;
    }

    filter = tech => {
        const Product = data.filter(mentor => {
            const lowerCased = mentor.technology.split(',').map(t => t.trim().toLowerCase());
            return lowerCased.includes(tech);
        });
        this.setState({
            Product
        });
    }

    render() {
        return (
            <div className="main thememain-white">
                <div className="container content-main">
                    <Filter data={ data } filter ={ this.filter } />
                    <br />
                    <div className="row">
                        {this.state.Product.map((data) => {
                            return <MentorList key={data.id} data={data} />
                        })}
                    </div>
                </div>
            </div>

        );
    }
}

export default Mentor;
