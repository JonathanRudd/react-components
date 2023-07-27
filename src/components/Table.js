

function Table({ data }) {
  const renderedRows = data.map((object) => {
    return (
      <tr className="border-b" key={object.name}>
        <td className="p-3">{object.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${object.color}`}></div>
        </td>
        <td className="p-3">{object.score}</td>
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
    </table>
  );
}

export default Table;
