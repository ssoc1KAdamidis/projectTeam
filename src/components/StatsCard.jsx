import React from 'react';
import { Card, Button } from "antd";


const StatsCard = ({ id, title, amount }) => {
  
    return (
        <div className="stats-card">  
        <Card  size="small" bordered={false} key={id}>                     
            {title}: <Button size='small' type="primary" style={{marginRight: "65px", backgroundColor: "#ccc"}}>{amount}</Button>
        </Card>
        </div>                
    );
  };
  
  export default StatsCard;