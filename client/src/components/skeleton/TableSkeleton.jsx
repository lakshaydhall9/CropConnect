import React from "react";

function TableSkeleton({ rows = 10 }) {
  return (
    <div className="relative overflow-x-auto w-full mx-auto rounded-lg shadow-md bg-white">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead>
          <tr>
            <th className="px-6 py-4 bg-gray-200"></th>
            <th className="px-6 py-4 bg-gray-200"></th>
            <th className="px-6 py-4 bg-gray-200"></th>
            <th className="px-6 py-4 bg-gray-200"></th>
          </tr>
        </thead>
        <tbody>
          {Array(rows)
            .fill(0)
            .map((row, index) => (
              <tr
                key={index}
                className="bg-gray-300 animate-pulse border-b border-white"
              >
                <th
                  scope="row"
                  className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap"
                ></th>
                <td className="px-6 py-5"></td>
                <td className="px-6 py-5"></td>
                <td className="px-6 py-5"></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableSkeleton;
