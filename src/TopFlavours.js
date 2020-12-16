import './TopFlavours.css';
import './Common.css';
import HoneyTable from './HoneyTable.js'
import { settings } from './settings.js'

class TopFlavours extends HoneyTable {
  render() {
    return (
      <HoneyTable
        titleBefore="Top&nbsp;"
        titleHoney="Flavours"
        titleAfter="!"
        fields={["Port", "Count"]}
        endpoint={settings.endpointTopFlavours}
        style={this.props.style}
      />
    );
  }
}

export default TopFlavours;
