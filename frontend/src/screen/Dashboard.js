import LineChart from '../Chart_JS/LinePlot';
import Card from './Card';
import BarChart from '../Chart_JS/BarChart';
import PieChart from '../Chart_JS/PieChart';
import PolarChart from '../Chart_JS/PolarChart';
import RadarChart from '../Chart_JS/RadarChart';
import DoughnutChart from '../Chart_JS/DoughnutChart';

const Dashboard = ({ filterData }) => {
  return (
    <div className="container mx-auto p-4">
      {filterData.length === 0 ? (
        <Card />
      ) : (
        <div className="mb-4 mt-2">
        <hr />
          <h2 className="text-xl font-bold mb-2 text-center">Polar Area and Doughnut Charts - represents the number of countries, sectors, topics, pestles, sources, etc. involved</h2>
          <hr />
          <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8">
            <PolarChart filterData={filterData} />
            <DoughnutChart filterData={filterData} />
          </div>
          
          <div className="mb-4 mt-8">
          <hr />
            <h2 className="text-xl font-bold mb-2 text-center">Line Chart - represents the number of projects as per pestle</h2>
            <hr />
            <div className="mb-4">
              <LineChart filterData={filterData} />
            </div>
          </div>

          <div className="mb-4">
          <hr />
            <h2 className="text-xl font-bold mb-2 text-center">Bar Chart - represents the number of projects in each sector</h2>
            <hr />
            <div className="mb-4">
              <BarChart filterData={filterData} />
            </div>
          </div>

          <div className="mb-4 mt-8">
          <hr />
            <h2 className="text-xl font-bold mb-2 text-center">Radar and Pie Charts - represents the number of projects as per pestle</h2>
            <hr />
            <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8">
              <RadarChart filterData={filterData} />
              <PieChart filterData={filterData} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
