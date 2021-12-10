import React from "react";

const TableRow = ({ data }) => {
  return (
    <tr className="table-body__row">
      {data.map((item, index) => {
        return <td key={index}>{item}</td>;
      })}
    </tr>
  );
};

export default TableRow;
