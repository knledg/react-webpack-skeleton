import _ from 'lodash';
import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from 'react-gl-maps';

export class GMap extends React.Component {

  static propTypes = {
    onMarkerClick: React.PropTypes.func,
    markers: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        label: React.PropTypes.string,
        position: React.PropTypes.shape({
          lat: React.PropTypes.number.isRequired,
          lng: React.PropTypes.number.isRequired,
        }).isRequired,
      }),
    ),
  }

  static defaultProps = {
    onMarkerClick: _.noop,
  }

  static testMarkers = [
    {
      label: 'A',
      position: {
        lat: 42.4072,
        lng: -71.3824,
      },
    },
    {
      label: 'B',
      position: {
        lat: 31.9686,
        lng: -99.9018,
      },
    },
    {
      label: 'C',
      position: {
        lat: 41.4925,
        lng: -99.9018,
      },
    },
    {
      label: 'D',
      position: {
        lat: 36.7783,
        lng: -119.4179,
      },
    },
  ]

  getMarkerIcon(attr) {
    const svg = this.generateIcon(attr.label);
    return {
      url: 'data:image/svg+xml;base64,' + window.btoa(svg),
      scaledSize: new google.maps.Size(125, 60),
      anchor: new google.maps.Point(15, 15),
    };
  }

  getFillColor() {
    return '#2B7EBB';
  }

  generateIcon(label, opts = {}) {
    const fillColor = this.getFillColor();
    _.defaults(opts, {
      fontSize: '30px',
      fontColor: 'white',
      strokeColor: '#ffffff',
      fillColor,
      circleOpacity: '0.8',
    });

    return `
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>
            .marker-label {
              font-size:${opts.fontSize};
              font-family:'Lato';
              fill:${opts.fontColor};
            }
          </style>
        </defs>
        <circle cx="32" cy="32" r="32" fill="${opts.fillColor}" opacity="${opts.circleOpacity}"></circle>
        <text class="marker-label" fill="white" text-anchor="middle" transform="translate(31 40)" >${label}</text>
      </svg>
    `;
  }


  renderContainer() {
    return <div {...this.props} style={{height: '450px'}} />;
  }

  renderMarkers() {
    return this.constructor.testMarkers.map((attr, index) => {
      const position = attr.position;
      const icon = this.getMarkerIcon(attr);

      return (
        <Marker
          key={index}
          position={position}
          icon={icon}
        />
      );
    });
  }

  renderMap() {
    return (
      <GoogleMap
        defaultZoom={4}
        defaultCenter={{lat: 37.09024, lng: -99.712891}}
        defaultOptions={{ scrollwheel: false }}
        defaultStyles={[{
          'featureType': 'all',
          'elementType': 'all',
          'stylers': [
            {'invert_lightness': true},
            {'saturation': 10},
            {'lightness': 30},
            {'gamma': 0.5},
            {'hue': '#00aaff'},
            {
              'featureType': 'road.highway',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'saturation': '100',
                },
                {
                  'lightness': '69',
                },
                {
                  'gamma': '1.40',
                },
              ],
            },
            {
              'featureType': 'administrative.province',
              'elementType': 'geometry.stroke',
              'stylers': [
                {
                  'saturation': '100',
                },
                {
                  'lightness': '27',
                },
              ],
            },
            {
              'featureType': 'road.highway.controlled_access',
              'elementType': 'labels.icon',
              'stylers': [
                {
                  'saturation': '100',
                },
              ],
            },
            {
              'featureType': 'road.arterial',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'saturation': '43',
                },
                {
                  'lightness': '51',
                },
              ],
            },
            {
              'featureType': 'landscape',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'color': '#32373c',
                },
              ],
            },
          ]},
        ]}>
        {this.renderMarkers()}
      </GoogleMap>
    );
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={this.renderContainer()}
        googleMapElement={this.renderMap()} />
    );
  }
}
