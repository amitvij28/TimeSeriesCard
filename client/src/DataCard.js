import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export class DataCard extends Component {

    state = {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const d = this.calcTimePassed(this.props.data.timestamp)
            this.setState(d)
        }, 1000)
    }

    calcTimePassed = (timestamp) => {
        const oldDate = new Date(timestamp)
        const current = new Date()
        const d = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        }
        let diff = Math.abs(current - oldDate) / 1000
        d.day = Math.floor(diff / (24 * 60 * 60))
        diff -= d.day * (24 * 60 * 60)
        d.hour = Math.floor(diff / (60 * 60))
        diff -= d.hour * (60 * 60)
        d.minute = Math.floor(diff / (60))
        diff -= d.minute * (60)
        d.second = Math.floor(diff % 60)

        return d
    }

    render() {
        const { day, minute, hour, second } = this.state
        return (
            <React.Fragment>
                <br />
                <Card style={{ maxWidth: '400px' }}>
                    <CardContent>
                        <Typography>
                            Value:{this.props.data.value}<br />
                            Days:{day} Hours:{hour} Mins:{minute} Secs:{second}
                        </Typography>

                    </CardContent>
                </Card>
            </React.Fragment>
        )
    }
}

export default DataCard
