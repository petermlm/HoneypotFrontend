import './Map.css';
import React, { Component } from 'react'
import ReactTooltip from "react-tooltip";
import { ComposableMap, Geographies, Geography, Graticule, Sphere } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { endpoints, makeUrlList } from './api.js'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([0.0, 1.0])
  .range(["#ffedea", "#ff2700"]);

class Map extends Component {
  state = {
    tooltip: '',
    data: [],
    maxCount: 0,
    curRange: null,
  }

  constructor(props) {
    super(props);
    this.setState(props);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.curRange !== prevProps.curRange) {
      this.loadData();
    }
  }

  render() {
    return (
      <div className="Map">
        <ComposableMap projectionConfig={{ scale: 147 }} data-tip="" width={900} height={450}>
          <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
          <Geographies geography={geoUrl} stroke="#29465b" strokeWidth={0.5}>
            {({ geographies }) =>
              geographies.map((geo) => {
                var count = 0;
                var d = null;
                var code = geo.properties.ISO_A2;
                if(code in this.state.data) {
                  count = this.state.data[code]
                  d = count / this.state.maxCount;
                }
                return (<Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d) : "#F5F4F6"}
                  onMouseEnter={() => {
                    if(d) { this.setState({tooltip: `${count}`}); }
                  }}
                  onMouseLeave={() => {
                    this.setState({tooltip: ''});
                  }}
                />)
              })
            }
          </Geographies>
        </ComposableMap>
        <ReactTooltip>{this.state.tooltip}</ReactTooltip>
      </div>
    );
  }

  loadData = () => {
    fetch(makeUrlList(endpoints.mapData, this.props.curRange))
      .then(res => res.json())
      .then((data) => {
        var maxCount = Math.max.apply(Math, data.map(function(o) { return o.Count; }))

        var result = {};
        for (var i=0; i<data.length; i++) {
          result[data[i].CountryCode] = data[i].Count;
        }

        this.setState({
          data: result,
          maxCount: maxCount,
        });
      })
      .catch(console.log)
  }
}

export default Map;
