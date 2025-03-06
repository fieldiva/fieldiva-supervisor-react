import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardGraph = () => {
  // Sample data for charts
  const chartData = [
    {
      labels: ["Category A", "Category B", "Category C", "Category D"],
      data: [40, 30, 20, 10],
    },
    {
      labels: ["Category X", "Category Y", "Category Z"],
      data: [50, 25, 25],
    },
    {
      labels: ["Type 1", "Type 2", "Type 3"],
      data: [60, 30, 10],
    },
  ];

  return (
    <div className="pt-[100px]">
      {/* Header Section */}
      <div className="py-6 rounded-lg">
        <h1 className="text-2xl font-semibold">Welcome back, Olivia</h1>
        <p className="text-gray-500 text-[14px] pt-2">Track, manage and forecast your customers and orders.</p>
      </div>

      {/* Project Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {chartData.map((chart, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Project name</h2>
            <p className="text-gray-500">subheading</p>
            <div className="flex justify-between items-center mt-4">
              <div className="w-28 h-28">
                <Pie
                  data={{
                    labels: chart.labels,
                    datasets: [
                      {
                        data: chart.data,
                        backgroundColor: ["#4F46E5", "#6366F1", "#A5B4FC", "#C7D2FE"],
                        hoverOffset: 4,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { display: false },
                    },
                  }}
                />
              </div>
              <div>
                <p className="text-gray-500">Total count</p>
                <p className="text-lg font-semibold text-[#0052CC]">8000</p>
                <p className="text-gray-500 mt-2">Map category {index % 2 === 0 ? "1" : "2"}</p>
                <p className="text-lg font-semibold text-[#0052CC]">
                  {index % 2 === 0 ? "300" : "100"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DashboardGraph