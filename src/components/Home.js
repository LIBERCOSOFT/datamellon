import React, { Component } from 'react'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'

import MyBarChart from './MyBarChart'
import MyPieChart from './MyPieChart'
import MyCompositeBarChart from './MyCompositeBarChart'
import MyTimeSeriesChart from './MyTimeSeriesChart'
import MyTable from './MyTable'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const token = { angular_test: 'angular-developer' }
    axios
      .post(
        'https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub',
        token
      )
      .then((res) => {
        this.setState({
          data: res.data,
        })
      })
  }

  render() {
    return (
      <>
        <Switch>
          <Route path='/' exact>
            <MyBarChart data={this.state.data} />
          </Route>
          <Route path='/pie'>
            <MyPieChart data={this.state.data} />
          </Route>
          <Route path='/cbar'>
            <MyCompositeBarChart data={this.state.data} />
          </Route>
          <Route path='/time'>
            <MyTimeSeriesChart data={this.state.data} />
          </Route>
          <Route path='/table'>
            <MyTable data={this.state.data} />
          </Route>
        </Switch>
      </>
    )
  }
}

export default Home
