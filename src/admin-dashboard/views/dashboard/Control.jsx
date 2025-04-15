import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight, CiLogout } from "react-icons/ci";
const Control = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleHandler = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <button onClick={toggleHandler} className={`w-14 h-40 flex flex-col items-center rounded-full p-1 cursor-pointer ${isToggled ? "bg-black" : "bg-[#e0e0e0]"}`}>
                <div
                    className={`w-12 flex items-center justify-center h-12 bg-white rounded-full text-2xl shadow-md transform duration-300 ${
                        isToggled ? "translate-y-[103px] rotate-0" : "translate-y-0 rotate-180"
                    }`}
                >
                    {isToggled ? <MdDarkMode /> : <CiLight />}
                </div>
            </button>

            <div className="h-14 w-14 bg-white items-center justify-center flex border border-gray-500 rounded-full mt-2 text-xl cursor-pointer">
                <CiLogout />
            </div>
        </div>
    );
};

export default Control;
