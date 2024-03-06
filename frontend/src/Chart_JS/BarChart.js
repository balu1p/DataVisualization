import React from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const BarChart = ({ filterData }) => {
    if (!filterData || !filterData.data) {
        console.error('Invalid filterData:', filterData);
        return null; 
      }

    let uniqueSectors = [];
    
    
    filterData.data.forEach((i) => {
        if (!uniqueSectors.includes(i.sector) && i.sector !== "") {
            uniqueSectors.push(i.sector);
        }
    })

    const sectorCount = uniqueSectors.map((item) => {
        return {
            sector: item,
            count: filterData.data.filter((i) => i.sector === item).length
        }
    })
    

    return (
        <div style={{ height:'50vh'}}>
            <Bar
                data={{
                    labels: uniqueSectors.map(e=>e),
                    datasets: [
                        {
                            label: 'Total Projects',
                            data: sectorCount.map(e=>e.count),
                            borderWidth: 1,
                        },
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true,
                        },
                    }
                }}
                height={300}
                
            />
        </div>
    )
}

export default BarChart