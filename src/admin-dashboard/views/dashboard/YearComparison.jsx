import { IoIosStats } from "react-icons/io";
const YearComparison = () => {
    return (
        <div className="h-[200px] w-[200px] bg-[#e0e0e0] flex rounded-3xl px-4 pt-4 flex-col bg-grid bg-[length:20px_20px]">
            <IoIosStats className="text-2xl mb-4 bg-white rounded-full p-1 h-8 w-8" />

            <div className="flex items-end gap-6 flex-1">
                <div className="flex flex-col items-center">
                    <div className="text-sm bg-white px-2 py-1 rounded-full cursor-pointer">2022</div>
                    <div className="bg-white w-1 rounded-t h-20"></div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-sm bg-red-400 text-white px-2 py-1 rounded-full cursor-pointer">2023</div>
                    <div className="bg-red-400 w-1 rounded-t h-20"></div>
                </div>
            </div>
        </div>
    );
};
export default YearComparison;
