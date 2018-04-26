import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend } from 'recharts';

class App extends Component {
  render() {
    const data = [
      {name: 'Event 1', lastYear: 4000, currentYear: 2400},
      {name: 'Event 2', lastYear: 3000, currentYear: 1398},
      {name: 'Event 3', lastYear: 2000, currentYear: 9800},
      {name: 'Event 4', lastYear: 2780, currentYear: 3908},
      {name: 'Event 5', lastYear: 1890, currentYear: 4800},
      {name: 'Event 6', lastYear: 2390, currentYear: 3800},
      {name: 'event 7', lastYear: 3490, currentYear: 4300},
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AreaChart width={730} height={250} data={data}
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
          <Area type="monotone" dataKey="lastYear" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="currentYear" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </div>
    );
  }
}

export default App;
