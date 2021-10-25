import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import { ResponsiveContainer } from 'recharts'

function MyTable({ data }) {
  const [allProfits, setallProfits] = useState([])

  const [allDiscounts, setallDiscounts] = useState([])

  const [corHsegment, setcorHsegment] = useState('')
  const [homeHsegment, sethomeHsegment] = useState('')
  const [conHsegment, setconHsegment] = useState('')

  const [corHstate, setcorHstate] = useState('')
  const [homeHstate, sethomeHstate] = useState('')
  const [conHstate, setconHstate] = useState('')

  useEffect(() => {
    // index - Corporate, Home Office, Consumer
    let allProfits = [0, 0, 0]
    let allDiscounts = [0, 0, 0]

    //index[[0] - Corporate, Home Office, Consumer
    //index[0][0-2] - West - East - Central - South
    const segmentRegionSales = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]

    // eslint-disable-next-line array-callback-return
    data.map((datum) => {
      switch (datum['Segment']) {
        case 'Corporate':
          allProfits[0] += Number(datum['Profit'])
          allDiscounts[0] += Number(datum['Discount'])
          switch (datum['Region']) {
            case 'West':
              segmentRegionSales[0][0] += 1
              break
            case 'East':
              segmentRegionSales[0][1] += 1
              break
            case 'Central':
              segmentRegionSales[0][2] += 1
              break
            case 'South':
              segmentRegionSales[0][3] += 1
              break
            default:
              return false
          }
          break
        case 'Home Office':
          allProfits[1] += Number(datum['Profit'])
          allDiscounts[1] += Number(datum['Discount'])
          switch (datum['Region']) {
            case 'West':
              segmentRegionSales[1][0] += 1
              break
            case 'East':
              segmentRegionSales[1][1] += 1
              break
            case 'Central':
              segmentRegionSales[1][2] += 1
              break
            case 'South':
              segmentRegionSales[1][3] += 1
              break
            default:
              return false
          }
          break
        case 'Consumer':
          allProfits[2] += Number(datum['Profit'])
          allDiscounts[2] += Number(datum['Discount'])
          switch (datum['Region']) {
            case 'West':
              segmentRegionSales[2][0] += 1
              break
            case 'East':
              segmentRegionSales[2][1] += 1
              break
            case 'Central':
              segmentRegionSales[2][2] += 1
              break
            case 'South':
              segmentRegionSales[2][3] += 1
              break
            default:
              return false
          }
          break
        default:
          return false
      }
    })

    //for segment with high sales
    let corperateSeg = () => {
      switch (
        segmentRegionSales[0].indexOf(Math.max(...segmentRegionSales[0]))
      ) {
        case 0:
          return 'West'

        case 1:
          return 'East'

        case 2:
          return 'Central'

        case 3:
          return 'South'

        default:
          return false
      }
    }
    let homeSeg = () => {
      switch (
        segmentRegionSales[1].indexOf(Math.max(...segmentRegionSales[1]))
      ) {
        case 0:
          return 'West'

        case 1:
          return 'East'

        case 2:
          return 'Central'

        case 3:
          return 'South'

        default:
          return false
      }
    }
    let consumerSeg = () => {
      switch (
        segmentRegionSales[2].indexOf(Math.max(...segmentRegionSales[2]))
      ) {
        case 0:
          return 'West'
        case 1:
          return 'East'
        case 2:
          return 'Central'
        case 3:
          return 'South'
        default:
          return false
      }
    }

    //for highest sales state
    let corperateState = []
    let homeState = []
    let consumerState = []

    // eslint-disable-next-line array-callback-return
    data.map((val) => {
      switch (val['Segment']) {
        case 'Corporate':
          if (!corperateState.includes(val['State'])) {
            corperateState.push(val['State'], 1)
          } else {
            let index = corperateState.indexOf(val['State']) + 1
            corperateState[index] += 1
          }
          break
        case 'Home Office':
          if (!homeState.includes(val['State'])) {
            homeState.push(val['State'], 1)
          } else {
            let index = homeState.indexOf(val['State']) + 1
            homeState[index] += 1
          }
          break
        case 'Consumer':
          if (!consumerState.includes(val['State'])) {
            consumerState.push(val['State'], 1)
          } else {
            let index = consumerState.indexOf(val['State']) + 1
            consumerState[index] += 1
          }
          break
        default:
          return false
      }
    })

    let stateFunc = (states) => {
      let state = ''
      let highNum = 0

      for (let i = 1; i < states.length; i += 2) {
        if (highNum < states[i]) {
          highNum = states[i]
          state = states[i - 1]
        }
      }
      return state
    }

    let conProfit = allProfits.map((val) => {
      return val.toFixed(2)
    })
    let conDiscount = allDiscounts.map((val) => {
      return val.toFixed(2)
    })
    setallProfits(conProfit)
    setallDiscounts(conDiscount)

    setcorHsegment(corperateSeg())
    sethomeHsegment(homeSeg())
    setconHsegment(consumerSeg())

    setcorHstate(stateFunc(corperateState))
    sethomeHstate(stateFunc(homeState))
    setconHstate(stateFunc(consumerState))
  }, [data])

  return (
    <>
      <h2>
        A Table showing the three Segments(Corporate, Home Office, Consumer)
        with their Profits and Discounts for all Years and the state and regions
        with higher Sales
      </h2>
      <br />
      <ResponsiveContainer width='100%' height={350}>
        <Table bordered hover>
          <thead>
            <tr style={{ backgroundColor: '#8884d8' }}>
              <th>#</th>
              <th>Segment</th>
              <th>
                Profits <br /> (All Years)
              </th>
              <th>
                Discount <br /> (All Years)
              </th>
              <th>
                States <br /> (High Sales)
              </th>
              <th>
                Region <br /> (High Sales)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Corporate</td>
              <td>{allProfits[0]}</td>
              <td>{allDiscounts[0]}</td>
              <td>{corHstate}</td>
              <td>{corHsegment}</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Home Office</td>
              <td>{allProfits[1]}</td>
              <td>{allDiscounts[1]}</td>
              <td>{homeHstate}</td>
              <td>{homeHsegment}</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>Consumer</td>
              <td>{allProfits[2]}</td>
              <td>{allDiscounts[2]}</td>
              <td>{conHstate}</td>
              <td>{conHsegment}</td>
            </tr>
          </tbody>
        </Table>
      </ResponsiveContainer>
    </>
  )
}

export default MyTable
