import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: ' January',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'February ',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'March',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'April',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: ' May ',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'June',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
  {
    name: 'July',
    uv: 1234,
    pv: 490,
    amt: 1100,
  },
  {
    name: 'August',
    uv: 409,
    pv: 60,
    amt: 1670,
  },
  {
    name: 'September',
    uv: 981,
    pv: 880,
    amt: 1450,
  },
  {
    name: 'October',
    uv: 984,
    pv: 980,
    amt: 1000,
  },
  {
    name: 'November',
    uv: 1111,
    pv: 1280,
    amt: 1200,
  },
  {
    name: 'December',
    uv: 100,
    pv: 380,
    amt: 100,
  },

];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/composed-chart-in-responsive-container-pkqmy';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
