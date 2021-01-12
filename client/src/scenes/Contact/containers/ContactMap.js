import mapboxgl from 'mapbox-gl';
import React from 'react';
import $ from 'jquery';
mapboxgl.accessToken = process.env.REACT_APP_MAP_API_TOKEN;

class ContactMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -120.3242,
            lat: 33.1545,
            zoom: 5.35,
            camera: 0,
            bearing: -159.68203884901615
        };
    }
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mrpurple/ckjrpxuxd23s419l9qlhkpo96',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
            trackResize: true,
            bearing: this.state.bearing,
            interactive: true
        });
        map.flyTo({
            center: [-118.0276,33.6225],
            bearing: -173.28203884901694,
            pitch: 65,
            zoom: 11.18,
            speed: 0.7,
            easing(t) {
                return t;
            }
        });
        var marker = new mapboxgl.Marker({
            color: "#a984ce",
            draggable: false
        }).setLngLat([-117.9047, 33.6638])
            .addTo(map);
        $('.contactMap').on("resize", map.resize());
        map.on('move', () => {
            // access longitude and latitude values directly
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2),
                bearing: map.getBearing(),
            });
        });
        map.resize();
        map.scrollZoom.disable();
    }

    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        )
    }
}

export default ContactMap