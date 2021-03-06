import "./App.css"
import { Switch, Route } from "react-router-dom"
import HomePage from "./pages/homepage/homepage-component"

const HatsPage = () => (
  <div>
    <h1>Hats For Sale</h1>
    <p>Huge sortiment of hats</p>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  )
}

export default App
