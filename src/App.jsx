import Sidebar from "./components/Layout/Sidebar";
import "./App.css";
import Main from "./components/Layout/Main";
import { Provider } from "react-redux";
import store from "./utils/store/store";

function App() {
  document.title = "Dukaan";
  return (
    <Provider store={store}>
      <div className="flex min-h-screen">
        <Sidebar />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
