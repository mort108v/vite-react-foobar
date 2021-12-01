// api.randomuser.me?results=5

import { useState, useEffect } from "react";
import "./App.css";
import Bartenders from "./components/Bartenders";
import BeingServed from "./components/BeingServed";
import Barinfo from "./components/Barinfo";
const BASE_URL = "https://six-foobar.herokuapp.com";

const App = () => {
  const [bartenders, setAllBartenders] = useState({
    bartenders: [],
  });
  const [beingServed, setBeingServed] = useState({
    serving: [{ id: "", startTime: "", order: [] }],
  });

  const [barInfo, setbarInfo] = useState({
    bar: { name: "", closingTime: "" },
  });

  useEffect(() => {
    const getAllData = async () => {
      const dataFromServer = await fetchData();
      // console.log(bartenders);
      setAllBartenders(await dataFromServer);
      setbarInfo(await dataFromServer);
      setBeingServed(await dataFromServer);
    };
    getAllData();
    setInterval(() => {
      getAllData();
    }, 1000);
  }, []);

  // Fetch Data
  const fetchData = async () => {
    const res = await fetch(BASE_URL, {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    const data = await res.json();
    // console.log(data.serving[0].id);
    return data;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Barinfo
          barName={barInfo.bar.name}
          barClosing={barInfo.bar.closingTime}
        />
      </header>
      <div className="Wrap-info">
        <h3>Bartenders currently working</h3>
        <div className="Bartenders">
          <Bartenders allData={bartenders} />
        </div>
        <h3>Being Served</h3>
        <div className="Serving-mode">
          <BeingServed onTheServe={beingServed} />
        </div>
      </div>
    </div>
  );
};

export default App;
