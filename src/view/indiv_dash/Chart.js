import React from 'react';
import ReactDOM from "react-dom";
import { useTheme } from '@material-ui/core/styles';
import {
    LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, AreaChart,
    Area,
    CartesianGrid,
    Tooltip, Text
} from 'recharts';
import Title from './Title';
import {CustomTooltipContent} from "./CustomTooltipContent";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

const data2 = [
    { name: "January", earned: 2000, spent: 2500, lowest: 1990 },
    { name: "February", earned: 2400, spent: 2600, lowest: 2390 },
    { name: "March", earned: 2000, spent: 2100, lowest: 1990 },
    { name: "April", earned: 2780, spent: 2500, lowest: 2490 },
    { name: "May", earned: 2600, spent: 2300, lowest: 2290 },
    { name: "June", earned: 2500, spent: 2700, lowest: 2490 },
    { name: "July", earned: 2600, spent: 2650, lowest: 2590 }
];

const mapConsumptionToChartData = (cons) => (
    {
        date: cons.date,
        produced: cons.produced,
        minn: Math.min(cons.produced, cons.consumed),
        consumed : cons.consumed,
    }
);


const mapConsumptionToChartData2 = (cons) => (
    {
        date: cons.date,
        produced: cons.produced,
        consumed : cons.consumed,

    }
);

const Chart = ({lastUsage}) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Usage history (kwh)</Title>
      <ResponsiveContainer>
          <AreaChart
              width={600}
              height={400}
              data={lastUsage.map(mapConsumptionToChartData)}
              margin={{ top: 6, right: 15, left: 2, bottom: 20 }}
          >
              <XAxis dataKey="date">
              </XAxis>
              <YAxis domain={["dataMin", "dataMax"]}>
              </YAxis>
              <Tooltip content={<CustomTooltipContent />}/>
              <Area
                  type="monotone"
                  dataKey="consumed"
                  strokeWidth="2"
                  stroke="#c90404"
                  fill="#FF9999"
              />

              <Area type="monotone"
                    dataKey="produced"
                    strokeWidth="2"
                    stroke="#009900"
                    fill="#A2FFA2" />

              <Area
                  type="monotone"
                  dataKey="minn"
                  strokeWidth="0"
                  fill="#ffffff"
                  fillOpacity={100}
                  name="delete"
                  dot={false}
              />
              <CartesianGrid strokeDasharray="3 3" />
          </AreaChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default Chart;
