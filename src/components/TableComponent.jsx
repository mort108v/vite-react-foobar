import React from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHeadItem";

// table component
const TableComponent = ({ theadData, tbodyData, tableName, theadName }) => {
  return (
    <table className={tableName}>
      <thead className={theadName}>
        <tr>
          {theadData.map((thead) => {
            return <TableHeadItem key={thead} item={thead} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => {
          return <TableRow key={item.id} data={item.items} />;
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
