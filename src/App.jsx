// api.randomuser.me?results=5
// For exam end: git clone --mirror
// Run this once a day in screenshot folder!
// $ pageres  https://nifty-snyder-6cd116.netlify.app/index.html 1024x768 1366x768 1600x900 --delay=5

import { useState, useEffect } from "react";
import moment from "moment";
import "../scss/main.scss";
import Bartenders from "./components/Bartenders";
import Social from "./components/Social";
import BeingServed from "./components/BeingServed";
import BeingQueued from "./components/BeingQueued";
import Taps from "./components/Taps";
import BeerStorage from "./components/BeerStorage";
import TimeTick from "./components/TimeTick";
import Barinfo from "./components/Barinfo";

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
  }, [allData.serving.startTime, allData.queue.startTime]);

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
        <Barinfo barName={allData.bar.name} />
        <Social />
        <TimeTick timeRightNow={myTime} closingTime={allData.bar.closingTime} />
      </header>
      <section id="main">
        <section id="overview">
          <div className="overview-header">
            <h3 className="overview-header__title">Bartenders</h3>
          </div>
          <div className="overview-bartenders">
            <Bartenders bartenders={allData.bartenders} />
          </div>
          <div className="Wrap-info">
            <h3>Bartenders currently working</h3>
            <div className="Bartenders"></div>
            <h3>Being Served</h3>
            <div className="Serving-mode">
              <BeingServed
                serving={allData.serving}
                timeRightNow={momentInTime}
              />
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
        </section>
        <section id="bottom">
          <footer>&copy; Copyright 2021 - s1xp4c design</footer>
        </section>
      </section>
    </div>
  );
};

export default App;
