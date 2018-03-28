import React from "react"
import Product from "./product.js"
const productsJson = require("./../products.json")

console.log("Products: (Remove this line in app.js!)", productsJson)


class App extends React.Component {
  
  render() {
    return (
      <div className="App" >

        {productsJson.products.map((product) => {
          return <Product
          key={product.id}
          name={product.name}
          price={product.price}
          type={product.type}
          size={product.size}
          numberInPack={product.numberInPack}
          deliveryTime={product.deliveryTime}
          image={product.image}
          substance={product.substance}/>

        }
      )}
      </div>
    )
  }

}

export default App
