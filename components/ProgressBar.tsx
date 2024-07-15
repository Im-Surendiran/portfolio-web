// components/ProgressBar.js

import React from "react";
type CardProps = {
  label: any;
  percentage: any;
};
const ProgressBar: React.FC<CardProps> = ({ label, percentage }) => {
  return (
    <div className="w-full mb-2">
      <p className="mb-2 text-black">{label}</p>
      <div className="h-4 relative bg-gray-300 rounded-full">
        <div
          className="h-full bg-black rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p>{percentage}%</p>
    </div>
  );
};

export default ProgressBar;
