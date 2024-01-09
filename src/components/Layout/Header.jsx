import React from "react";
import helpLogo from "../../assets/logos/Help.png";
import searchLogo from "../../assets/logos/search.png";
import menuLogo from "../../assets/logos/Menu.png";
import alertLogo from "../../assets/logos/alert.png";

function Header() {
  return (
    <div className="flex w-full items-center py-3 px-8 gap-4 border-b-[1px] border-[#D9D9D9]">
      <div className="flex items-center gap-4 flex-[1_0_0]">
        <div className="flex items-center gap-4">
          <h3 className="text-[#1A181E] text-xl font-medium">Payments</h3>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5">
            <img src={helpLogo} alt="logo" />
          </div>
          <span className="text-[#4d4d4d] text-xs font-normal">
            How it works
          </span>
        </div>
      </div>
      <div className="flex w-[400px] py-[9px] px-4 items-center gap-2 self-stretch shrink-0 rounded-md bg-[#f2f2f2]">
        <div className="w-4 h-4 shrink-0">
          <img src={searchLogo} alt="logo" />
        </div>
        <input
          type="text"
          className="text-[#808080] bg-[#f2f2f2] text-[15px] font-normal  focus:outline-none focus:ring-0"
          placeholder="Search features, tutorials, etc."
        />
      </div>
      <div className="flex justify-end items-start gap-2 flex-[1_0_0]">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-[#e6e6e6] w-10 h-10 flex justify-center items-center">
            <img src={alertLogo} alt="logo" />
          </div>
          <div className="w-10 h-10">
            <img src={menuLogo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
