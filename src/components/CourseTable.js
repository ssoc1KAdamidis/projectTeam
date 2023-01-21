import React from 'react'
import { Table } from "antd";
import useCourses from '../api/useCourses';

const CourseTable = ({ url, resource, id }) => {
  
    const {courses, isLoading} = useCourses({
        url: `${url}`,
        resource: `${resource}`,
        id: `${id}`
    });

    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          
        },
        {
          title: 'Online',
          dataIndex: 'online',
          
        },
        {
          title: 'Price',
          dataIndex: 'price',
          
        },
        {
            title: 'Date',
            dataIndex: 'dates',
            
          },
          {
            title: 'Action',
            dataIndex: 'action',
            
          }
      ];

    return (
        <Table 
        columns={columns} 
        dataSource={courses} 
        pagination={false} 
        loading={isLoading}
        rowKey={(record) => record.id}
        ></Table> 
       
    );
  };
  
  export default CourseTable;