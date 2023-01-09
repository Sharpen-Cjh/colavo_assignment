import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import Cart from "../components/cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Cart />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
