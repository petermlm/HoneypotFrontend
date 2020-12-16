import './ConnAttemps.css';
import './Common.css';
import moment from 'moment'
import HoneyTable from './HoneyTable.js'
import { settings } from './settings.js'
import { getCountryName } from './util.js'

class ConnAttemps extends HoneyTable {
  render() {
    return (
      <HoneyTable
        titleBefore="Latest&nbsp;"
        titleHoney="Honey"
        titleAfter="&nbsp;consumptions!"
        fields={["Time", "IP", "Port", "CountryName"]}
        endpoint={settings.endpointConnAttemps}
        dataTransform={this.dataTransform}
        style={this.props.style}
      />
    );
  }

  dataTransform = function(data) {
    var dataTransformed = []
    data.forEach(entry => {
      entry.Time = moment(entry.Time).fromNow();
      entry.CountryName = getCountryName(entry.CountryCode);
      dataTransformed.push(entry);
    });
    return dataTransformed
  }
}

export default ConnAttemps;
