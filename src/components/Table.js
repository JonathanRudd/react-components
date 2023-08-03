import { Fragment }from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column, index) => {
    if (column.header) {
      return <Fragment key={`header-${index}`}>{column.header()}</Fragment>;
    }

    return <th key={`header-${index}`}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData, index) => {
    const renderedCells = config.map((column, columnIndex) => {
      return (
        <td className="p-3" key={`cell-${index}-${columnIndex}`}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={`row-${index}-${keyFn(rowData)}`}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
