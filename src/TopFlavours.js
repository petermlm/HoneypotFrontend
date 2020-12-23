import './TopFlavours.css';
import './Common.css';
import HoneyTable, { makeTargetService} from './HoneyTable.js'
import { endpoints } from './api.js'

class TopFlavours extends HoneyTable {
  render() {
    return (
      <HoneyTable
        titleBefore="Top&nbsp;"
        titleHoney="Flavours"
        titleAfter="!"
        fields={["TargetService", "Count"]}
        curRange={this.props.curRange}
        pagination={false}
        endpoint={endpoints.topFlavours}
        dataTransform={makeTargetService}
        style={this.props.style}
      />
    );
  }
}

export default TopFlavours;
