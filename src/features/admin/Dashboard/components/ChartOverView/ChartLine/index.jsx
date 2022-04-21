import { Card, CardHeader, CardBody } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ChartLine() {

  const data = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: "Mobile apps",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "#cb0c9f",
        borderWidth: 3,
        backgroundColor: "#cb0c9f",
        fill: true,
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        maxBarThickness: 6

      },
      {
        label: "Websites",
        tension: 0.4,
        borderWidth: 0,
        pointRadius: 0,
        borderColor: "#3A416F",
        borderWidth: 3,
        backgroundColor: "#3A416F",
        fill: true,
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
        maxBarThickness: 6
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          padding: 10,
          color: '#b2b9bf',
          font: {
            size: 11,
            family: "Open Sans",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          color: '#b2b9bf',
          padding: 20,
          font: {
            size: 11,
            family: "Open Sans",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
    },
  }

  return (
    <Card className="z-index-2">
      <CardHeader className="pb-0">
        <h6>Sales overview</h6>
        <p className="text-sm">
          <FontAwesomeIcon icon="arrow-up" className="text-success" />
          <span className="font-weight-bold pl-1">4% more</span> in 2021
        </p>
      </CardHeader>
      <CardBody className="p-3">
        <div className="chart">
          <Line data={data} options={options} height="300"/>
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartLine;