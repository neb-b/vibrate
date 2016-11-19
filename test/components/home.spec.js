import React from "react"
import ReactDOM from "react-dom"
import Home from "../../src/components/home"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Home />, div)
})
