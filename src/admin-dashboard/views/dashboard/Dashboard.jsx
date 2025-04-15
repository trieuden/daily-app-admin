import Control from "./Control";
import Accounts from "./Accounts";

const Dashboard = () => {
    return (
        <div className="flex p-3 gap-4">
            <Control />
            <Accounts />
        </div>
    );
}
export default Dashboard;