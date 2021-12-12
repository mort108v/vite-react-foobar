import DivBlockComponent from "./DivBlockComponent";
import { useState } from "react";

const BeerStorage = (props) => {
  if (!props) {
    return null;
  }

  const [hide, setHide] = useState(false);

  const divHeadData = ["Name", "Kegs left", "Sold out"];
  const divBlockName = "overview-block__storage--bottom";
  const divHeadName = "overview-block__storage--head";

  const storageList = props.storage.map((beerType, index) => {
    return {
      id: index,
      key: index,
      items: [beerType.name, beerType.amount, beerType.status],
    };
  });
  return (
    <>
      <div className="overview-header__storage">
        <div
          className="overview-header__storage--title"
          onClick={() => setHide(!hide)}
        >
          <p className="overview-header__storage--title--name">
            {"Beer storage "}
          </p>
          <p className="overview-header__storage--title--arrow">
            {hide ? (
              <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
            )}
          </p>
        </div>
      </div>
      {hide ? (
        <div className="overview-block__storage">
          <DivBlockComponent
            divHeadData={divHeadData}
            divBodyData={storageList}
            divHeadName={divHeadName}
            divBlockName={divBlockName}
          />
        </div>
      ) : null}
    </>
  );
};

export default BeerStorage;
