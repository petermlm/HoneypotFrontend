import './TopFlavours.css';
import './Common.css';
import HoneyTable, { makeTargetService} from './HoneyTable.js'
import { settings } from './settings.js'

class TopFlavours extends HoneyTable {
  render() {
    return (
      <HoneyTable
        titleBefore="Top&nbsp;"
        titleHoney="Flavours"
        titleAfter="!"
        fields={["TargetService", "Count"]}
        endpoint={settings.endpointTopFlavours}
        dataTransform={makeTargetService}
        style={this.props.style}
      />
    );
  }
}

export default TopFlavours;
