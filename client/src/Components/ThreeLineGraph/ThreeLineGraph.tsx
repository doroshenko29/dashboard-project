import React, { useContext, useEffect, useState } from 'react'
import { format } from 'date-fns'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import './ThreeLineGraph.sass'

const ThreeLineGraph: React.FC = observer(() => {
  const {storeMetrics, storeGroup} = useContext(Context)
  const data = (storeMetrics.metrics
    .filter((metric) => {
      return metric.caption === storeGroup.activeNode
    }))
  
  return (
    <div className="ThreeLineGraph">
      <Line 
        data= {{
          labels: data.map(el => format(new Date(el?.datetime), 'hh:mm')
          ),
          datasets: [
            {
              label: 'cpu utilization',
              data: data.map(el => {return {
                x: new Date(el?.datetime),
                y:  el?.cpu_utilization
              }}),
              borderWidth: 3,
              borderColor: '#FF0000',
              backgroundColor: '#FF0000', // для легенлы
              fill: false,
              pointHitRadius: 5,
              pointHoverRadius: 5,
              spanGaps: true,
            },
            {
              label: 'memory utilization',
              data: data.map(el => {return {
                x: new Date(el?.datetime),
                y:  el?.memory_utilization
              }}),
              borderWidth: 3,
              borderColor: '#24FF00',
              backgroundColor: '#24FF00', // для легенлы
              fill: false,
              pointHitRadius: 5,
              pointHoverRadius: 5,
              spanGaps: true,
            },
            {
              label: 'disk utilization',
              data: data.map(el => {return {
                x: new Date(el?.datetime),
                y:  el?.disk_utilization
              }}),
              borderWidth: 3,
              borderColor: '#4200FF',
              backgroundColor: '#4200FF', // для легенлы
              fill: false,
              pointHitRadius: 5,
              pointHoverRadius: 5,
              spanGaps: true,
            },            
          ],
        }}
      />
    </div>
  )
})
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default ThreeLineGraph
