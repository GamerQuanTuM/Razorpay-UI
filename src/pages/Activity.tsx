import { ChangeEvent, useState,useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "../components/Card";
import { cardData } from "../constants/CardData";
import useDebounce from "../hooks/useDebounce";

const Activity = () => {
  const [input, setInput] = useState("");
  const [dateIsActive, setDateIsActive] = useState(true);
  const [typeIsActive, setTypeIsActive] = useState(false);
  const [statusIsActive, setStatusIsActive] = useState(false);
  const [filteredCard, setFilteredCard] = useState(cardData);

  const debouncedInput = useDebounce(input, 300);

  const handleDate = () => {
    setDateIsActive(true);
    setTypeIsActive(false);
    setStatusIsActive(false);
  };
  const handleType = () => {
    setDateIsActive(false);
    setTypeIsActive(true);
    setStatusIsActive(false);
  };
  const handleStatus = () => {
    setDateIsActive(false);
    setTypeIsActive(false);
    setStatusIsActive(true);
  };

  useEffect(() => {
    const filteredData = cardData.filter((data) =>
      data.title.toLowerCase().includes(debouncedInput.toLowerCase())
    );
    setFilteredCard(filteredData);
  }, [debouncedInput]);

  

  const filteredCardData = dateIsActive
    ? filteredCard.filter((data) => {
        const currentDate = new Date();
        const cardDate = new Date(data.date);
        const daysDifference =
          (currentDate.getTime() - cardDate.getTime()) / (1000 * 3600 * 24);
        return daysDifference <= 90;
      })
    : filteredCard;

  return (
    <div className="pt-10 px-80 h-[85%] w-full">
      <div className="w-full h-full flex flex-col gap-8">
        {/* Search Box */}

        <div className="flex gap-4 items-center relative">
          <input
            type="text"
            className="flex-1 h-12 border-black border-2 rounded-3xl px-16"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
            placeholder="Search by name or email"
          />
          <AiOutlineSearch className="absolute left-5" size={25} />
          <FiDownload
            color="black"
            className="rounded-full p-2 bg-gray-400/50 cursor-pointer"
            size={40}
          />
        </div>

        {/* Filter Box */}
        <div className="flex flex-col gap-4">
          <h1 className="text-bold text-lg">Filter by</h1>
          <div className="flex gap-5">
            <button
              type="button"
              className={`${
                dateIsActive ? "bg-blue-200" : "border-2 border-slate-400"
              } w-44 h-10 rounded-full  font-bold `}
              onClick={handleDate}
            >
              Date : Last 90 days
            </button>
            <button
              type="button"
              className={`${
                typeIsActive ? "bg-blue-200" : "border-2 border-slate-400"
              } w-20 h-10 rounded-full  font-bold `}
              onClick={handleType}
            >
              Type
            </button>
            <button
              type="button"
              className={`${
                statusIsActive ? "bg-blue-200" : "border-2 border-slate-400"
              } w-20 h-10 rounded-full font-bold `}
              onClick={handleStatus}
            >
              Status
            </button>
          </div>
          <h1 className="text-bold text-lg mt-3">Completed</h1>
          <h3 className="text-bold text-slate-600 mt-1">This week</h3>
        </div>

        {/* Card */}
        <div className="flex flex-col gap-3 h-96 overflow-auto scrollbar">
          {filteredCardData.map((data, i) => (
            <div className="" key={i}>
              <Card data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;

//Search and Filter By Data have been implemented
