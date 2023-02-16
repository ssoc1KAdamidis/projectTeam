import React from "react";
import { Card } from "antd";

const StatsCard = ({ id, title, amount }) => {
  return (
    <div className="stats-card" key={id}>
      <Card size="small" bordered={false}>
        {title}:
        <div className="stats-amount-container">
          {amount}
        </div>
      </Card>
    </div>
  );
};

export default StatsCard;