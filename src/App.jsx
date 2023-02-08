import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "antd/dist/reset.css";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;