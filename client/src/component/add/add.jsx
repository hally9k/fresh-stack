import React from 'react'
import Button from 'component/shared/button'

export default class Add extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    handleSubmit = (event) => {
        event.stopPropagation()
        event.preventDefault()

        this.props.add(this.state)
    }

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })

    render() {
        return (
            <form name="add-form" onSubmit={this.handleSubmit}>
                <label>
                    Title<input value={this.state.value} required={true} name="title" onChange={this.handleChange} />
                </label>
                <label>
                    Description<input
                        value={this.state.value}
                        required={true}
                        name="description"
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Image URL<input
                        value={this.state.value}
                        required={true}
                        name="image"
                        onChange={this.handleChange}
                    />
                </label>
                <Button type="submit" text="Add" />
            </form>
        )
    }
}
