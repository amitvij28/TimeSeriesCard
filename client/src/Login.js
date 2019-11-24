import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Axios from 'axios'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'



export class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    login = e => {
        e.preventDefault()
        Axios.post('http://localhost:8081/login', {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            console.log(res.data)
            if (res.data.login) {
                console.log('logging in')
                this.props.loginfn()
            } else {
                alert('Wrong username or password')
            }
        })
    }

    render() {
        if (this.props.login) {
            return (
                <React.Fragment>
                    <h1>You're logged in</h1>
                    <h2><Link to='/dashboard'>Go to dashboard</Link></h2>
                </React.Fragment>
            )
        }


        return (


            <React.Fragment>
                <form onSubmit={this.login}>
                    <TextField label='Username' variant='outlined' name='username' onChange={this.handleChange} />
                    <TextField label='Password' variant='outlined' name='password' type='password' onChange={this.handleChange} />
                    <Button variant="contained" type='submit'>Login</Button>

                </form>
            </React.Fragment>
        )
    }
}

export default Login
