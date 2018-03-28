import React from "react"

class Product extends React.Component {
  render()  {

    return <div className="product-container">

      <h1>  {this.props.name} </h1>
      <img src={this.props.image}/>
      <ul>
        <li>{this.props.type}</li>
        <li>{this.props.substance}</li>
        <li>{this.props.size}</li>
        <li>{this.props.numberInPack}</li>
      </ul>
      <div className="price-button">
        <p> {this.props.price} KR </p>
        <button type="button">KÖP</button>
      </div>
      <div className="delivery-time">Leveranstid {this.props.deliveryTime}
      </div>
    </div>
  }
}

export default Product
