import { MdOutlineDashboard } from "react-icons/md";

const NavButton = ({ button }) => {
    return (
        <div className="m-2 mx-4 rounded-xl">
            <button className="h-full w-full font-semibold pl-6 p-2 text-left flex flex-row items-center hover:text-green-500 ">{button.icon}{button.title}</button>
        </div>
    );
};

const Nav = () => {
    const buttons = [
        { title: "Dasboard", icon: <MdOutlineDashboard className="size-5 mr-3" /> },
        { title: "Account", icon: <MdOutlineDashboard className="size-5 mr-3"/> },
    ];
    return (
        <div className="flex flex-col w-[250px] pt-4 bg-[#333333] text-white mt-2 rounded-tr-2xl">
            {buttons.map((button, index) => {
                return <NavButton key={index} button={button} />;
            })}
        </div>
    );
};

export default Nav;
