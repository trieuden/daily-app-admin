import { CiEdit, CiCreditCard1, CiSearch } from "react-icons/ci";
import { FaAnglesRight } from "react-icons/fa6";

const UserCard = () => {
    return (
        <div className="h-64 w-[410px] bg-[#e0e0e0] rounded-3xl border-4 border-[#e0e0e0]">
            <div className="h-1/2 p-4 bg-white rounded-3xl">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <CiCreditCard1 className="text-3xl" />
                        <select name="status" id="status" className="focus:outline-none cursor-pointer font-semibold  border p-1 py-1.5 rounded-full">
                            <option value="">Month</option>
                            <option value="">Week</option>
                            <option value="">Day</option>
                        </select>
                    </div>
                    <div className="flex px-2 flex-row items-center border border-1 rounded-full border-[#e0e0e0]">
                        <div className="h-[27px] w-[27px] items-center justify-center flex border border-gray-300 rounded-full mr-2 text-black cursor-pointer">
                            <CiSearch />
                        </div>
                        <input type="text" placeholder="Searching " className="w-[100px] py-2 pl-2 text-black placeholder-gray-600 text-sm hover:bg-none focus:outline-none" />
                    </div>
                </div>
                <div className="mt-2 flex flex-row items-center justify-between gap-6 p-1 border-[#e0e0e0] cursor-pointer group">
                    <div className="flex-1">
                        <h3 className="text-gray-500 text-sm">Total Income</h3>
                        <h3 className="text-xl font-semibold text-green-600">100</h3>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-gray-500 text-sm">Total Spend</h3>
                        <h3 className="text-xl font-semibold text-green-600">3.000.000đ</h3>
                    </div>
                </div>
            </div>
            <div className="items-center h-1/2 px-4 flex flex-col p-4">
                <div className="flex flex-row items-center w-full justify-between">
                    <div className="flex flex-row items-center gap-2 cursor-pointer">
                        <img src="https://tse3.mm.bing.net/th/id/OIP.uQKl9yfW9Z1Td3M_IsS-eAHaEK?rs=1&pid=ImgDetMain" alt="" className="h-[42px] w-[42px] rounded-full" />
                        <h3 className="font-semibold">Huỳnh Ngọc Triều</h3>
                    </div>
                </div>
                <div className="flex flex-row items-center w-full justify-between">
                    <h3 className="text-sm ml-1 text-gray-500">yantic088@gmail.com</h3>
                    <button className="bg-black text-white px-6 py-1.5 rounded-full">View</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
