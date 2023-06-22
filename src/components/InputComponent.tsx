type Props = {
  name: string;
  register: any;
  errorname: string | undefined;
  inputRef: string;
  value: string;
  className?: string;
  inputClassName?: string;
  label?: string;
  placeholder?: string;
};

function InputComponent({
  label = "",
  name,
  register,
  errorname,
  inputRef,
  value,
  className = "",
  inputClassName = "",
  placeholder = "",
}: Props) {
  return (
    <div className={`${className}`}>
      <div
        className={`h-[50px]  w-full rounded-[12px] justify-end flex  relative border border-[#B8B8B8] `}
      >
        <input
          name={name}
          {...register(inputRef)}
          className={`w-full h-full peer bg-[#fafafa] rounded-[10px] outline-none px-3 pt-2 animate-none ${inputClassName}`}
          placeholder={placeholder}
        />

        <label
          className="absolute left-4 -top-2 bg-gradient-to-b text-xs font-medium  from-[#ffffff] from-[-4.22%] to-[#Fafafa] to-[120.23%] px-2 "
          htmlFor={"userName"}
        >
          {label}
        </label>
      </div>
      {errorname && (
        <span className="text-red-500 text-sm px-2 text-left">{errorname}</span>
      )}
    </div>
  );
}

export default InputComponent;
