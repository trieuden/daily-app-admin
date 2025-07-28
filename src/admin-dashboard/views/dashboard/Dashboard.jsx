import Control from "./Control";
import Accounts from "./Accounts";
import UserCard from "./UserCard";
import Control2 from "./Control2";
import Statistics from "./Statistics";
import Sessions from "./Sessions";
import YearComparison from "./YearComparison";

const Dashboard = () => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-wrap p-3 gap-4">
                <Control />
                <Accounts />
                <UserCard />
                <Control2 />
                <Statistics />
            </div>
            <div className="w-[660px] p-3 flex flex-wrap gap-4">
                <Sessions />
                <YearComparison />
            </div>
        </div>
    );
};
export default Dashboard;
