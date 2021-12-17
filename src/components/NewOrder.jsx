import DivBlockComponent from "./DivBlockComponent";
import AddOrder from "./AddOrder";
import { useState, useReducer } from "react";
import { ACTIONS } from "../App";

const NewOrder = (props) => {
  // console.log(props);
  if (!props) {
    return null;
  }

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const initCount = {
    "El Hefe": 0,
    "Fairy Tale Ale": 0,
    GitHop: 0,
    "Hollaback Lager": 0,
    "Hoppily Ever After": 0,
    Movintime: 0,
    Sleighride: 0,
    Steampunk: 0,
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });
  const [hide, setHide] = useState(true);
  const [amount, setAmount] = useState();
  const [totalPrice, setTotalPrice] = useState(0);

  // const tapsList = props.taps.map((tap, index) => {
  //   return {
  //     id: index,
  //     key: index,
  //     items: [tap.beer],
  //   };
  // });

  const priceList = props.prices.map((beerPrice, index) => {
    return {
      id: index,
      key: index,
      name: beerPrice.name,
      price: beerPrice.price,
      count: beerPrice.orderCount,
    };
  });

  function decrementCount() {
    dispatch({ type: ACTIONS.DECREMENT });
  }
  function incrementCount() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  const beersPictureURL = "./images/beers/";

  const beersList = props.storage.map((beer, index) => {
    let beerNameFull;
    const beerTrim = beer.name.trim();
    const beerSplit = beerTrim.split(" ");
    if (beerSplit.length > 2) {
      const [x, y, z] = beerSplit;
      beerNameFull = x + y + z;
    } else if (beerSplit.length > 1) {
      const [x, y] = beerSplit;
      beerNameFull = x + y;
    } else {
      beerNameFull = beer.name;
    }

    const beerName = beerNameFull.toLowerCase();
    const beerImage = beersPictureURL + beerName + ".png";

    return {
      id: index,
      key: index,
      // lowerName: beerName,
      // count: count,
      items: [
        beer.name,
        <>
          <img
            type="image"
            src={beerImage}
            alt={beerName}
            width="70"
            height="70"
            className={(beerName, " beer")}
          ></img>
        </>,
        <>
          <button
            style={{ width: "30px" }}
            className={"decrement"}
            onClick={() => decrementCount()}
          >
            {"-"}
          </button>
          <form>
            <input
              style={{ width: "30px", textAlign: "center" }}
              type={ACTIONS}
              value={state.count}
              onChange={(e) => setThisValue(e.target.value)}
            />
          </form>

          <button
            style={{ width: "30px" }}
            className={"increment"}
            onClick={() => incrementCount()}
          >
            {"+"}
          </button>
        </>,
        "Price: ",
      ],
    };
  });

  // function decrementCount() {
  //   setCount(count - 1);
  // }
  // function incrementCount() {
  //   setCount(count + 1);
  // }

  const divHeadData = ["Beername", "Image", "Price"];
  const divHeadName = "overview-block__order--head";
  const divBlockName = "overview-block__order--bottom";

  return (
    <>
      <div className="overview-header__order">
        <div
          className="overview-header__order--title"
          onClick={() => setHide(!hide)}
        >
          <p className="overview-header__order--title--name">{"Order here "}</p>
          <p className="overview-header__order--title--arrow">
            {hide ? (
              <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
            )}
          </p>
        </div>
      </div>
      {hide ? (
        <>
          <div className="overview-block__order">
            <DivBlockComponent
              divHeadData={divHeadData}
              divBodyData={beersList}
              divHeadName={divHeadName}
              divBlockName={divBlockName}
            />
          </div>

          <AddOrder />
          <div>{totalPrice}</div>
        </>
      ) : null}
    </>
  );
};

export default NewOrder;
