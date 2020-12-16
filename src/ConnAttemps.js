import './ConnAttemps.css';
import './Common.css';
import HoneyTable, { makeRelativeTime, makeCountryName } from './HoneyTable.js'
import { settings } from './settings.js'

class ConnAttemps extends HoneyTable {
  render() {
    return (
      <HoneyTable
        titleBefore="Latest&nbsp;"
        titleHoney="Honey"
        titleAfter="&nbsp;consumptions!"
        fields={["Time", "IP", "Port", "CountryName"]}
        endpoint={settings.endpointConnAttemps}
        dataTransform={[makeRelativeTime, makeCountryName]}
        style={this.props.style}
      />
    );
  }
}

export default ConnAttemps;
