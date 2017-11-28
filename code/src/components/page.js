import React from "react"
import Product from "./product"
const productsJson = require("./../products.json")

class Page extends React.Component {

  render() {
    return (

      <div className="productPage">

        {productsJson.products.map((item) => {
          return <Product prodName={item.name}
            prodPrice={item.price}
            prodType={item.type}
            prodSize={item.size}
            prodNumberInPack={item.numberInPack}
            prodDeliveryTime={item.deliveryTime}
            prodImage={item.image}
            prodSubstance={item.substance}/>
        })}

      </div>
    )
  }

}

export default Page
