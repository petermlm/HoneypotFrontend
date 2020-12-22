import './Buttons.css';
import './Common.css';
import React, { Component } from 'react';
import { Ranges, rangeToString } from './Ranges';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curRange: this.props.initRange,
    };
  }

  handleClick = (newRange) => {
    this.setState({curRange: newRange});
    this.props.rangeChanged(newRange);
  }

  makeButton = (targetRange) => {
    var style = "";
    if(this.state.curRange === targetRange) {
      style = "Background-Honey";
    }
    var label = "Last " + rangeToString(targetRange);
    return (
      <button onClick={() => this.handleClick(targetRange)} className={style}>{label}</button>
    );
  }

  render() {
    return (
      <div className="Buttons">
        {this.makeButton(Ranges.Year)}
        {this.makeButton(Ranges.Month)}
        {this.makeButton(Ranges.Week)}
        {this.makeButton(Ranges.Day)}
        {this.makeButton(Ranges.Hour)}
      </div>
    );
  }
}

export default Buttons;
