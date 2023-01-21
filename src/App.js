import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import router from './router';
import 'antd/dist/reset.css';



const App = () => {
  // return (
  //   <div>
  //     <NavBar/>
  //     <h1>My React App</h1>
  //   </div>
  // );
  return <RouterProvider router={router} />
};

export default App;
