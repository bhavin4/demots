import { useEffect, useState } from "react";
import RegestrationForm from "../components/RegestrationForm";

type Props = {};

const RegistrationPage = (props: Props) => {
  const [first, setfirst] = useState("");

  return (
    <div className="box-border h-screen container  bg-secondary">
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen  justify-between">
      <div className="col-span-1">
        <RegestrationForm />
      </div>
      <div className="col-span-1 hidden lg:flex w-full h-screen">
        <img
          className="h-screen  w-full"
          src="/images/background.svg"
          alt=""
        />
      </div>
    </div>
  </div>
  );
};

export default RegistrationPage;
