import './ConnAttemps.css';
import './Common.css';
import HoneyTable, { makeRelativeTime, makeCountryName, makeTargetService } from './HoneyTable.js'
import { settings } from './settings.js'

class ConnAttemps extends HoneyTable {
  render() {
    return (
      <HoneyTable
        titleBefore="Latest&nbsp;"
        titleHoney="Honey"
        titleAfter="&nbsp;consumptions!"
        fields={["Time", "IP", "TargetService", "CountryName"]}
        endpoint={settings.endpointConnAttemps}
        dataTransform={[makeRelativeTime, makeCountryName, makeTargetService]}
        style={this.props.style}
      />
    );
  }
}

export default ConnAttemps;
