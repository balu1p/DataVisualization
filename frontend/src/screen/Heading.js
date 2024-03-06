import { useState } from "react";
import Dashboard from "./Dashboard";

const Heading = ({ filterData, filterByAny, filterByYear }) => {
  const selectYear = ["2014", "2015", "2016", "2017", "2018", "2019", "2020"];
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await filterByAny(inputVal);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p-4 bg-[#ac90f7] text-white">
        <h3 className="hover:underline cursor-pointer mb-2 md:mb-0">DashBoard</h3>
        <form className="flex flex-col md:flex-row gap-4 md:gap-8 items-center" onSubmit={handleSubmit}>
          <div className="border-b border-white w-full md:w-[500px] text-center mb-2 md:mb-0">
            <input
              type="text"
              onChange={(e) => setInputVal(e.target.value)}
              value={inputVal}
              placeholder="Search anything"
              className="w-full md:w-[500px] outline-none border-none bg-transparent text-white placeholder-white"
            />
          </div>
          <div>
            <button type="submit" className="hover:underline px-4">
              Search
            </button>
          </div>
        </form>
        <div>
          <select
            id="year"
            className="text-white border-none bg-transparent outline-none"
            onChange={(e) => filterByYear(e.target.value)}
          >
            {selectYear.map((data) => (
              <option key={data} className="text-white bg-slate-500" value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Dashboard filterData={filterData} />
    </>
  );
};

export default Heading;
