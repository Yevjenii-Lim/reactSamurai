import React from 'react';


class Clock extends React.Component {
constructor(props) {
    super(props)
    this.state = {date: new Date()}
}
componentDidMount() {
    console.log('didMount')
    this.timerId = setInterval(() => this.thick(), 1000)
}
componentWillUnmount() {
    console.log('unmaunt')
    clearInterval(this.timerId)
}

thick() {
    this.setState({
        date: new Date()
    })
}
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <p>{this.state.date.toString()}</p>
            </div>
        )
    }
}

export default Clock