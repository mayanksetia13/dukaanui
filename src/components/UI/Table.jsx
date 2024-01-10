// total - 150
// 19

const Table = ({ data, currentPage, itemsPerPage }) => {
  const indexLastItem = itemsPerPage * currentPage;
  const indexFirstItem = indexLastItem - itemsPerPage;
  return (
    <table className="w-full">
      <tbody>
        {data.slice(indexFirstItem, indexLastItem).map((row) => (
          <tr
            className="flex py-3.5 px-3 items-center gap-10 border-b hover:bg-gray-50"
            key={row.id}
          >
            <td className="flex flex-col justify-center items-start flex-[1_0_0]">
              <span className="text-[#146eb4] text-base font-medium">
                {row.orderID.toUpperCase()}
              </span>
            </td>
            <td className="flex flex-col justify-center items-start flex-[1_0_0]">
              <span className="text-[#1a181e] text-base font-normal">
                {row.orderDate}
              </span>
            </td>
            <td className="flex flex-col justify-center items-end flex-[1_0_0]">
              <span className="text-[#1a181e] text-base font-normal">
                {`₹${row.orderAmount}`}
              </span>
            </td>
            <td className="flex flex-col justify-center items-end flex-[1_0_0]">
              <span className="text-[#1a181e] text-base font-normal">
                {`₹${row.transactionFees}`}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
