import React, { Component } from 'react'
import Header from '../header/header';
import Axios from 'axios';

const initialStates = {
  "kidsProducts": []
}

export default class displayKidsProducts extends Component {
  constructor(props) {
    super(props);
    this.navigateToAddNormalitempage = this.navigateToAddNormalitempage.bind(this);
    this.state = initialStates;
  }

  navigateToAddNormalitempage(e, productID) {
    window.location = `/insertItem/${productID}`;
  }


  componentDidMount() {
    Axios.get('http://localhost:3001/product/getAllKidsProducts')
      .then(response => {
        this.setState({ kidsProducts: response.data.data });
      }).catch(error => {
        alert(error.message);
      })

  }
  render() {
    return (

      <div>
        <Header /><br/>
        <center><h1>KIDS PRODUCTS</h1>
        <div class="alert alert-primary" role="alert" style={{ width: '650px'}}>
        <a href="#" class="alert-link"> FASHIONZ </a> - Kids Basic Product Collections
        </div>
        <hr /><br/></center>

        <div class="row1">
          {this.state.kidsProducts.length > 0 && this.state.kidsProducts.map((item, index) => {
            return (

              <div class="column1">
                <div class="card">
                  <img src={item.productImage} alt="Avatar" style={{ width: '250px', height: '320px' }} />
                  <div class="container"><br />
                    <h4><b>{item.productName}</b></h4>
                    <p style={{ color: "red" }}>{"Rs." + item.productPrice}.00</p>
                    <p style={{ fontSize: "20px" }}>{item.productDiscount + "%"}</p>
                    <i><p style={{ fontSize: "14px", color: "grey" }}>{item.productDescription}</p></i>
                    <button onClick={e => this.navigateToAddNormalitempage(e, item._id)} type="button" class="btn btn-dark">Add To Cart</button>
                  </div><br />
                </div><br /><br />

              </div>

            )
          })}
        </div>

      </div>

    )
  }
}
