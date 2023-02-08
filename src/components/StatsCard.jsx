import React from "react";
import { Card, Button } from "antd";

const StatsCard = ({ id, title, amount }) => {
  return (
    <div className="stats-card" key={id}>
      <Card size="small" bordered={false}>
        {title}:
        <Button
          size="small"
          type="primary"
          style={{
            color: "white",
            marginRight: "65px",
            backgroundColor: "black",
          }}
        >
          {amount}
        </Button>
      </Card>
    </div>
  );
};

export default StatsCard;