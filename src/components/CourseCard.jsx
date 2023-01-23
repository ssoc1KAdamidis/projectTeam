import React from 'react'
import { Card, Col, Row } from 'antd';
import moment from 'moment';




const CourseCard = ({title, price, duration, online, dates, imagePath}) => {
   
    const pic = `${imagePath}`
    // console.log(data.title)
    return (
        
        <Row gutter={5}>
        <Col span={12}>
            <Card
        hoverable
        title= {title}
        style={{
            width: "", 
          }} 
        cover={<img alt="example" src={pic} />}>
        <p>Price: <b>{price.normal}</b>&euro; | Online: {online ? <span>&#10003;</span> : <span>&#88;</span> }</p>
        <p>Duration: <b>{duration}</b></p>
        <p>Dates: <b> {moment(dates.start_date).format("DD/MM/YYYY")} - {moment(dates.end_date).format("DD/MM/YYYY")}   </b></p>
      </Card>  
        </Col >
        </Row>
      
     
      
    
    );
  }
  
  export default CourseCard;