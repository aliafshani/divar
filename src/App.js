import { useRoutes } from "react-router-dom";
import router from "./routes";
import RightSection from "./Components/RightSection/RightSection";
import "./assets/css/base/base.css";
import data from "./Context/Context";
import { useState } from "react";

function App() {
  const myRoutes = useRoutes(router);
  const [showRightSection , setShowRightSection] = useState(false)

  return (
    <>
      <div className="app">
        <data.Provider value={{
          setShowRightSection,
        }}>
          <div className="main">
            <div className="main-logo">
              <RightSection className="rightSection" />
            </div>
            {myRoutes}
          </div>
        </data.Provider>
      </div>
    </>
  );
}

export default App;
