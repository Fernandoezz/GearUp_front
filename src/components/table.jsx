import React from "react";

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-gray-500 text-center">No data available</p>;
  }

 
  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header) => (
              <th key={header} className="py-2 px-4 text-left border-b">
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              {headers.map((header) => (
                <td key={header} className="py-2 px-4 border-b">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
