import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend, BarChart, Bar} from 'recharts';
import * as Chartjs from 'react-chartjs-2';

const Line = Chartjs.Line;
const BarChartsjs = Chartjs.Bar;

class App extends Component {
  render() {
    const data = [
      {name: 'Event 1', 'Last Year': 4000, 'Current Year': 2400},
      {name: 'Event 2', 'Last Year': 3000, 'Current Year': 1398},
      {name: 'Event 3', 'Last Year': 2000, 'Current Year': 9800},
      {name: 'Event 4', 'Last Year': 2780, 'Current Year': 3908},
      {name: 'Event 5', 'Last Year': 1890, 'Current Year': 4800},
      {name: 'Event 6', 'Last Year': 2390, 'Current Year': 3800},
      {name: 'event 7', 'Last Year': 3490, 'Current Year': 4300},
    ];

    const chartData = {
        labels: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6', 'Event 7'],
        datasets: [
          {
            label:'Last Year',
            data: [
              4000,
              3000,
              2000,
              2780,
              1890,
              2390,
              3490
            ],
            backgroundColor: [
              'rgb(136, 132, 216, 0.6)',
              'rgb(136, 132, 216, 0.6)',
              'rgb(136, 132, 216, 0.6)',
              'rgb(136, 132, 216, 0.6)',
              'rgb(136, 132, 216, 0.6)',
              'rgb(136, 132, 216, 0.6)',
              'rgb(136, 132, 216, 0.6)'
            ]
          },
          {
            label:'Current Year',
            data: [
              2400,
              1398,
              9800,
              3908,
              4800,
              3800,
              4300
            ],
            backgroundColor: [
              'rgb(130, 202, 157, 0.6)',
              'rgb(130, 202, 157, 0.6)',
              'rgb(130, 202, 157, 0.6)',
              'rgb(130, 202, 157, 0.6)',
              'rgb(130, 202, 157, 0.6)',
              'rgb(130, 202, 157, 0.6)',
              'rgb(130, 202, 157, 0.6)'
            ]
          }
        ]
      };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <h1>reCharts</h1>
        <AreaChart width={1520} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="Last Year" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="Current Year" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
        <Line
          data={chartData}
          height={55}
          options={{
            title: {
              display: true,
              text: 'React-Chartjs',
              fontSize: 25
            }
          }}
        />
        <h1>ReCharts Bar</h1>
        <BarChart width={1520} height={300} data={data} margin={{top: 5, right: 30, left: 5, bottom: 5}}>
         <CartesianGrid strokeDasharray="3 3"/>
         <XAxis dataKey="name"/>
         <YAxis/>
         <Tooltip/>
         <Legend />
         <Bar dataKey="Last Year" fill="#8884d8" />
         <Bar dataKey="Current Year" fill="#82ca9d" />
        </BarChart>

        <BarChartsjs
          data={chartData}
          height={55}
          options={{
            title: {
              display: true,
              text: 'React-Chartjs Bar',
              fontSize: 25
            }
          }}
        />
      </div>
    );
  }
}

export default App;
