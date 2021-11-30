import { useState, useEffect } from "react";
import "./App.css";
import Bartenders from "./components/Bartenders";
const BASE_URL = "https://six-foobar.herokuapp.com";

const App = () => {
  const [bartenders, setBartenders] = useState({
    bartenders: [],
  });
  // { name: "", status: "" }
  useEffect(() => {
    const getBartenders = async () => {
      const bartendersFromServer = await fetchData();
      setBartenders(bartendersFromServer);
    };
    getBartenders();
  }, []);

  // Fetch Data
  const fetchData = async () => {
    const res = await fetch(BASE_URL, {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    // console.log("res", res);

    const data = await res.json();
    // console.log("data", data);
    return data;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="Title">Foobar Dashboard</h2>
      </header>
      <div className="Wrap-info">
        <div className="Bartenders">
          <Bartenders allData={bartenders} />
        </div>
      </div>
    </div>
  );
};

export default App;
