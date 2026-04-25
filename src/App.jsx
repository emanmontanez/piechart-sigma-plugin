import React from 'react';
import Highcharts from 'highcharts';
import {HighchartsReact} from 'highcharts-react-official';

const options = {
  chart: {
    type: 'pie' // This defines the chart type
  },
  title: {
    text: 'Retailer Sales Distribution Hard Coded Test' // Title of the chart
  },
   plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                useHTML: true, // Allows us to use <br/> for line breaks
                //alignTo: 'plotEdges', // Helps prevent labels from overlapping
                // This string pulls from the keys in your data array
                format: '<b>{point.retailer}</b><br/>' +
                        'Sales: ${point.y}<br/>' +
                        'Share: {point.share}%'
            }
        }
    },

  series: [{
    name: 'Metrics',
    colorByPoint: true,
    data: [
            {  name: 'Amazon',
                y: 5000, 
                share: 45, 
                retailer: 'Amazon' 
            },
            {  name: 'Walmart',
                y: 3000, 
                share: 25, 
                retailer: 'Walmart' 
            },
            { name: 'Target',
                y: 2000, 
                share: 30, 
                retailer: 'Target' 
            }
        ]
    }]
};

function App() {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}

export default App;