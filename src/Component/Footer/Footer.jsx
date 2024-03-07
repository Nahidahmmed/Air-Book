import { SlLocationPin } from "react-icons/sl";
import logo from "../../assets/LOGO white.png";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col bg-[#326bc2] text-white">
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 grid-cols-2 items-start justify-around gap-8 md:flex-row md:gap-0 md:items-center xl:max-w-screen-xl lg:max-w-screen-xl md:max-w-screen-xl w-[90%] mx-auto pt-5">
          <nav className="text-lg xl:mt-0 lg:mt-0 md:mt-0 mt-10">
            <ul>
              <li>
                <p className="text-2xl font-semibold">Address</p>
              </li>
              <li>
                <p className="mt-3">House- 75 Ka, Main</p>
                <p className="">Rd, Dhaka 1216</p>
              </li>
              <li>
                <p className="flex items-center">
                  <SlLocationPin className="mr-2" /> View On Maps
                </p>
              </li>
            </ul>
          </nav>
          <nav className="text-lg mt-9 mx-auto">
            <ul className="space-y-2">
              <li>
                <a className="text-2xl font-semibold">About Us</a>
              </li>
              <li>
                <a className="cursor-pointer hover:underline font-medium">Stories</a>
              </li>
              <li>
                <a className="cursor-pointer hover:underline font-medium">Blog</a>
              </li>
              <li>
                <a className="cursor-pointer hover:underline font-medium">Airlines</a>
              </li>
              <li>
                <a className="cursor-pointer hover:underline font-medium">Testimonials</a>
              </li>
            </ul>
          </nav>
          <nav className="text-lg mx-auto">
            <ul className="space-y-2">
              <li>
                <a className="text-2xl font-semibold">Join Us</a>
              </li>
              <li>
                <a className="cursor-pointer hover:underline font-medium">
                  Terms Of Setvice
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:underline font-medium">Privacy Policy</a>
              </li>
              <li>
                <a className="cursor-pointer hover:underline font-medium">Support</a>
              </li>
            </ul>
          </nav>
          <nav className="text-lg ml-auto">
            <ul className="">
              <li>
                <a className="text-2xl font-semibold">Contact</a>
              </li>
              <li>
                <p className="cursor-pointer mt-2 hover:underline">
                  +880 1234567890
                </p>
              </li>
              <li>
                <p className="cursor-pointer hover:underline">
                  +880 1234567890
                </p>
              </li>
              <li>
                <p className="cursor-pointer hover:underline">
                  +880 1234567890
                </p>
              </li>
              <li>
                <p className="cursor-pointer hover:underline">
                  Info@Airbook.com
                </p>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bg-[#326bc2] text-white grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3  xl:max-w-screen-xl lg:max-w-screen-xl md:max-w-screen-xl w-[90%] mx-auto py-5 border-t-2 mt-16 border-[#e9e8e88e]">
          <aside className=" mx-auto">
            <img src={logo} alt="" />
          </aside>
          <p className=" py-5 text-center text-sm xl:mx-0 lg:mx-0 md:mx-0 mx-auto">
            &copy; Copyright AIRBOOK
          </p>
          <div className="flex items-center text-4xl gap-7 mx-auto ">
            <FaYoutube/>
            <FaFacebookF/>
            <FaLinkedinIn/>
          </div>
        </div>
      </footer>
    </div>
  );
}
