import React from "react";
import DivRow from "./DivRow";
import DivHeadItem from "./DivHeadItem";

// table component
const DivBlockComponent = ({
  divHeadData,
  divBodyData,
  divBlockName,
  divHeadName,
}) => {
  return (
    <>
      <div className={divHeadName}>
        {divHeadData.map((divHead, index) => {
          return <DivHeadItem key={index} item={divHead} />;
        })}
      </div>
      <div className={divBlockName}>
        {divBodyData.map((item) => {
          return <DivRow key={item.id} data={item.items} />;
        })}
      </div>
    </>
  );
};

export default DivBlockComponent;
