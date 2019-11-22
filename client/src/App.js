import React, { Component } from 'react';
import DataCard from './DataCard'
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress'

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/getData`).then(res => {
      const d = res.data.data
      console.log(d)
      this.setState({ data: d })
    })
    //this.setState({ data: datas })
  }

  render() {
    let display
    if (this.state.data.length !== 0)
      display = this.state.data.map(ele => <DataCard data={ele} key={ele._id} />)
    else
      display = <CircularProgress />
    return (
      <React.Fragment>
        {
          display
        }
      </React.Fragment>
    )
  }
}

export default App;
