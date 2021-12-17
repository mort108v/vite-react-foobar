import DivBlockComponent from "./DivBlockComponent";
import { useState, useReducer } from "react";
import { ACTIONS } from "../App";

const NewOrder = (props, { onAdd }) => {
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
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [cartet, setCartet] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return null;
    }
    onAdd({ text, price, cartet });
    setText("");
    setPrice("");
    setCartet(false);
  };

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

  // const priceList = props.prices.map((beerPrice, index) => {
  //   return {
  //     // name: beerPrice.name,
  //     price: beerPrice.name.price,
  //   };
  // });

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
    const name = beer.name;
    const amount = state.count;
    return {
      id: index,
      key: index,

      items: [
        <>
          <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
              <label
                type="text"
                value={name}
                onChange={(e) => setText(e.target.value)}
              >
                {beer.name}
              </label>
            </div>
            <img
              type="image"
              src={beerImage}
              alt={beerName}
              width="70"
              height="70"
              className={(beerName, " beer")}
            ></img>
            <button
              style={{ width: "30px" }}
              className={"decrement"}
              onClick={() => decrementCount()}
            >
              {"-"}
            </button>
            <div className="form-control">
              <label>{"Amount: "}</label>
              <input
                style={{ width: "30px", textAlign: "center" }}
                type={ACTIONS}
                value={amount}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button
              style={{ width: "30px" }}
              className={"increment"}
              onClick={() => incrementCount()}
            >
              {"+"}
            </button>
            <div>{totalPrice}</div>
            <input
              className="btn btn-block"
              type="submit"
              value="Submit order"
            />
          </form>
        </>,
        // <>{("Price: ", priceList.price)}</>,
      ],
    };
  });

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
        </>
      ) : null}
    </>
  );
};

export default NewOrder;
