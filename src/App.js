import { useRoutes } from "react-router-dom";
import router from "./routes";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const myRoutes = useRoutes(router)
  return (
    <>
    <Navbar/>
      {myRoutes}
    </>
  );
}

export default App;
