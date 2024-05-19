import { useRoutes } from "react-router-dom";
import router from "./routes";
import Navbar from "./Components/Navbar/Navbar";
import RightSection from "./Components/RightSection/RightSection";
import "./assets/css/base/base.css";

function App() {
  const myRoutes = useRoutes(router);
  return (
    <>
      <div>
        <Navbar />
        <div className="main-page">
          <RightSection />
          {myRoutes}
        </div>
      </div>
    </>
  );
}

export default App;
