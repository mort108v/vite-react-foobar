// api.randomuser.me?results=5
// For exam end: git clone --mirror
// Run this once a day in screenshot folder!
// $ pageres  https://nifty-snyder-6cd116.netlify.app/index.html 1024x768 1600x900 --delay=5

// $ pageres  https://nifty-snyder-6cd116.netlify.app/index.html 1334x750 750x1334 900x1600   --delay=5

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
import ParallaxComponent from "./components/ParallaxComponent";

const BASE_URL = "https://six-foobar.herokuapp.com";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty(
      "--background-color",
      darkTheme ? "#16152b" : "#CACEFC"
    );
    root?.style.setProperty("--text-color", darkTheme ? "#CACEFC" : "#16152b");
  }, [darkTheme]);

  useEffect(() => {});

  const [allData, setAllData] = useState({
    bar: { name: "", closingTime: [] },
    serving: [{ id: "", startTime: "", order: [] }],
    queue: [{ id: "", startTime: "", order: [] }],
    bartenders: [],
    taps: [],
    storage: [],
    timestamp: "",
  });

  const [momentInTime, setMomentInTime] = useState();

  useEffect(() => {
    setInterval(() => {
      setMomentInTime(myTime);
    }, 1000);
  }, []);

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
        <div className="App-header__btn">
          <button
            className="btn-colorTheme"
            onClick={() => setDarkTheme(!darkTheme)}
          >
            {darkTheme ? (
              <i className="fa fa-sun fa-1x" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-moon fa-1x" aria-hidden="true"></i>
            )}
          </button>
        </div>
        <TimeTick timeRightNow={myTime} closingTime={allData.bar.closingTime} />
      </header>
      <div id="main">
        <div className="overview-header-top">
          <ParallaxComponent />
        </div>
        <div className="overview">
          <div className="overview-header">
            <div className="wrapper">
              <BeingServed
                serving={allData.serving}
                timestamp={allData.timestamp}
                startTime={allData.serving.startTime}
              />
            </div>
          </div>
          <div className="overview-header">
            <div className="wrapper">
              <Bartenders bartenders={allData.bartenders} />
            </div>
          </div>
          <div className="overview-header">
            <div className="wrapper">
              <Taps taps={allData.taps} />
            </div>
          </div>
          <div className="overview-header">
            <div className="wrapper">
              <BeerStorage storage={allData.storage} />
            </div>
          </div>
          <div className="overview-header">
            <div className="wrapper">
              <BeingQueued
                queue={allData.queue}
                timestamp={allData.timestamp}
                startTime={allData.queue.startTime}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="bottom">
        <footer> Copyright 2021 &copy; s1xp4c design</footer>
      </div>
    </div>
  );
};

export default App;
