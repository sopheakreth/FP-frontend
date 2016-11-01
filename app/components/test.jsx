import React, {Component} from 'react';
import {TextField} from 'material-ui';

class Test extends Component {
    state = {
        value: '',
    };

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            value: value.trim(),
        });

        console.log('e', this.e);
    };

    render() {
        return (
            <TextField
                ref={(e) => {this.e = e}}
                hintText="hintText"
                value={this.state.value}
                onChange={this.handleChange}
            />
        );
    }
}

export default Test;
