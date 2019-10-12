import React, { Component } from "react";
// import Header from "./components/Header";
import data from "../response/response";
import {Link} from 'react-router-dom';
import MentorList from "../components/MentorList";

class Mentor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Product: [],
            showProducts: 10,
            isLoading: false
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

    loadMore = () => {
        this.setState({ isLoading: true})
        setTimeout(() => {
            this.setState((prevState) => ({ isLoading: false, showProducts: prevState.showProducts + 10 }))
        }, 3000)
        clearTimeout()
    }

    getSearchedProducts() {
        const { search } = this.props;
        const { showProducts } = this.state
        const productList = search ? this.state.Product.filter(
            (data) => data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        ) : this.state.Product;
        return productList.slice(0, showProducts)
    }


    render() {
        const { isLoading } = this.state
        return (
            <div className="main thememain-white">
                <div className="container content-main">
                    <br />
                    <div className="row">
                        {this.getSearchedProducts().map((data) => {
                            return <MentorList key={data.id} data={data} />
                        })}
                    </div>
                    <div className="loadMore">
                        <button onClick={this.loadMore.bind(this)}>{isLoading ? "Loading" : "Load More"}</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Mentor;
