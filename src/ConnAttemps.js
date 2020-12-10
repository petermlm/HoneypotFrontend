import './ConnAttemps.css';
import React, { Component } from 'react'

class ConnAttemps extends Component {
  state = {
    contacts: []
  };

  setData = (data) => {
    this.setState({contacts: data});
  };

  render() {
    return (
      <div className="ConnAttemps">
        <table className="ConnAttempsTable">
          <thead>
            <tr>
              <td>Time</td>
              <td>IP</td>
              <td>Port</td>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((value, index) => {
              return (<tr key={index}>
                <td>{value.Time}</td>
                <td>{value.IP}</td>
                <td>{value.Port}</td>
              </tr>);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ConnAttemps;
