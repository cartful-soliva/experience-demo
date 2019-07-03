import React, {Component} from "react";



class EmailInput extends Component {
    state = { email: this.props.defaultEmail };

    handleChange = event => {
        this.setState({ email: event.target.value });
    };

    render() {
        return <input onChange={this.handleChange} value={this.state.email} />;
    }
}

class InvalidateEmailInput extends EmailInput {
    render() {
        return <input onChange={this.handleChange} value={this.state.email} disabled='true' />;
    }
}

export {EmailInput, InvalidateEmailInput};