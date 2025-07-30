import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Uncomment if you want to customize the tooltip
// const CustomTooltip = ({ active, payload, yAxisUnit }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
//         <p style={{ color: "#4A7C5C", fontWeight: "bold" }}>{`${payload[0].payload.date} ${payload[0].payload.time}`}</p>
//         <p style={{ color: "#6A8B3F" }}>{payload[0].dataKey}: {payload[0].value} {yAxisUnit}</p>
//       </div>
//     );
//   }
//   return null;
// };

const AreaGraph = ({ lineData, color, xKey, yKey, title = "Graph Title" }) => {
  const gradientId = `gradient-1`;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-green-800">{title}</h2>
      </div>
      <AreaChart data={lineData}>
        <defs>
          {/* Gradient for the area fill */}
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="100%" stopColor={color} stopOpacity={0.1} />
          </linearGradient>
        </defs>
        {/* Cartesian Grid with light gray background */}
        <CartesianGrid strokeDasharray="3 3" stroke="#cccccc" />
        
        {/* X and Y Axes */}
        <XAxis
          dataKey={xKey}
          axisLine={{ stroke: color, strokeWidth: 2 }}
          tick={{ fill: color, fontSize: "12px" }}
        />
        <YAxis
          axisLine={{ stroke: color, strokeWidth: 2 }}
          tick={{ fill: color, fontSize: "12px" }}
          tickFormatter={(tick) => `₹${tick}`} // Format as Indian Rupee
        />

        {/* Optional: Tooltip */}
        {/* <Tooltip content={<CustomTooltip yAxisUnit="Kg" />} cursor={{ stroke: "#8884d8", strokeWidth: 2 }} /> */}

        {/* Area with gradient fill */}
        <Area
          type="monotone"
          dataKey={yKey}
          stroke={color}
          strokeWidth={3}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaGraph;
