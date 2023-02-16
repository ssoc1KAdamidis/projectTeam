import React from "react";
import StatsCard from "./StatsCard";
import useStats from "../api/useStats";
import { Spin } from "antd";

const StatsList = ({ url, resource }) => {
  const { stats, isLoading } = useStats({
    url: `${url}`,
    resource: `${resource}`,
  });

  return (
    <div className="stats-card-container container-fluid">
      {isLoading ? (
        <Spin />
      ) : (
        stats.map(({ title, amount }) => (
          <div className="stats-card" key={title}>
            <StatsCard title={title} amount={amount} />
          </div>
        ))
      )}
    </div>
  );
};

export default StatsList;