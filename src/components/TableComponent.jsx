import React from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHeadItem";

// table component
const TableComponent = ({ theadData, tbodyData, tableName, theadName }) => {
  return (
    <table className={tableName}>
      <thead className={theadName}>
        <tr className="table-head__row">
          {theadData.map((thead, index) => {
            return <TableHeadItem key={index} item={thead} />;
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
