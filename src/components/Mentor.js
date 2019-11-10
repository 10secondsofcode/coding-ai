import React, { Component } from "react";
// import Header from "./components/Header";
import { data, getProduct } from "../response/response";
import MentorList from "../components/MentorList";
import Filter from "../components/Filter";

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.updateProduct = this.updateProduct.bind(this);

    this.state = {
      Product: [],
      showProducts: 12,
      isLoading: false
    };
  }

  componentDidMount() {
    getProduct({
      startIndex: 0,
      getCount: this.state.showProducts,
      filter: null
    }, this.updateProduct);
    
    this.products();
  }

  get productCount() {
    return this.state.Product.length;
  }

  updateProduct(err, data) {
    this.setState({
      Product: this.state.Product.concat(data),
      filter: {
        technology: null,
        country: null
      }
    });
  }

  products() {
    // console.log("sdsss==>" + JSON.stringify(data));

    const arr = data.map(mentor =>
      mentor.technology.split(",").map(t => t.trim().toLowerCase())
    );
    const technologies = [...new Set([].concat.apply([], arr))];
    const countries = [...new Set(data.map(mentor => mentor.country))];

    if (technologies.length && countries.length) {
      this.setState({
        filter: {
          technology: technologies[0],
          country: countries[0]
        }
      });
    }

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
    this.setState({ isLoading: true });
    getProduct({
      startIndex: this.productCount,
      getCount: this.state.showProducts,
      filter: null
    }, (err, data) => {
      this.updateProduct(err, data);
      this.setState({
        isLoading: false
      });
    });
  };

  getSearchedProducts() {
    const { search } = this.props;
    const { showProducts } = this.state;
    const productList = search
      ? this.state.Product.filter(
        data => data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
      : this.state.Product;
    return productList.slice(0, showProducts);
  }

  setFilter = e => {
    const { name, value } = e.target;
    this.setState(state => {
      const newState = { ...state };
      newState.filter[name] = value;
      return newState;
    }, this.filter);
  };

  filter = () => {
    const { technology, country } = this.state.filter;
    let Product = null;
    if (technology) {
      Product = data.filter(mentor => {
        const lowerCased = mentor.technology
          .split(",")
          .map(t => t.trim().toLowerCase());
        return lowerCased.includes(technology);
      });
    }

    if (country) {
      Product = Product.filter(
        mentor => mentor.country.toLowerCase() === country.toLowerCase()
      );
    }

    this.setState({
      Product
    });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="main thememain-white">
        <div className="container content-main">
          <br />
          <div className="row">
            <div className="col-md-3">
              <Filter data={data} setFilter={this.setFilter} />
            </div>
            <div className="col-md-9">
              <div className="row">
                {this.state.Product.map(data => {
                  
                  return <MentorList key={data.id} data={data} />;
                })}
              </div>
            </div>
          </div>
          <div className="loadMore">
            <button onClick={this.loadMore.bind(this)}>
              {isLoading ? "Loading" : "Load More"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Mentor;
