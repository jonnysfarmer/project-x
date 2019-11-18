import React, { PureComponent, useState, useEffect } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const Graph = (props) => {
  // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
  const pete = props.name

  if (!props) {
    console.log(props)
    console.log('loading')
    return <div>Loading</div>
  } else {
    console.log(props)
    const data2 = (data2)=>{
      const dataarray = data2.ingredients.malt.map((ele) =>{
        return (
          {
            name: ele.name,
            Amount: ele.amount.value
          }
        )
      })
      return dataarray
    }
    data2(props.data2)
    



    return (
      <BarChart
        width={500}
        height={300}
        data={data2(props.data2)}
        margin={{
          top: 5, right: 20, left: 10, bottom: 5
        }}
      >

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Amount" fill="#00B1DE" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    )
  }

}

export default Graph
