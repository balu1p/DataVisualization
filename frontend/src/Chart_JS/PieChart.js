import React from 'react'
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PieChart = ({filterData}) => {
    let uniquePestle = [];

    filterData.data.forEach((i) => {
        if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
            uniquePestle.push(i.pestle);
        }
    })

    const pestleCount = uniquePestle.map((item) => {
        return {
            pestle: item,
            count: filterData.data.filter((i) => i.pestle === item).length
        }
    })
    
  return (
    <div style={{ height:'50vh', width:'45vw'}}>
            <Pie
                data={{
                    labels: uniquePestle,
                    datasets: [
                        {
                            label: "Projects ",
                            data: pestleCount.map(i=>i.count),
                            borderWidth: 1,
                            hoverOffset: 5,
                        },
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true
                        },
                    }
                }}
                height={300}
            />
        </div>
  )
}

export default PieChart