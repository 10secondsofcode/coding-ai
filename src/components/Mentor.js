import React, { Component } from "react";
// import Header from "./components/Header";
import data from "../response/response";
import {Link} from 'react-router-dom';
import MentorList from "../components/MentorList";

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
            Product: data
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


    render() {
        return (
            <div className="main thememain-white">
                <div className="container content-main">
                    <br />
                    <div className="row">
                        {this.getSearchedProducts().map((data) => {
                            return <MentorList key={data.id} data={data} />
                        })}
                    </div>
                </div>
            </div>

        );
    }
}

export default Mentor;
