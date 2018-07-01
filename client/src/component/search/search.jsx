import React from 'react'
import Button from 'component/shared/button'

export default class Search extends React.Component {
    constructor() {
        super()

        this.state = {
            value: ''
        }
    }

    handleSearch = () => {
        this.props.search(this.state.value)
    }

    handleChange = ({ target: { value } }) => this.setState({ value })

    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.handleChange} />
                <Button text="Search" onClick={this.handleSearch} />
            </div>
        )
    }
}
