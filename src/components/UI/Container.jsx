import React from "react";
import arrowLogo from "../../assets/logos/arrow.png";
import searchLogo from "../../assets/logos/search.png";
import sortLogo from "../../assets/logos/Sort.png";
import downloadLogo from "../../assets/logos/download.png";

function Container() {
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
        <div className="w-full flex p-3 flex-col items-end shadow-[0px_2px_6px_0px_rgba(26, 24, 30, 0.04)]">
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
        </div>
      </div>
    </div>
  );
}

export default Container;
