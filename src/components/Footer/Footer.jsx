import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-[100px] bg-[#F5F7F2] w-full border-1 border-[#F5F7F2]">
        <div className="my-[60px] max-w-[1400px] mx-auto px-[20px] flex flex-wrap justify-between gap-y-[40px] sm:gap-y-[60px]">

          {/* Logo and Description */}
          <div className="flex flex-col gap-[20px] w-full sm:w-[45%] md:w-[30%] items-center sm:items-start text-center sm:text-left">
            <a href="">
              <h1 className="text-[25px] sm:text-2xl md:text-3xl font-Quicksand font-extrabold text-[#2E7D32]">
                Harvestly
              </h1>
            </a>
            <p className="max-w-[300px] text-[#333]">
              Where Freshness Meets Trust. Harvested with Care, Delivered with Love.
            </p>
            <p className="text-sm text-[#555]">2025 &copy; All Rights Reserved</p>
          </div>

          {/* Company Section */}
          <div className="flex flex-col gap-[20px] w-full sm:w-[45%] md:w-[20%] items-center sm:items-start text-center sm:text-left">
            <h3 className="text-[20px] font-semibold text-[#1B9E45]">
              Company
            </h3>
            <ul className="flex flex-col gap-[15px] cursor-pointer">
              <li className="hover:text-[#23CA55]">About</li>
              <li className="hover:text-[#23CA55]">FAQ's</li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="flex flex-col gap-[20px] w-full sm:w-[45%] md:w-[20%] items-center sm:items-start text-center sm:text-left">
            <h3 className="text-[20px] font-semibold text-[#1B9E45]">
              Support
            </h3>
            <ul className="flex flex-col gap-[15px] cursor-pointer">
              <li className="hover:text-[#23CA55]">Support Center</li>
              <li className="hover:text-[#23CA55]">Feedback</li>
              <li className="hover:text-[#23CA55]">Contact Us</li>
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div className="flex flex-col gap-[20px] w-full sm:w-[45%] md:w-[25%] items-center sm:items-start text-center sm:text-left">
            <h3 className="text-[20px] font-semibold text-[#1B9E45]">
              Stay Connected
            </h3>
            <p className="text-[#333]">
              Your Voice Matters<br />We'd love to hear from you
            </p>
            <div className="flex items-center bg-[#F9FFF9] border border-[#E0E0E0] rounded-[10px] overflow-hidden w-[220px] transition-all duration-300 ease-in-out focus-within:shadow-[0_4px_10px_rgba(35,202,85,0.2)]">
              <input
                className="flex-1 pl-[14px] py-[8px] text-sm text-[#264830] placeholder:text-[#7A7A7A] focus:outline-none focus:border-none"
                type="text"
                placeholder="Enter your thoughts"
              />
              <button className="w-[40px] h-[40px] flex justify-center items-center bg-gradient-to-b from-[#23CA55] to-[#1B9E45] rounded-[10px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
                <img
                  className="w-[16px] h-[16px] invert"
                  src="./ReviewPerson/next-page.png"
                  alt="send"
                />
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;

