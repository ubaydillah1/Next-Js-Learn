import CakeContainer from "../components/cakeContainer";
import HooksCakeContainer from "../components/HooksCakeContainer";
import store from "../redux/store";
import { Provider } from "react-redux";

const ReduxPage = () => {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
};

export default ReduxPage;
