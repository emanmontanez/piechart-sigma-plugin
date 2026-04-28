import React from 'react';
import Highcharts, { y } from 'highcharts';
import {HighchartsReact} from 'highcharts-react-official';
import {client, useConfig, useElementData}  from '@sigmacomputing/plugin'; 

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
                        'Share: ${point.y}<br/>' +
                        'Pt Chg.: {point.share}%'
            }
        }
    },

  series: [{
    name: 'Share',
    colorByPoint: true,
    data: [
            {  name: 'Amazon',
                y: 7.7,
                share: 7.7, 
                Pt_Chg: 0.7, 
                retailer: 'Amazon' 
            },
            {  name: 'Walmart',
                y: 15.1,
                share: 15.1, 
                Pt_Chg: -1.3, 
                retailer: 'Walmart' 
            },
            { name: 'Target',
                y: 77.2,
                share: 77.2, 
                Pt_Chg: 0.7, 
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