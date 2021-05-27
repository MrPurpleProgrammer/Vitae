import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

const options = [
    { key: 'line', value: 'line', text: 'Line' },
    { key: 'glider', value: 'glider', text: 'Glider' },
    { key: 'pulsar', value: 'pulsar', text: 'Pulsar' },
    { key: 'diehard', value: 'diehard', text: 'Diehard' },
    { key: 'gliderGun', value: 'gliderGun', text: 'Gosper Glider Gun' },
    { key: 'key', value: 'key', text: 'Key' }
];

class Presets extends React.Component {

    state = {
        preset: 'line'
    }

    onLoad = () => {
        const { preset } = this.state;
        return preset ? this.props.load(preset) : null;
    }

    render() {
        return (
            <div className='controls'>
                <select onChange={(e) => {this.setState({ preset: e.target.options[e.target.options.selectedIndex].value})}} placeholder="Select a preset">
                    <option value="line" defaultValue>Line</option>
                    <option value="glider">Glider</option>
                    <option value="pulsar">Pulsar</option>
                    <option value="diehard">Diehard</option>
                    <option value="gliderGun">Gosper Glider Gun</option>
                    <option value="key" hidden>Key</option>
                </select>
                <button
                    className="loadButton"
                    onClick={this.onLoad}
                    disabled={this.props.playing}
                >Load</button>
            </div>
        );
    }

}

export default Presets;