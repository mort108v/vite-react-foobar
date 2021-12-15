import DivBlockComponent from "./DivBlockComponent";
import { useState, useEffect } from "react";

const NewOrder = (props) => {
  // console.log(props);
  if (!props) {
    return null;
  }
  const [hide, setHide] = useState(false);
  // const [forSale, setForSale] = useState({
  //   beersForsale: [],
  // });
  // const [notForSale, setNotForSale] = useState({
  //   beersNotForSale: [],
  // });

  let totalPrice = "12$";
  const tapsList = props.taps.map((tap, index) => {
    return {
      id: index,
      key: index,
      items: [tap.beer],
    };
  });
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
      items: [
        beer.name,
        <>
          <img
            type="image"
            src={beerImage}
            alt={beerImage}
            width="70"
            height="70"
            className={(beerName, " beer")}
          ></img>
        </>,
        ("Total: ", totalPrice),
      ],
    };
  });

  // useEffect(() => {
  //   setForSale(tapsList);
  //   console.log(tapsList);
  // }, []);

  // useEffect(() => {
  //   setNotForSale(beersList);
  //   console.log(beersList);
  // }, []);

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
          <p className="overview-header__order--title--name">
            {"Beers in stock "}
          </p>
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
        <div className="overview-block__order">
          <DivBlockComponent
            divHeadData={divHeadData}
            divBodyData={beersList}
            divHeadName={divHeadName}
            divBlockName={divBlockName}
          />
        </div>
      ) : null}
    </>
  );
};

export default NewOrder;
