import { Fragment } from "react/jsx-runtime";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <AppRoutes />
    </Fragment>
  );
}

export default App;
