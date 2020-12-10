import './ConnAttemps.css';
import React, { Component } from 'react'
import { settings } from './settings.js'

class ConnAttemps extends Component {
  state = {
    contacts: []
  }

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

  componentDidMount() {
    fetch(settings.endpoint)
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }
}

export default ConnAttemps;
