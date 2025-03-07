import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { FaFilter } from "react-icons/fa";

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale
);

export default function TaskCompletion() {
  // Chart Data
  const data = {
    labels: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
    ],
    datasets: [
      {
        label: "Completed",
        data: [0, 1000, 5000, 2000, 800, 6000, 100],
        borderColor: "green",
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
        tension: 0.5,
      },
      {
        label: "Not completed",
        data: [0, 2000, 8000, 3000, 1500, 7000, 200],
        borderColor: "red",
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
        tension: 0.2,
      },
      {
        label: "In Progress",
        data: [0, 500, 3000, 1800, 1200, 4000, 100],
        borderColor: "orange",
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
        tension: 0.1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: {display: false},
        border: {display: false}
      },
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1000 },
        border: {display: false}
      },
    },
  };

  return (
    <div className="pt-[56px]">
      <div className="rounded-lg relative">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          {/* Title and Description */}
          <div>
            <h2 className="text-xl font-semibold">Task Completion</h2>
            <p className="text-gray-500 text-sm max-w-[60%]">
              This chart provides a visual representation of task completion
              trends over different time periods. It helps Admins track overall
              productivity, identify delays, and analyze workload distribution.
            </p>
          </div>

          {/* Sort Button */}
          <button className="flex items-center px-4 py-2 text-sm font-medium bg-[#fff] rounded-lg shadow-sm hover:bg-gray-300 cursor-pointer">
            <img src="assets/sort.svg" alt="sort" />
            Sort
          </button>
        </div>

        {/* Task Info Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#fff] p-[24px]">
          <div>
            <span>Task 2025</span>
            <div className="flex gap-1 flex-wrap">
              <p className="text-lg font-semibold text-blue-600">
                420 out of 5000
              </p>
              <span className="bg-green-200 text-green-700 px-2 py-1 rounded-md text-sm">
                +1.3% Last year
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            <div className="flex items-center px-2 py-[2px] rounded-sm border border-[#AEAEAE] gap-2">
              <span className="w-2 h-2 bg-green-500 inline-block rounded-full"></span>
              <p className="text-sm">Completed</p>
            </div>
            <div className="flex items-center px-2 py-[2px] rounded-sm border border-[#AEAEAE] gap-2">
              <span className="w-2 h-2 bg-red-500 inline-block rounded-full"></span>
              <p className="text-sm">Not Completed</p>
            </div>
            <div className="flex items-center px-2 py-[2px] rounded-sm border border-[#AEAEAE] gap-2">
              <span className="w-2 h-2 bg-yellow-500 inline-block rounded-full"></span>
              <p className="text-sm">In Progress</p>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div
          className="w-full p-[24px] bg-[#fff] rounded-md"
          style={{ height: "400px" }}
        >
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
