import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Home from './Home'

export class App extends Component {

    state = {
        isLoggedIn: false
    }

    login = () => {
        this.setState({ isLoggedIn: true })
    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/dashboard'>
                    <Dashboard login={this.state.isLoggedIn} />
                </Route>
                <Route exact path='/login'>
                    <Login login={this.state.isLoggedIn} loginfn={this.login} />
                </Route>
            </BrowserRouter>
        )
    }
}

export default App
