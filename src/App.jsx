import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import { client, useConfig, useElementData } from '@sigmacomputing/plugin';

// Initialize the Sigma client
client.config.configureEditorPanel([
  { name: "source", type: "element" },
  { name: "channel_column", type: "column", source: "source" },
  { name: "share_column", type: "column", source: "source" },
  { name: "pt_change_column", type: "column", source: "source" },
]);

function App() {
  const config = useConfig();
  const sigmaData = useElementData(config.source);

  const options = useMemo(() => {
    // 1. Transform Sigma data into Highcharts series format
    const chartData = sigmaData[config.channel_column]?.map((name, i) => ({
      name: name,
      share: sigmaData[config.share_column]?.[i],
      pt_change: sigmaData[config.pt_change_column]?.[i],
      retailer: name,
    })) || [];

    // 2. Return your existing Highcharts configuration with the dynamic data
    return {
      chart: { type: 'pie' },
      title: { text: 'Retailer Sales Distribution' },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            useHTML: true,
            format: '<b>{point.retailer}</b><br/>' +
                    'Share: {point.share:.2f}<br/>%' +
                    'Pt Change: {point.pt_change:.2f}Pt Chg'
          }
        }
      },
      series: [{
        name: 'Distribution',
        colorByPoint: true,
        data: chartData
      }]
    };
  }, [sigmaData, config]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}

export default App;