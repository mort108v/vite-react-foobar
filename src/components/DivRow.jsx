import React from "react";

const DivRow = ({ data }) => {
  return (
    <div className="__data--row">
      {data.map((item, index) => {
        return (
          <div className={"__data--row-" + index} key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default DivRow;
