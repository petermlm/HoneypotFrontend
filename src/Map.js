import './Map.css';
import React, { Component } from 'react'
import ReactTooltip from "react-tooltip";
import { ComposableMap, Geographies, Geography, Graticule, Marker, Sphere } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { endpoints, makeUrl } from './api.js'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([0.0, 1.0])
  .range(["#ffedea", "#ff2700"]);

const markers = [
  // {
  //   name: "Frankfurt am Main",
  //   coordinates: [8.682127, 50.110924]
  // },
  // {
  //   name: "Lisbon",
  //   coordinates: [-9.1356321, 38.7069320]
  // },
  // {
  //   name: "Detroit",
  //   coordinates: [-83.3793885, 42.3523699]
  // },
]

class Map extends Component {
  state = {
    tooltip: '',
    data: [],
    maxCount: 0,
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
          {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={3} fill="#F00" stroke="#fff" strokeWidth={1} />
            <text
              textAnchor="middle"
              style={{ fontSize: '5pt', fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
              {name}
            </text>
          </Marker>
        ))}
        </ComposableMap>
        <ReactTooltip>{this.state.tooltip}</ReactTooltip>
      </div>
    );
  }

  componentDidMount() {
    fetch(makeUrl(endpoints.mapData))
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
