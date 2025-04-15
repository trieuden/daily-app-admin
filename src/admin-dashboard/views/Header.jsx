import { FaPlus } from "react-icons/fa6";
import { CiSearch, CiCalendar } from "react-icons/ci";
import { GrLinkNext } from "react-icons/gr";
import { MdOutlineKeyboardVoice } from "react-icons/md";

import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <div className="p-4 bg-[#e0e0e0] text-black shadow-sm ">
            <div className="flex flex-row items-center ">
                <div className="flex flex-row items-center w-[250px] rounded-full">
                    <img src={logo} alt="Daily App Logo" className="h-16 cursor-pointer" />
                    <h3 className="text-md font-semibold">Daily App</h3>
                </div>
                <div className="flex flex-1 flex-row items-center justify-end px-5">
                    <div className="h-[47px] w-[47px] items-center justify-center flex border border-gray-300 rounded-full mr-2 text-black cursor-pointer">
                        <FaPlus />
                    </div>
                    <img src="https://tse3.mm.bing.net/th/id/OIP.uQKl9yfW9Z1Td3M_IsS-eAHaEK?rs=1&pid=ImgDetMain" alt="" className="h-[47px] w-[47px] rounded-full" />
                    <div className="ml-2">
                        <h3 className="text-sm font-semibold">Huỳnh Ngọc Triều</h3>
                        <h3 className="text-xs">Manager</h3>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end pl-8 px-5">
                    <div className="h-[47px] w-[47px] items-center justify-center flex border border-gray-300 rounded-full mr-2 text-black cursor-pointer">
                        <CiSearch />
                    </div>
                    <input type="text" placeholder="Start Searching Here" className="py-2 pl-2 text-black placeholder-gray-600 text-sm bg-[#e0e0e0] hover:bg-none focus:outline-none" />
                </div>
            </div>
            <div className="flex flex-row items-center justify-between mt-14 gap-4">
                <div className="flex flex-row items-center">
                    <div className="h-[80px] w-[80px] items-center justify-center flex border border-gray-300 rounded-full mr-2 text-black cursor-pointer">
                        <h3 className="text-xl font-bold">14</h3>
                    </div>
                    <div className="font-medium pr-6 ml-4 border-r border-gray-400">
                        <h3>Monday,</h3>
                        <h3>December</h3>
                    </div>
                    <button className="flex flex-row items-center justify-center text-xs text-white gap-6 ml-6 h-[47px] w-44 px-4 bg-green-400 rounded-full hover:font-semibold">
                        Show my Tasks <GrLinkNext className="text-lg" />
                    </button>
                    <div className="h-[47px] w-[47px] ml-4 items-center justify-center flex border border-gray-300 rounded-full text-xl mr-2 text-black cursor-pointer">
                        <CiCalendar/>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end mr-20">
                    <div>
                        <h3 className="text-4xl">AI Help ! </h3>
                        <input type="text" placeholder="Just Ask Me Everything ..." className="py-2 text-black placeholder-gray-400 text-xl bg-[#e0e0e0] hover:bg-none focus:outline-none"/>
                    </div>
                    <div className="h-[67px] w-[67px] ml-24 items-center justify-center flex border border-gray-300 bg-white rounded-full text-3xl text-black cursor-pointer">
                        <MdOutlineKeyboardVoice/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
