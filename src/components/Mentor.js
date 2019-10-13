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
            Product: [],
            showProducts: 9,
            isLoading: false
        }
    }

    componentDidMount() {
        this.products();
    }

    products() {

        console.log("sdsss==>" + JSON.stringify(data));

        this.setState({
            Product: data,
            filter: {
                technology: null,
                country: null
            }
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

    setFilter = e => {
        const { name, value } = e.target;
        this.setState(state => {
            const newState = {...state}
            newState.filter[name] = value;
            return newState;
        }, this.filter);
    }

    filter = () => {
        const {technology, country} = this.state.filter;
        let Product = null
        if(technology) {
            Product = data.filter(mentor => {
                const lowerCased = mentor.technology.split(',').map(t => t.trim().toLowerCase());
                return lowerCased.includes(technology);
            });
        }

        if(country) {
            Product = Product.filter(mentor => mentor.country.toLowerCase() === country.toLowerCase());
        }

        this.setState({
            Product
        });
    }

    render() {
        const { isLoading } = this.state
        return (
            <div className="main thememain-white">
                <div className="container content-main">
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <Filter data={ data } setFilter = { this.setFilter } />
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                {this.state.Product.map((data) => {
                                    return <MentorList key={data.id} data={data} />
                                })}
                            </div>
                        </div>
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
