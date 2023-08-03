
import Table from "./Table";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import useSort from "../hooks/use-sort";

function SortableTable(props) {

  const { config, data } = props;
  const {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
  } = useSort(data, config);


  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });



  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoTriangleUp className="" />
        <GoTriangleDown className="" />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoTriangleUp className="" />
        <GoTriangleDown className="" />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoTriangleUp className="" />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoTriangleDown className="" />
      </div>
    );
  }
}

export default SortableTable;
