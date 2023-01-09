import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import Pages from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Pages />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
