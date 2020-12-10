import './Map.css';
import React, { Component } from 'react'
import ReactTooltip from "react-tooltip";
import { ComposableMap, Geographies, Geography, Graticule, Marker, Sphere } from "react-simple-maps";
import { scaleLinear } from "d3-scale";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);

const markers = [
  {
    name: "Frankfurt am Main",
    coordinates: [8.682127, 50.110924]
  },
  {
    name: "Lisbon",
    coordinates: [-9.1356321, 38.7069320]
  },
  {
    name: "Detroit",
    coordinates: [-83.3793885, 42.3523699]
  },
]

const grads = {
  'PT': 1.00,
  'DE': 0.50,
  'US': 0.75,
}

class Map extends Component {
  state = {
    tooltip: ''
  }

  render() {
    return (
      <div className="Map">
        <ComposableMap projectionConfig={{ scale: 147 }} data-tip="">
          <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                var d = null;
                var code = geo.properties.ISO_A2;
                if(code in grads) {
                  d = grads[code];
                }
                return (<Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d) : "#F5F4F6"}
                  onMouseEnter={() => {
                    if(d) { this.setState({tooltip: `${d}`}); }
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
}

export default Map;
