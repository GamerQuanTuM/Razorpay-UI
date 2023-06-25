import { useState } from "react";
import { BsPaypal, BsFillBellFill } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

type IsActiveState = {
  home: boolean;
  finance: boolean;
  request: boolean;
  deals: boolean;
  wallet: boolean;
  activity: boolean;
  help: boolean;
};

const Navbar = () => {
  const [isActive, setIsActive] = useState<IsActiveState>({
    home: false,
    finance: false,
    request: false,
    deals: false,
    wallet: false,
    activity: false,
    help: false,
  });

  const navigate = useNavigate();

  const handleClick = (button: keyof IsActiveState) => {
    const updatedState: IsActiveState = Object.keys(isActive).reduce(
      (acc, key) => {
        acc[key as keyof IsActiveState] = key === button ? true : false;
        return acc;
      },
      {} as IsActiveState
    );
    setIsActive(updatedState);

    let path = "/";
    if (button !== "home") {
      path = `/${button}`;
    }

    navigate(path);
  };

  return (
    <nav className="h-[10%] w-screen bg-blue-900 px-52">
      <div className="h-full w-full flex justify-between">
        {/* <!-- Navigation and Logo --> */}
        <div className="flex items-center gap-10 cursor-pointer w-full">
          <BsPaypal className="h-5 w-5" color="white" />

          <div className="flex items-center gap-12 text-white w-full">
            <div
              onClick={() => handleClick("home")}
              className={`${
                isActive.home
                  ? "bg-blue-500/40 px-2 py-1 rounded-3xl"
                  : "bg-blue-900 px-2 py-1 rounded-3xl"
              }`}
            >
              Home
            </div>
            <div
              onClick={() => handleClick("finance")}
              className={`${
                isActive.finance
                  ? "bg-blue-500/40 px-2 py-1 rounded-3xl"
                  : "bg-blue-900 px-2 py-1 rounded-3xl"
              }`}
            >
              Finances
            </div>
            <div
              onClick={() => handleClick("request")}
              className={`${
                isActive.request
                  ? "bg-blue-500/40 px-2 py-1 rounded-3xl"
                  : "bg-blue-900 px-2 py-1 rounded-3xl"
              }`}
            >
              Send And Request
            </div>
            <div
              onClick={() => handleClick("deals")}
              className={`${
                isActive.deals
                  ? "bg-blue-500/40 px-2 py-1 rounded-3xl"
                  : "bg-blue-900 px-2 py-1 rounded-3xl"
              }`}
            >
              Deals
            </div>
            <div
              onClick={() => handleClick("wallet")}
              className={`${
                isActive.wallet
                  ? "bg-blue-500/40 px-2 py-1 rounded-3xl"
                  : "bg-blue-900 px-2 py-1 rounded-3xl"
              }`}
            >
              Wallet
            </div>
            <div
              onClick={() => handleClick("activity")}
              className={`${
                isActive.activity
                  ? "bg-blue-500/40 px-2 py-1 rounded-3xl"
                  : "bg-blue-900 px-2 py-1 rounded-3xl"
              }`}
            >
              Activity
            </div>
            <div
              onClick={() => handleClick("help")}
              className={`${
                isActive.help
                  ? "bg-blue-500/40 px-2 py-1 rounded-3xl"
                  : "bg-blue-900 px-2 py-1 rounded-3xl"
              }`}
            >
              Help
            </div>
          </div>
        </div>
        {/* <!-- Log In/ Log Out --> */}
        <div className="flex gap-6 items-center cursor-pointer">
          <BsFillBellFill className="h-5 w-5" color="white" />
          <CiSettings className="h-5 w-5" color="white" />
          <div className="text-white text-base">LOGOUT</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
