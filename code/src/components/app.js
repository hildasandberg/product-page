import React from "react"
import Page from "./page"
import "../index.css"
const productsJson = require("./../products.json")

class App extends React.Component {

  render() {
    return (

      <div className="App">
        <div className="header">
          <div className="apotek">Hildas Apotek</div>
          <div className="headerHeading">Om Apoteket</div>
          <div className="headerHeading">Hitta apotek </div>
          <div className="headerHeading">Kundservice</div>
          <div className="headerHeading">Logga in</div>
          <button id="headerButton">
            Till Kassan
          </button>
        </div>

        <Page />

      </div>
    )
  }

}

export default App
