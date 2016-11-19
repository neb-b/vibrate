import React from "react"
import ReactDOM from "react-dom"
import Events from "../../src/components/events"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Events />, div)
});
