import banner from "../../assets/banner.png";
import { FaRegCircle, FaRegCircleDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

function Banner() {
  return (
    <div className="relative">
      <img className="w-full xl:h-[580px] lg:h-[580px] md:h-[530px] h-[800px] object-cover" src={banner} alt="Banner" />
      <div className="absolute text-center xl:top-20 lg:top-20 md:top-20 top-24 left-0 right-0 bottom-0 flex flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-medium text-white xl:mr-[40%] lg:mr-[40%] md:mr-[40%] mr-[0%] mb-5">Welcome To <span className="text-blue-600">AirBook</span></h1>
        <div className="bg-white rounded-xl mb-2 xl:max-w-screen-xl lg:w-[90%] md:w-[95%] w-full xl:px-14 lg:px-14 md:px-5 px-6 xl:py-14 lg:py-14 md:py-14 py-5 ">
          <div className="xl:flex lg:flex md:flex xl:justify-between lg:justify-between md:justify-between mb-5">
            <div className="flex">
              <button className="flex items-center text-xs p-3 rounded-lg my-2 mr-2 bg-[#EEEDEB] hover:bg-gray-200"><FaRegCircle className="text-lg mr-2 text-[#B4B4B8]"/> One Way</button>
              <button className="flex items-center text-xs p-3 rounded-lg m-2 bg-blue-500 text-white font-medium hover:bg-blue-600"><FaRegCircleDot className="text-lg mr-2"/> Round Trip </button>
            </div>
            <div className="flex">
              <button className="flex items-center text-sm p-3 rounded-md xl:m-2 lg:m-2 md:m-2 my-2 mr-2 bg-[#EEF5FF] font-medium text-blue-500 hover:bg-blue-100"> 1 Traveller <IoIosArrowDown className="text-base ml-2"/></button>
              <button className="flex items-center text-sm p-3 rounded-md my-2 ml-2 bg-[#EEF5FF] font-medium text-blue-500 hover:bg-blue-100"> Economy <IoIosArrowDown className="text-base ml-2"/></button>
            </div>
          </div>
          <div className="xl:flex lg:flex md:flex">
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-full">
              {infos.map((info, indx) => (
                <div key={indx}>
                  <div className="flex border-[1px] border-gray-200 items-center rounded-lg hover:bg-gray-100 xl:p-0 lg:p-0 md:p-2">
                    <h1 className="text-xl xl:m-4 lg:m-4 md:m-2 m-4 border-r-[2px] xl:pr-4 lg:pr-4 md:pr-2 pr-4 font-semibold w-16">{info.heading}</h1>
                    <div>
                      <p className="text-base text-start font-medium">{info.title}</p>
                      <p className=" text-xs text-start">{info.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="xl:ml-5 lg:ml-5 md:ml-5 ml-0 bg-yellow-500 rounded-xl xl:w-28 lg:w-28 md:w-28 w-full hover:bg-yellow-600 xl:mt-0 lg:mt-0 md:mt-16 mt-5 xl:h-auto lg:h-auto md:h-20 h-16">
              <IoSearch className="mx-auto text-3xl text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

const infos = [
  {
    heading: "DAC",
    title: "Dhaka",
    text: "Hazat Ahajalal Internatlo",
  },
  {
    heading: "CXB",
    title: "Cox's Bazar",
    text: "Cox's Baxar International",
  },
  {
    heading: "03",
    title: "October",
    text: "Tuesday, 2024",
  },
  {
    heading: "05",
    title: "October",
    text: "Sunday, 2024",
  },
];
