import React from "react";

const TableRow = ({ data }) => {
  return (
    <tr className="table-row__body">
      {data.map((item) => {
        return <td key={item}>{item}</td>;
      })}
    </tr>
  );
};

export default TableRow;
