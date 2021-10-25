import React, { useState, useEffect } from 'react'
import { PieChart, Tooltip, Pie, ResponsiveContainer } from 'recharts'

function MyPieChart({ data }) {
  const [wSales, setwSales] = useState(0)
  const [eSales, seteSales] = useState(0)
  const [cSales, setcSales] = useState(0)
  const [sSales, setsSales] = useState(0)

  //states for year one category sales
  const [y1Off, sety1Off] = useState(0)
  const [y1Fur, sety1Fur] = useState(0)
  const [y1Tech, sety1Tech] = useState(0)
  //states for year two category sales
  const [y2Off, sety2Off] = useState(0)
  const [y2Fur, sety2Fur] = useState(0)
  const [y2Tech, sety2Tech] = useState(0)
  //states for year three category sales
  const [y3Off, sety3Off] = useState(0)
  const [y3Fur, sety3Fur] = useState(0)
  const [y3Tech, sety3Tech] = useState(0)
  //states for year four category sales
  const [y4Off, sety4Off] = useState(0)
  const [y4Fur, sety4Fur] = useState(0)
  const [y4Tech, sety4Tech] = useState(0)

  useEffect(() => {
    let west = []
    let east = []
    let central = []
    let south = []

    // eslint-disable-next-line array-callback-return
    data.map((datum) => {
      switch (true) {
        case datum['Region'] === 'West':
          west.push(Number(datum['Sales']))
          break
        case datum['Region'] === 'East':
          east.push(Number(datum['Sales']))
          break
        case datum['Region'] === 'Central':
          central.push(Number(datum['Sales']))
          break
        case datum['Region'] === 'South':
          south.push(Number(datum['Sales']))
          break
        default:
          return false
      }
    })

    let westreducer = west.reduce((prev, curr) => prev + curr, 0)
    let westvalue = westreducer.toFixed(2)
    let westcon = Number(westvalue)

    let eastreducer = east.reduce((prev, curr) => prev + curr, 0)
    let eastvalue = eastreducer.toFixed(2)
    let eastcon = Number(eastvalue)

    let centralreducer = central.reduce((prev, curr) => prev + curr, 0)
    let centralvalue = centralreducer.toFixed(2)
    let centralcon = Number(centralvalue)

    let southreducer = south.reduce((prev, curr) => prev + curr, 0)
    let southvalue = southreducer.toFixed(2)
    let southcon = Number(southvalue)
    //All for sales
    setwSales(westcon)
    seteSales(eastcon)
    setcSales(centralcon)
    setsSales(southcon)

    let first = {
      officeSupplies: [],
      furniture: [],
      technology: [],
    }
    let second = {
      officeSupplies: [],
      furniture: [],
      technology: [],
    }
    let third = {
      officeSupplies: [],
      furniture: [],
      technology: [],
    }
    let fourth = {
      officeSupplies: [],
      furniture: [],
      technology: [],
    }

    // eslint-disable-next-line
    data.map((datum) => {
      switch (true) {
        case datum['Order Date'].endsWith(2014):
          switch (datum['Category']) {
            case 'Office Supplies':
              first.officeSupplies.push(datum)
              break
            case 'Furniture':
              first.furniture.push(datum)
              break
            case 'Technology':
              first.technology.push(datum)
              break
            default:
              return false
          }
          break

        case datum['Order Date'].endsWith(2015):
          switch (datum['Category']) {
            case 'Office Supplies':
              second.officeSupplies.push(datum)
              break
            case 'Furniture':
              second.furniture.push(datum)
              break
            case 'Technology':
              second.technology.push(datum)
              break
            default:
              return false
          }
          break

        case datum['Order Date'].endsWith(2016):
          switch (datum['Category']) {
            case 'Office Supplies':
              third.officeSupplies.push(datum)
              break
            case 'Furniture':
              third.furniture.push(datum)
              break
            case 'Technology':
              third.technology.push(datum)
              break
            default:
              return false
          }
          break

        case datum['Order Date'].endsWith(2017):
          switch (datum['Category']) {
            case 'Office Supplies':
              fourth.officeSupplies.push(datum)
              break
            case 'Furniture':
              fourth.furniture.push(datum)
              break
            case 'Technology':
              fourth.technology.push(datum)
              break
            default:
              return false
          }
          break
        default:
          return false
      }
    })

    //setting year one category sales
    sety1Off(first.officeSupplies.length)
    sety1Fur(first.furniture.length)
    sety1Tech(first.technology.length)
    //setting year one category sales
    sety2Off(second.officeSupplies.length)
    sety2Fur(second.furniture.length)
    sety2Tech(second.technology.length)
    //setting year one category sales
    sety3Off(third.officeSupplies.length)
    sety3Fur(third.furniture.length)
    sety3Tech(third.technology.length)
    //setting year one category sales
    sety4Off(fourth.officeSupplies.length)
    sety4Fur(fourth.furniture.length)
    sety4Tech(fourth.technology.length)
  }, [data])

  const salesData = [
    {
      name: 'West',
      value: wSales,
    },
    {
      name: 'East',
      value: eSales,
    },
    {
      name: 'Central',
      value: cSales,
    },
    {
      name: 'South',
      value: sSales,
    },
  ]

  const y1CatData = [
    {
      name: 'Office Supplies',
      value: y1Off,
    },
    {
      name: 'Furniture',
      value: y1Fur,
    },
    {
      name: 'Technology',
      value: y1Tech,
    },
  ]

  const y2CatData = [
    {
      name: 'Office Supplies',
      value: y2Off,
    },
    {
      name: 'Furniture',
      value: y2Fur,
    },
    {
      name: 'Technology',
      value: y2Tech,
    },
  ]

  const y3CatData = [
    {
      name: 'Office Supplies',
      value: y3Off,
    },
    {
      name: 'Furniture',
      value: y3Fur,
    },
    {
      name: 'Technology',
      value: y3Tech,
    },
  ]

  const y4CatData = [
    {
      name: 'Office Supplies',
      value: y4Off,
    },
    {
      name: 'Furniture',
      value: y4Fur,
    },
    {
      name: 'Technology',
      value: y4Tech,
    },
  ]

  return (
    <>
      <div>
        <h2>
          A Pie Chart showing the total amount of Orders according to
          regions(West, East, Central, North)
        </h2>
        <ResponsiveContainer width='90%' height={350}>
          <PieChart>
            <Tooltip />
            <Pie
              data={salesData}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='50%'
              fill='#1890FF'
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <br />
      <h2>
        Pie Charts Showing the number of times purchases were made according to
        category (Office Supplies, Furniture and Technology) in the past 4 years
      </h2>

      <hr />
      <div>
        <h3>YEAR 2014 </h3>
        <ResponsiveContainer width='90%' height={350}>
          <PieChart>
            <Tooltip />
            <Pie
              data={y1CatData}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='50%'
              fill='#1890FF'
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <br />
      <div>
        <h3>YEAR 2015 </h3>
        <ResponsiveContainer width='90%' height={350}>
          <PieChart>
            <Tooltip />
            <Pie
              data={y2CatData}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='50%'
              fill='#1890FF'
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <br />
      <div>
        <h3>YEAR 2016 </h3>
        <ResponsiveContainer width='90%' height={350}>
          <PieChart>
            <Tooltip />
            <Pie
              data={y3CatData}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='50%'
              fill='#1890FF'
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <br />
      <div>
        <h3>YEAR 2017 </h3>
        <ResponsiveContainer width='90%' height={350}>
          <PieChart>
            <Tooltip />
            <Pie
              data={y4CatData}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='50%'
              fill='#1890FF'
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default MyPieChart
