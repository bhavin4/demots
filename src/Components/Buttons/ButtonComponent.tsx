import React from "react";

type Props = {
  CTA: string;
  onClick: Function;
};

const ButtonComponent = ({ CTA, onClick }: Props) => {
  return (
    <div className="w-full h-[44px] rounded-[4px]">
      <button
        onClick={() => onClick()}
        className="h-[44px] text-white w-full rounded-[4px] bg-gradient-to-l from-[#F58124] from-[-4.22%] to-[#FFC266] to-[120.23%]"
      >
        {CTA}
      </button>
    </div>
  );
};  

export default ButtonComponent;
