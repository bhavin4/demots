import React from "react";

type Status = "loading" | "success" | "error";

type Props = {
  CTA: string;
  onClick?: Function;
  varient?: string;
  loading?: "loading" | "success" | "rejected" | Status;
  className?: string;
  gradientStart?: "blueStart" | "orangeStart";
  gradientEnd?: "orangeEnd" | "blueEnd";
  buttonType?: "button" | "submit" | "reset";
};

const ButtonComponent = ({
  CTA,
  onClick = () => {},
  varient = "primary",
  loading = "success",
  gradientStart,
  gradientEnd,
  className = "",
  buttonType = "submit",
}: Props) => {
  return (
    <div className={`w-full h-[44px] rounded-[4px] ${className}`}>
      <button
        type={buttonType}
        onClick={() => onClick()}
        disabled={loading === "loading"}
        className={`h-[44px]  w-full rounded-[4px]  ${
          varient !== "secondary"
            ? `bg-gradient-to-l h-[44px] text-white from-gradientPairs-orangeStart
               from-[-4.22%] to-gradientPairs-orangeEnd to-[120.23%]`
            : "bg-white border h-[44px] text-black"
        }`}
      >
        {loading !== "loading" ? (
          CTA
        ) : (
          <img className="m-auto" src="/images/loader.gif" alt="loader" />
        )}
      </button>
    </div>
  );
};

export default ButtonComponent;
