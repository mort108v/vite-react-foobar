// api.randomuser.me?results=5

import { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "./App.css";
// import "../SCSS/Main.scss";
import Bartenders from "./components/Bartenders";
import BeingServed from "./components/BeingServed";
import BeingQueued from "./components/BeingQueued";
import TimeTick from "./components/TimeTick";
import Barinfo from "./components/Barinfo";

const BASE_URL = "https://six-foobar.herokuapp.com";

const App = () => {
  const [allData, setAllData] = useState({
    bar: { name: "", closingTime: [] },
    serving: [{ id: "", startTime: "", order: [] }],
    queue: [{ id: "", startTime: "", order: [] }],
    bartenders: [],
  });

  // const [currentTime, setCurrentTime] = useState({
  //   timeRightNow: [],
  // });
  // Use: isItFriday to change closingTime state

  const myTime = moment().format("HH:mm:ss");
  // console.log(myTime);

  useEffect(() => {
    const getAllData = async () => {
      const dataFromServer = await fetchData();
      const data = await dataFromServer;
      setAllData(data);
      // setCurrentTime(myTime);
      // setNewDoingState();
    };

    getAllData();

    // TimeTick();
    setInterval(() => {
      getAllData();
    }, 1000);
  }, []);

  // setInterval(TimeTick, 1000);

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
          barName={allData.bar.name}
          barClosing={allData.bar.closingTime}
        />
        <TimeTick timeRightNow={myTime} closingTime={allData.bar.closingTime} />
      </header>
      <div className="Wrap-info">
        <h3>Bartenders currently working</h3>
        <div className="Bartenders">
          <Bartenders bartenders={allData.bartenders} />
        </div>
        <h3>Being Served</h3>
        <div className="Serving-mode">
          <BeingServed serving={allData.serving} />
        </div>
        <h3>Queued</h3>
        <div className="Queing-mode">
          <BeingQueued queue={allData.queue} />
        </div>
      </div>
    </div>
  );
};

export default App;
