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
import Burger from "./components/Burger";
// import Nav from "./components/Nav";
import BeingServed from "./components/BeingServed";
import BeingQueued from "./components/BeingQueued";
import Taps from "./components/Taps";
import BeerStorage from "./components/BeerStorage";
import TimeTick from "./components/TimeTick";
import Barinfo from "./components/Barinfo";
import NewOrder from "./components/NewOrder";
// import toggleForm from "./components/toggleForm";
// import NewUser from "./components/NewUser";
import Users from "./components/Users";
// import CollectUserData from "./components/CollectUserData";
import ParallaxComponent from "./components/ParallaxComponent";

const BASE_URL = "https://six-foobar.herokuapp.com";

const App = () => {
  // My Consts
  const [darkTheme, setDarkTheme] = useState(true);
  const myTime = moment().format("HH:mm:ss");
  const [allData, setAllData] = useState({
    bar: { name: "", closingTime: [] },
    serving: [{ id: "", startTime: "", order: [] }],
    queue: [{ id: "", startTime: "", order: [] }],
    bartenders: [],
    taps: [],
    storage: [],
    timestamp: "",
  });
  const [customers, setCustomers] = useState({
    users: [],
  });
  const USERAPI_KEY = "61884d7afc71545b0f5e05ad";
  const USERBASE_URL = "https://users-a042.restdb.io";
  const USERREST_URL = "/rest/gamers";
  const [momentInTime, setMomentInTime] = useState();
  // const [showMenu, setShowMenu] = useState(false);
  // const nav = document.querySelector(".nav");

  // My Functions

  // const handleToggle = () => {
  //   setShowMenu(!showMenu);
  // };

  // My useEffects
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty(
      "--background-color",
      darkTheme ? "#16152b" : "#CACEFC"
    );
    root?.style.setProperty("--text-color", darkTheme ? "#CACEFC" : "#16152b");
  }, [darkTheme]);

  useEffect(() => {
    setInterval(() => {
      setMomentInTime(myTime);
    }, 1000);
  }, []);

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

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      const userData = await usersFromServer;
      setCustomers({ users: userData });
    };
    getUsers();
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
  // Fetch users
  const fetchUsers = async () => {
    const res = await fetch(USERBASE_URL + USERREST_URL, {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": USERAPI_KEY,
      },
    });
    const userData = await res.json();
    return userData;
  };

  // Injecting the App
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
              <h3>
                <i className="fa fa-sun fa-1x" aria-hidden="true"></i>
              </h3>
            ) : (
              <h3>
                <i className="fa fa-moon fa-1x" aria-hidden="true"></i>
              </h3>
            )}
          </button>
        </div>
        <TimeTick timeRightNow={myTime} closingTime={allData.bar.closingTime} />
        <Burger />
        {/* <Nav /> */}
      </header>
      <div id="main" className="">
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
          <div className="overview-header">
            <div className="wrapper">
              <Users users={customers.users} />
            </div>
          </div>
          <div className="overview-header">
            <div className="wrapper">
              <NewOrder storage={allData.storage} taps={allData.taps} />
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
