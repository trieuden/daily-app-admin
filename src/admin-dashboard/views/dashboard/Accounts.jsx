import { CiEdit } from "react-icons/ci";
import { FaAnglesRight } from "react-icons/fa6";

const Accounts = () => {
    return (
        <div className="h-64 w-[410px] bg-[#e0e0e0] rounded-3xl border-4 border-[#e0e0e0]">
            <div className="h-44 p-4 bg-white rounded-3xl">
                <div className="flex flex-row items-center justify-between">
                    <h3 className="font-semibold">Accounts</h3>
                    <div className="flex border-2 rounded-full border-[#e0e0e0] p-1 px-2">
                        <select name="status" id="status" className="focus:outline-none cursor-pointer font-semibold">
                            <option value="">All</option>
                            <option value="">Active</option>
                            <option value="">Inactive</option>
                        </select>
                    </div>
                </div>
                <div className="mt-4 flex flex-row items-center justify-between gap-6 p-1 border-[#e0e0e0] cursor-pointer group">
                    <div>
                        <h3 className="text-gray-500 text-sm">Number of accounts</h3>
                        <h3 className="text-3xl font-semibold text-green-600">100</h3>
                    </div>
                    <div className="text-2xl group-hover:animate-bounce-left">
                        <FaAnglesRight />
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between h-[80px] px-4">
                <div className="flex flex-row items-center gap-2 cursor-pointer">
                    <CiEdit />
                    <h3>Edit Card</h3>
                </div>
                <button className="bg-black text-white px-6 py-1.5 rounded-full">All Users</button>
            </div>
        </div>
    );
};

export default Accounts;
