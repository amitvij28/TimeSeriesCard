import React, { Component } from 'react';
import DataCard from './DataCard'
// import { bindActionCreators } from 'redux'
import CircularProgress from '@material-ui/core/CircularProgress'
// import { connect } from 'react-redux'
import openSocket from 'socket.io-client'
import Axios from 'axios';
// import { getRecentData } from './Action'
// import { getData } from './apicall'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {


  state = {
    data: []
  }

  componentDidMount() {
    if (this.props.login) {
      Axios.get('http://localhost:8081/getData').then(res => {
        this.setState({ data: [...res.data.data] })
      }).catch(err => {
        console.log('couldnot retrieve data')
      })

      this.socket = openSocket('http://localhost:8081')
      this.socket.on('new_data', res => {
        if (!this.state.data.includes(res.newdata)) {
          console.log('got new data')
          this.setState({ data: [...this.state.data, res.newdata] })
        }

      })

    }

  }

  componentWillUnmount() {
    if (this.props.login) {
      this.socket.disconnect()

    }
  }

  render() {
    if (!this.props.login) {
      return (
        <Redirect to='/login' />
      )
    }

    let display
    const { data } = this.state
    if (data && data.length !== 0)
      display = data.map(ele => <DataCard data={ele} key={ele._id} />)
    else
      display = <center><CircularProgress /></center>
    return (
      <React.Fragment>
        <h1>Welcome Admin</h1>
        <center>
          {
            display
          }</center>
      </React.Fragment>
    )
  }
}

export default Dashboard

// const mapStateToProps = (state) => {
//   return {
//     data: state.reducer,
//     isLoggedIn: state.reducer
//   }
// }

// const mapDispatchToProps = (dispatch) => {

//   return bindActionCreators({ getRecentData: getRecentData }, dispatch)

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


