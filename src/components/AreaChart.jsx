import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './AreaChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChart = () => {
  const teams = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6', 'Team 7', 'Team 8', 'Team 9', 'Team 10', 'Team 11', 'Team 12'];
  const points = [52, 56, 59, 66, 68, 58, 58, 76, 82, 87, 87,87];

const data = {
  labels: teams,
  datasets: [
    {
      label: 'Points',
      data: points,
      fill: true,
      backgroundColor: function(context) {
        const chart = context.chart;
        const {ctx, chartArea} = chart;
        
        if (!chartArea) {
          return null;
        }
        
       const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
       gradient.addColorStop(0, 'rgba(255, 215, 0, 0.01)');
       gradient.addColorStop(1, 'rgba(255, 215, 0, 0.3)');
        
        return gradient;
      },
      borderColor: 'rgba(255, 193, 7, 1)',
      borderWidth: 2.5,
      pointBackgroundColor: 'rgba(255, 193, 7, 1)',
      pointRadius: 5,
      pointHoverRadius: 6,
      tension: 0.25
    }
  ]
};

  const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Points Earned By Each Team This Month',
      font: {
        size: 20,
        weight: 'bold'
      },
        padding: {
        top: 10,    
        bottom: 30,
      },
      color: '#000' ,
      align: 'start'
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      grid: {
        color: 'orange',
        drawBorder: false, 
        lineWidth: 0.1,
      },
      ticks: {
        display: false 
      }
    },
    x: {
      grid: {
        display: false 
        
      }
    }
  }
};
  return (
    <div className="area-chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaChart;