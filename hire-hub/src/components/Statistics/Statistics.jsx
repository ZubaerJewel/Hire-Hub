import React from "react";
import {
  Bar,
  CartesianGrid,
  Pie,
  PieChart,
  RadarChart,
  Tooltip,
  XAxis,
} from "recharts";

const Statistics = () => {
  const data = [
    { name: "A1", value: 60 },
    { name: "A2", value: 59 },
    { name: "A3", value: 45 },
    { name: "A4", value: 55 },
    { name: "A5", value: 53 },
    { name: "A6", value: 55 },
    { name: "A7", value: 59 },
    { name: "A8", value: 58 },
  ];

  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Statistics;
