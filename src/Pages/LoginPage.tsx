import LoginForm from "../Components/Containers/LoginForm";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="box-border h-screen container">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen  justify-between">
        <div className="col-span-1">
          <div className="flex justify-start p-6 ">
            <img src="/images/logo.svg" className="h-[40px]" alt="" />
          </div>
          <LoginForm />
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

export default LoginPage;
