import "index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import ScrollToTop from "./scrollToTop";
import store from "./store";
import Home from "components/Home/Home";
import Cart from "components/Cart/Cart";
import About from "components/About/About";
import Shop from "components/Shop/Shop";
import Collections from "components/Shop/Collections";
import ItemDetail from "components/Shop/ItemDetail";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";

const App = () => {

    return (
        <Provider store={store}>
            <Router>
                <ScrollToTop />
                <Cart />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/shop" component={Shop} />
                    <Route
                        exact
                        path="/shop/:collection"
                        component={Collections}
                    />
                    <Route
                        exact
                        path="/shop/collection/:name"
                        component={ItemDetail}
                    />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
