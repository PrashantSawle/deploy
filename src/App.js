
import { useActionData } from "react-router-dom";
import { Header } from "./container/header/Header";
import { PublicRoutes } from "./routes/PublicRoutes";
import { LoginPage} from "./screens";
import { useEffect } from "react";
import { Home } from "./screens/home/Home";

function App() {

  useEffect(() => {
    console.log("lllllllllllll",localStorage.getItem("items"))
  })
  return (
      <>
        {/* <Header/> */}
        {/* <PublicRoutes/> */}
        {/* <LoginPage/> */}
        <Home/>
      </> 
  );
}

export default App;
