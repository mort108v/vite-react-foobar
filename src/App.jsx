// api.randomuser.me?results=5

// For exam end: git clone --mirror

// Run this once a day in screenshot folder!
// $ pageres  https://nifty-snyder-6cd116.netlify.app/index.html 1024x768 1366x768 1600x900 --delay=5

import { useState, useEffect } from "react";
import moment from "moment";
import "./App.css";
// import "../SCSS/Main.scss";
import Bartenders from "./components/Bartenders";
import BeingServed from "./components/BeingServed";
import BeingQueued from "./components/BeingQueued";
import Taps from "./components/Taps";
import BeerStorage from "./components/BeerStorage";
import TimeTick from "./components/TimeTick";
import Barinfo from "./components/Barinfo";
// import splash from "./assets/foobar_splash_1";

const BASE_URL = "https://six-foobar.herokuapp.com";

const App = () => {
  const [allData, setAllData] = useState({
    bar: { name: "", closingTime: [] },
    serving: [{ id: "", startTime: "", order: [] }],
    queue: [{ id: "", startTime: "", order: [] }],
    bartenders: [],
    taps: [],
    storage: [],
  });

  const [momentInTime, setMomentInTime] = useState();

  useEffect(() => {
    setMomentInTime(myTime);
  }, [allData.serving.order, allData.queue.order]);

  const myTime = moment().format("HH:mm:ss");

  useEffect(() => {
    const getAllData = async () => {
      const dataFromServer = await fetchData();
      const data = await dataFromServer;
      setAllData(data);
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
    return data;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Barinfo
          barName={allData.bar.name}
          // barClosing={allData.bar.closingTime}
        />
        <TimeTick timeRightNow={myTime} closingTime={allData.bar.closingTime} />

        {/* <div>
          <img src={splash} alt="bar splash image" />
        </div> */}
      </header>
      <div className="Wrap-info">
        <h3>Bartenders currently working</h3>
        <div className="Bartenders">
          <Bartenders bartenders={allData.bartenders} />
        </div>
        <h3>Being Served</h3>
        <div className="Serving-mode">
          <BeingServed serving={allData.serving} timeRightNow={momentInTime} />
        </div>
        <h3>Queued</h3>
        <div className="Queing-mode">
          <BeingQueued queue={allData.queue} timeRightNow={momentInTime} />
        </div>
        <h3>Taps</h3>
        <div className="Taps-being-used">
          <Taps taps={allData.taps} />
        </div>
        <h3>In Storage</h3>
        <div className="Beer-in-storage">
          <BeerStorage storage={allData.storage} />
        </div>
      </div>
    </div>
  );
};

export default App;
