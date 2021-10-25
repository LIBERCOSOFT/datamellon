import React, { useState, useEffect } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

function MyTimeSeriesChart({ data }) {
  const [y1Sales, sety1Sales] = useState(0)
  const [y2Sales, sety2Sales] = useState(0)
  const [y3Sales, sety3Sales] = useState(0)
  const [y4Sales, sety4Sales] = useState(0)

  useEffect(() => {
    //arrays for all sales
    let firstSales = []
    let secondSales = []
    let thirdSales = []
    let fourthSales = []

    // eslint-disable-next-line array-callback-return
    data.map((datum) => {
      switch (true) {
        case datum['Order Date'].endsWith(2014):
          firstSales.push(Number(datum['Sales']))
          break
        case datum['Order Date'].endsWith(2015):
          secondSales.push(Number(datum['Sales']))
          break
        case datum['Order Date'].endsWith(2016):
          thirdSales.push(Number(datum['Sales']))
          break
        case datum['Order Date'].endsWith(2017):
          fourthSales.push(Number(datum['Sales']))
          break
        default:
          return false
      }
    })

    //All for sales
    sety1Sales(firstSales.reduce((prev, curr) => prev + curr, 0).toFixed(2))
    sety2Sales(secondSales.reduce((prev, curr) => prev + curr, 0).toFixed(2))
    sety3Sales(thirdSales.reduce((prev, curr) => prev + curr, 0).toFixed(2))
    sety4Sales(fourthSales.reduce((prev, curr) => prev + curr, 0).toFixed(2))
  }, [data])

  const salesData = [
    {
      name: '2014',
      value: y1Sales,
    },
    {
      name: '2015',
      value: y2Sales,
    },
    {
      name: '2016',
      value: y3Sales,
    },
    {
      name: '2017',
      value: y4Sales,
    },
  ]

  return (
    <>
      <h2>
        A Time Series Chart showing the total amount of sales from 2014 to 2017
      </h2>
      <br />
      <AreaChart
        width={600}
        height={300}
        data={salesData}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='name' />
        <YAxis domain={[0, 250000]} tickCount={6} tick={[0, 2, 4, 6, 8, 10]} />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='value'
          stroke='#8884d8'
          fillOpacity={1}
          fill='url(#colorUv)'
        />
      </AreaChart>
    </>
  )
}

export default MyTimeSeriesChart
