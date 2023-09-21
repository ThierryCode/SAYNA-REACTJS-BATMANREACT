import React, { Component } from 'react';
import Slider from 'react-slider';

export class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: 100,
    };
  }

  handleSliderChange = (values) => {
    this.setState({
      minValue: values[0],
      maxValue: values[1],
    });
  };

  render() {
    const { minValue, maxValue } = this.state;
    return (
      <div>
        <p>Prix : ${minValue} - ${maxValue}</p>
        <Slider
          value={[minValue, maxValue]}
          min={0}
          max={100}
          onChange={this.handleSliderChange}
        />
      </div>
    );
  }
}