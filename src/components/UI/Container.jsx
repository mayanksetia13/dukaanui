import { useState } from "react";
import arrowLogo from "../../assets/logos/arrow.png";
import searchLogo from "../../assets/logos/search.png";
import sortLogo from "../../assets/logos/Sort.png";
import downloadLogo from "../../assets/logos/download.png";
import downLogo from "../../assets/logos/Triangle-Icon.png";
import infoLogo from "../../assets/logos/Info.png";
import Table from "./Table";
import prevLogo from "../../assets/logos/prev.png";
import nextLogo from "../../assets/logos/next.png";
import { data } from "../../db/MOCK_DATA";
import { usePagination, DOTS } from "../../hooks/usePagination";

function Container() {
  const itemsPerPage = 10;
  const siblingCount = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginationRange = usePagination({
    currentPage,
    totalPages,
    siblingCount,
    itemsPerPage,
  });

  const handlePageChange = (pageNo) => {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPage(pageNo);
    }
  };

  return (
    <div className="flex flex-col items-start gap-8 w-11/12 mx-auto my-8">
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="flex flex-col items-start gap-5 self-stretch">
          <div className="flex justify-between items-center self-stretch">
            <span className="text-xl font-medium text-[#1A181E]">Overview</span>
            <div className="flex items-center justify-center gap-4 w-[137px] h-9 border-solid border-[1px] border-[#d9d9d9] rounded">
              <span className="text-base font-normal text-[#4d4d4d]">
                Last month
              </span>
              <div className="w-4 h-4">
                <img src={arrowLogo} alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 self-stretch">
          <div className="flex justify-center items-center gap-6 flex-[1_0_0]">
            <div className="flex p-5 flex-col items-start gap-4 flex-[1_0_0]">
              <span className="text-[#4d4d4d] text-base font-normal">
                Online orders
              </span>
              <span className="text-[32px] text-[#1a181e] font-medium">
                231
              </span>
            </div>
          </div>
          <div className="flex p-5 flex-col items-start gap-4 flex-[1_0_0]">
            <div className="flex flex-col items-start gap-4 self-stretch">
              <span className="text-[#4d4d4d] text-base font-normal">
                Amount received
              </span>
              <span className="text-[32px] text-[#1a181e] font-medium">
                ₹23,92,312.19
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 w-full">
        <span className="text-[#1a181e] text-xl font-medium">
          Transactions | This Month
        </span>
        <div className="w-full flex p-3 flex-col items-end gap-3 shadow-[0px_2px_6px_0px_rgba(26, 24, 30, 0.04)]">
          <div className="flex justify-between items-center self-stretch">
            <div className="flex w-[248px] items-start">
              <div className="flex py-2.5 px-4 gap-2 items-center flex-[1_0_0] rounded border-solid border-[1px] border-[#d9d9d9]">
                <div className="w-3.5 h-3.5">
                  <img src={searchLogo} alt="logo" />
                </div>
                <input
                  type="text"
                  className="text-[#999999] font-normal text-sm border-transparent focus:outline-none focus:ring-0"
                  placeholder="Search by order ID"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex justify-end items-center gap-3">
                <div className="flex items-center py-1.5 px-3 gap-1.5 rounded border-solid border-[1px] border-[#d9d9d9]">
                  <span className="text-[#4d4d4d] text-base font-normal">
                    Sort
                  </span>
                  <div className="w-4 h-4">
                    <img src={sortLogo} alt="logo" />
                  </div>
                </div>
                <div className="w-9 h-9 flex items-center justify-center rounded border-solid border-[1px] border-[#d9d9d9]">
                  <img src={downloadLogo} alt="logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full py-2.5 px-3 items-center gap-10 rounded bg-[#f2f2f2]">
            <div className="flex flex-col justify-center items-start flex-[1_0_0]">
              <span className="text-[#4d4d4d] text-base font-medium"></span>
              Order ID
            </div>
            <div className="flex flex-col justify-center items-start flex-[1_0_0]">
              <div className="flex items-center justify-center gap-1">
                <span className="text-[#4d4d4d] text-right text-base font-medium">
                  Order date
                </span>
                <div className="w-3 h-3 flex items-center">
                  <img src={downLogo} alt="logo" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-end flex-[1_0_0]">
              <span className="text-[#4d4d4d] text-right text-base font-medium">
                Order amount
              </span>
            </div>
            <div className="flex flex-col justify-center items-end flex-[1_0_0]">
              <div className="flex items-center justify-center gap-1">
                <span className="text-[#4d4d4d] text-right text-base font-medium">
                  Transaction fees
                </span>
                <div className="w-3 h-3 flex items-center">
                  <img src={infoLogo} alt="logo" />
                </div>
              </div>
            </div>
          </div>
          <Table
            data={data}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
        </div>
        <div className="flex items-center gap-6 mx-auto">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="flex justify-center items-center pl-1.5 pt-1.5 pr-3 pb-1.5  gap-1.5 rounded border-solid border-[1px] border-[#d9d9d9]"
          >
            <img src={prevLogo} alt="logo" />
            <span className="text-[#4d4d4d] text-base font-normal">
              Previous
            </span>
          </button>
          <div className="flex gap-2">
            {paginationRange.map((pageNumber, i) => {
              if (pageNumber === DOTS) {
                return (
                  <li key={i} className="flex">
                    &#8230;
                  </li>
                );
              }
              return (
                <li
                  key={i}
                  className={`flex w-7 h-7 py-0.5 items-center justify-center rounded ${
                    currentPage === pageNumber ? "bg-[#146EB4]" : ""
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  <span
                    className={`text-[#4d4d4d] text-base font-normal ${
                      currentPage === pageNumber ? "text-white" : ""
                    }`}
                  >
                    {pageNumber}
                  </span>
                </li>
              );
            })}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex justify-center items-center pl-3 pt-1.5 pr-1.5 pb-1.5 gap-1.5 rounded border-solid border-[1px] border-[#d9d9d9]"
          >
            <span className="text-[#4d4d4d] text-base font-normal">Next</span>
            <img src={nextLogo} alt="logo" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Container;
