import DivBlockComponent from "./DivBlockComponent";
import { useState } from "react";

const Taps = (props) => {
  if (!props) {
    return null;
  }

  const [hide, setHide] = useState(false);

  const divHeadData = ["ID", "Level", "Capacity", "Beertype", "In use"];
  const divBlockName = "overview-block__taps--bottom";
  const divHeadName = "overview-block__taps--head";
  const tapsList = props.taps.map((tap) => {
    return {
      id: tap.id,
      key: tap.id,
      items: [tap.id + 1, tap.beer, tap.level, tap.capacity, tap.inUse],
    };
  });

  return (
    <>
      <div className="overview-header__taps">
        <div
          className="overview-header__taps--title"
          onClick={() => setHide(!hide)}
        >
          <p className="overview-header__taps--title--name">{"Taps status "}</p>
          <p className="overview-header__taps--title--arrow">
            {hide ? (
              <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
            )}
          </p>
        </div>
      </div>
      {hide ? (
        <div className="overview-block__taps">
          <DivBlockComponent
            divHeadData={divHeadData}
            divBodyData={tapsList}
            divHeadName={divHeadName}
            divBlockName={divBlockName}
          />
        </div>
      ) : null}
    </>
  );
};

export default Taps;
