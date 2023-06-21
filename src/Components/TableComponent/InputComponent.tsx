import React, { useState } from "react";


type Props = {
  label: string;
  name: string;
  register: any;
  errorname: string | undefined;
  inputRef:string
};

function InputComponent({ label, name, register, errorname,inputRef }: Props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="h-[60px]  w-full rounded-[10px] justify-end flex  relative border">
      <input name={name} {...register(inputRef)} className="w-full h-full peer rounded-[10px] outline-none px-3 pt-3 animate-none"/>

      <label
        className={` left-2 absolute transition-transform peer-focus:translate-y-1 peer-focus:scale-90  peer-focus:text-gray-400 ${
          inputValue !== "" ? "translate-y-1 scale-75" : "translate-y-4"
        } `}
        htmlFor={"userName"}
      >
        {label}
      </label>

      {errorname && (
        <span className="text-red-500">{errorname}</span>
      )}
    </div>
  );
}

export default InputComponent;
