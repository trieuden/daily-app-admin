import { CiLock } from "react-icons/ci";
const Control2 = () => {
    return (
        <div>
            <div className="bg-[#e0e0e0] flex flex-col items-center justify-center h-28 w-28 rounded-full cursor-pointer hover:bg-gray-400 hover:text-white">
                <CiLock className="text-xl"/>
                <span className="text-xs font-semibold">System Lock</span>
            </div>
        </div>
    );
};
export default Control2;
