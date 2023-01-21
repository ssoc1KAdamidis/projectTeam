import React from 'react';
import StatsCard from './StatsCard';
import useStats from '../api/useStats';
import { Spin } from 'antd';

const StatsList = ({url , resource}) => {
    const {stats, isLoading} = useStats({
        url: `${url}`,
        resource: `${resource}`
    });

    return (
      <div className="stats-card-container">       
            {isLoading ? (
            <Spin />
            ) : (
                stats.map(({ id, title, amount }) => (
              <div className="stats-card">  
                <StatsCard key={id} title={title} amount={amount}/>                     
              </div>   
            )))}     
      </div>
    );
  };
  
  export default StatsList;