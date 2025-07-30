import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { captializeFirstLetter } from "../../utils/helper/captializeFirstLetter";

const BarGraph = ({ data, color, xKey, yKey, title = "Graph Title" }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-green-800">{title}</h2>
      </div>
      <BarChart data={data}>
        <defs>
          {/* Gradient fill for the bars */}
          <linearGradient id="gradient-bar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="100%" stopColor={color} stopOpacity={0.3} />
          </linearGradient>
        </defs>
        {/* Background Grid */}
        <CartesianGrid strokeDasharray="3 3" stroke="#cccccc" />
        
        {/* X-Axis with tick formatting */}
        <XAxis
          dataKey={xKey}
          axisLine={{ stroke: color, strokeWidth: 2 }}
          tick={{ fill: color, fontSize: "12px" }}
          tickFormatter={(tick) => captializeFirstLetter(tick)}
        />
        
        {/* Y-Axis with custom formatting */}
        <YAxis
          axisLine={{ stroke: color, strokeWidth: 2 }}
          tick={{ fill: color, fontSize: "12px" }}
          tickFormatter={(tick) => `₹${tick}`}  // Displaying Indian Rupee for price data
        />
        
        {/* Tooltips to display more info */}
        <Tooltip
          contentStyle={{
            backgroundColor: "#f4f4f4",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "14px",
            color: "#4A7C5C",
          }}
          formatter={(value) => [value, `₹${value}`]} // Showing price in ₹ format
        />
        
        {/* Bar chart with gradient color */}
        <Bar
          dataKey={yKey}
          fill="url(#gradient-bar)"
          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
