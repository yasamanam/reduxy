import "./assets/sass/main.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Gallary from "./containers/Gallary";
import Header from "./containers/Header";
import { ModalProvider } from "./context/modalContext";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/gallary" exact component={Gallary} />
            <Route path="/product/:productId" exact component={ProductDetail} />
            <Route>404 Not Found</Route>
          </Switch>
        </Router>
      </ModalProvider>
    </div>
  );
}

export default App;
