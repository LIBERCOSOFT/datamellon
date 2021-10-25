import React, { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function MyCompositeBarChart({ data }) {
  const [westProfit, setwestProfit] = useState([])
  const [eastProfit, seteastProfit] = useState([])
  const [centralProfit, setcentralProfit] = useState([])
  const [southProfit, setsouthProfit] = useState([])

  useEffect(() => {
    const regionsProfit = {
      east: {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
      },
      west: {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
      },
      central: {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
      },
      south: {
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
      },
    }

    // eslint-disable-next-line array-callback-return
    data.map((datum) => {
      switch (true) {
        case datum['Region'] === 'West':
          if (datum['Order Date'].endsWith(2014)) {
            regionsProfit.east.first += Number(datum['Profit'])
          }
          if (datum['Order Date'].endsWith(2015)) {
            regionsProfit.east.second += Number(datum['Profit'])
          }
          if (datum['Order Date'].endsWith(2016)) {
            regionsProfit.east.third += Number(datum['Profit'])
          }
          if (datum['Order Date'].endsWith(2017)) {
            regionsProfit.east.fourth += Number(datum['Profit'])
          }
          break
        case datum['Region'] === 'East':
          if (datum['Order Date'].endsWith(2014)) {
            regionsProfit.east.first += Number(datum['Profit'])
          }
          if (datum['Order Date'].endsWith(2015)) {
            regionsProfit.east.second += Number(datum['Profit'])
          }
          if (datum['Order Date'].endsWith(2016)) {
            regionsProfit.east.third += Number(datum['Profit'])
          }
          if (datum['Order Date'].endsWith(2017)) {
            regionsProfit.east.fourth += Number(datum['Profit'])
          }
          break
        case datum['Region'] === 'Central':
          if (datum['Order Date'].endsWith(2014)) {
            regionsProfit.central.first += Number(datum['Profit'])
          }
          if (datum['Order Date'].endsWith(2015)) {
            regionsProfit.central.second += Number(datum['Profit'])
          }
          if (datum['Order Date'].endsWith(2016)) {
            regionsProfit.central.third += Number(datum['Profit'])
          }
          if (datum['Order Date'].endsWith(2017)) {
            regionsProfit.central.fourth += Number(datum['Profit'])
          }
          break
        case datum['Region'] === 'South':
          if (datum['Order Date'].endsWith(2014)) {
            regionsProfit.south.first += Number(datum['Profit'])
          }
          if (datum['Order Date'].endsWith(2015)) {
            regionsProfit.south.second += Number(datum['Profit'])
          }
          if (datum['Order Date'].endsWith(2016)) {
            regionsProfit.south.third += Number(datum['Profit'])
          }
          if (datum['Order Date'].endsWith(2017)) {
            regionsProfit.south.fourth += Number(datum['Profit'])
          }
          break
        default:
          return false
      }
    })

    setwestProfit([
      regionsProfit.west.first.toFixed(2),
      regionsProfit.west.second.toFixed(2),
      regionsProfit.west.third.toFixed(2),
      regionsProfit.west.fourth.toFixed(2),
    ])
    seteastProfit([
      regionsProfit.east.first.toFixed(2),
      regionsProfit.east.second.toFixed(2),
      regionsProfit.east.third.toFixed(2),
      regionsProfit.east.fourth.toFixed(2),
    ])
    setcentralProfit([
      regionsProfit.central.first.toFixed(2),
      regionsProfit.central.second.toFixed(2),
      regionsProfit.central.third.toFixed(2),
      regionsProfit.central.fourth.toFixed(2),
    ])
    setsouthProfit([
      regionsProfit.south.first.toFixed(2),
      regionsProfit.south.second.toFixed(2),
      regionsProfit.south.third.toFixed(2),
      regionsProfit.south.fourth.toFixed(2),
    ])
  }, [data])

  const profitData = [
    {
      name: 'EAST',
      2014: eastProfit[0],
      2015: eastProfit[1],
      2016: eastProfit[2],
      2017: eastProfit[3],
    },
    {
      name: 'WEST',
      2014: westProfit[0],
      2015: westProfit[1],
      2016: westProfit[2],
      2017: westProfit[3],
    },
    {
      name: 'CENTRAL',
      2014: centralProfit[0],
      2015: centralProfit[1],
      2016: centralProfit[2],
      2017: centralProfit[3],
    },
    {
      name: 'SOUTH',
      2014: southProfit[0],
      2015: southProfit[1],
      2016: southProfit[2],
      2017: southProfit[3],
    },
  ]

  return (
    <>
      <h2>
        A Composite Bar Chart showimg all the profit of each year from 2014 -
        2017
      </h2>
      <br />
      <ResponsiveContainer width='90%' height={350}>
        <BarChart width={500} height={500} data={profitData}>
          <CartesianGrid />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='2014' stackId='a' fill='#1890FF' />
          <Bar dataKey='2015' stackId='a' fill='#82ca9d' />
          <Bar dataKey='2016' stackId='a' fill='#8884d8' />
          <Bar dataKey='2017' stackId='a' fill='#413ea0' />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default MyCompositeBarChart
