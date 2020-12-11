import './ConnAttemps.css';
import React, { Component } from 'react'
import { settings } from './settings.js'

class ConnAttemps extends Component {
  state = {
    data: []
  };

  // setData = (data) => {
  //   this.setState({data: data});
  // };

  render() {
    return (
      <div className="ConnAttemps">
        <table className="ConnAttempsTable">
          <thead>
            <tr>
              <td>Time</td>
              <td>IP</td>
              <td>Port</td>
              <td>CountryCode</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value, index) => {
              return (<tr key={index}>
                <td>{value.Time}</td>
                <td>{value.IP}</td>
                <td>{value.Port}</td>
                <td>{value.CountryCode}</td>
              </tr>);
            })}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    fetch(settings.endpointConnAttemps)
      .then(res => res.json())
      .then((data) => {
        this.setState({ data: data });
      })
      .catch(console.log)
  }
}

export default ConnAttemps;
