/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts'

function MyBarChart({ data }) {
  const [y1Sales, sety1Sales] = useState(0)
  const [y2Sales, sety2Sales] = useState(0)
  const [y3Sales, sety3Sales] = useState(0)
  const [y4Sales, sety4Sales] = useState(0)

  const [y1Profit, sety1Profit] = useState(0)
  const [y2Profit, sety2Profit] = useState(0)
  const [y3Profit, sety3Profit] = useState(0)
  const [y4Profit, sety4Profit] = useState(0)

  const [y1Discount, sety1Discount] = useState(0)
  const [y2Discount, sety2Discount] = useState(0)
  const [y3Discount, sety3Discount] = useState(0)
  const [y4Discount, sety4Discount] = useState(0)

  useEffect(() => {
    //arrays for all sales
    let firstSales = []
    let secondSales = []
    let thirdSales = []
    let fourthSales = []

    //arrays for all profits
    let firstProfit = []
    let secondProfit = []
    let thirdProfit = []
    let fourthProfit = []

    //arras for discount
    let firstDiscount = []
    let secondDiscount = []
    let thirdDiscount = []
    let fourthDiscount = []

    data.map((datum) => {
      switch (true) {
        case datum['Order Date'].endsWith(2014):
          firstSales.push(Number(datum['Sales']))
          firstProfit.push(Number(datum['Profit']))
          firstDiscount.push(Number(datum['Discount']))
          break
        case datum['Order Date'].endsWith(2015):
          secondSales.push(Number(datum['Sales']))
          secondProfit.push(Number(datum['Profit']))
          secondDiscount.push(Number(datum['Discount']))
          break
        case datum['Order Date'].endsWith(2016):
          thirdSales.push(Number(datum['Sales']))
          thirdProfit.push(Number(datum['Profit']))
          thirdDiscount.push(Number(datum['Discount']))
          break
        case datum['Order Date'].endsWith(2017):
          fourthSales.push(Number(datum['Sales']))
          fourthProfit.push(Number(datum['Profit']))
          fourthDiscount.push(Number(datum['Discount']))
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

    //all for profit
    sety1Profit(firstProfit.reduce((prev, curr) => prev + curr, 0).toFixed(2))
    sety2Profit(secondProfit.reduce((prev, curr) => prev + curr, 0).toFixed(2))
    sety3Profit(thirdProfit.reduce((prev, curr) => prev + curr, 0).toFixed(2))
    sety4Profit(fourthProfit.reduce((prev, curr) => prev + curr, 0).toFixed(2))

    //aa for discount
    sety1Discount(
      firstDiscount.reduce((prev, curr) => prev + curr, 0).toFixed(2)
    )
    sety2Discount(
      secondDiscount.reduce((prev, curr) => prev + curr, 0).toFixed(2)
    )
    sety3Discount(
      thirdDiscount.reduce((prev, curr) => prev + curr, 0).toFixed(2)
    )
    sety4Discount(
      fourthDiscount.reduce((prev, curr) => prev + curr, 0).toFixed(2)
    )
  }, [data])

  const salesData = [
    {
      year: '2014',
      Total_Sales: y1Sales,
    },
    {
      year: '2015',
      Total_Sales: y2Sales,
    },
    {
      year: '2016',
      Total_Sales: y3Sales,
    },
    {
      year: '2017',
      Total_Sales: y4Sales,
    },
  ]

  const profitData = [
    {
      year: '2014',
      Total_Profit: y1Profit,
    },
    {
      year: '2015',
      Total_Profit: y2Profit,
    },
    {
      year: '2016',
      Total_Profit: y3Profit,
    },
    {
      year: '2017',
      Total_Profit: y4Profit,
    },
  ]

  const discountData = [
    {
      year: '2014',
      Total_Discount: y1Discount,
    },
    {
      year: '2015',
      Total_Discount: y2Discount,
    },
    {
      year: '2016',
      Total_Discount: y3Discount,
    },
    {
      year: '2017',
      Total_Discount: y4Discount,
    },
  ]

  return (
    <>
      <div>
        <span>
          A Bar Chart showing the total amount made form 2014 to 2017. It can be
          hovered on to show the actual value.
        </span>
        <BarChart width={600} height={350} data={salesData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='year' />
          <YAxis
            domain={[0, 250000]}
            tickCount={6}
            tick={[0, 2, 4, 6, 8, 10]}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey='Total_Sales' fill='#82ca9d' />
        </BarChart>
      </div>
      <br />
      <div>
        <span>
          {' '}
          A Bar Chart showing the total profit from 2014 to 2017. It can be
          hovered on to show the actual value.
        </span>
        <BarChart width={600} height={350} data={profitData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='year' />
          <YAxis domain={[0, 26000]} tickCount={6} tick={[0, 2, 4, 6, 8, 10]} />
          <Tooltip />
          <Legend />
          <Bar dataKey='Total_Profit' fill='#82ca9d' />
        </BarChart>
      </div>
      <br />
      <div>
        <span>
          {' '}
          A Bar Chart showing the total profit from 2014 to 2017. It can be
          hovered on to show the actual value.
        </span>
        <BarChart width={600} height={350} data={discountData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='year' />
          <YAxis domain={[0, 200]} tickCount={6} tick={[0, 2, 4, 6, 8, 10]} />
          <Tooltip />
          <Legend />
          <Bar dataKey='Total_Discount' fill='#82ca9d' />
        </BarChart>
      </div>
    </>
  )
}

export default MyBarChart
