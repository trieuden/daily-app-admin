import { IoTimeOutline } from "react-icons/io5";

const Sessions = () => {
    return (
        <div className="h-[200px] w-[200px] bg-[#e0e0e0] rounded-3xl p-4">
            <IoTimeOutline className="text-2xl mb-4 bg-white rounded-full p-1 h-8 w-8" />
            <div>
                <h3 className="text-lg font-semibold">150.000 visits</h3>
                <h3 className="text-xs font-semibold">30-4-2025</h3>
            </div>
            <div className="grid grid-cols-10 gap-y-1 mt-4 items-center justify-center">
                {Array.from({ length: 30 }, (_, i) => {
                    if (i < 15) 
                        return <div key={i} className="h-3 w-3 bg-orange-500 rounded-full cursor-pointer hover:bg-orange-400"></div>;
                    return <div key={i} className="h-3 w-3 bg-gray-300 rounded-full"></div>;
                })}
            </div>
        </div>
    );
};
export default Sessions;
