
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

const Statistics = () => {
    const data = [10, 20, 15, 30, 25, 40, 35];

    return (
        <div className="h-64 w-[510px] bg-[#e0e0e0] rounded-3xl border-4 border-[#e0e0e0] p-4">
            <h3 className="text-lg font-semibold mb-4">Statistics</h3>
            <div className="h-40">
                <SparkLineChart
                    data={data}
                    width={480}
                    height={150}
                    lineProps={{ stroke: "#4caf50", strokeWidth: 2 }}
                    markerProps={{ r: 4, fill: "#4caf50" }}
                />
            </div>
        </div>
    );
};

export default Statistics;