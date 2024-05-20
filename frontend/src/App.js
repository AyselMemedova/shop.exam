

import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const contextData = {
    data,
    setData,
  };

  const router = createBrowserRouter(ROUTES);
  useEffect(() => {
    axios.get("http://localhost:8080/api/mehsullar").then((res) => {
      setData([...res.data]);
      
    });
  }, []);

  return (
    <div className="App">
      <MainContext.Provider value={contextData}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </div>
  );
}

export default App;
