import mapboxgl from 'mapbox-gl';
import React from 'react';
import $ from 'jquery';
mapboxgl.accessToken = process.env.REACT_APP_MAP_API_TOKEN;

class ContactMap extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            lng: -120.3242,
            lat: 33.1545,
            zoom: 3.35,
            camera: 0,
            bearing: -159.68203884901615
        };
    }
    componentDidMount() {
        this._isMounted = true;
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mrpurple/ckjrpxuxd23s419l9qlhkpo96',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
            trackResize: true,
            bearing: this.state.bearing,
            interactive: $(window).width() > 850 ? true : false
        });
        setTimeout(() => {
            if($(window).height() < 850) {
                map.flyTo({
                    center: [-117.9550, 33.5035],
                    bearing: -173.27820630660895,
                    pitch: 65,
                    zoom: 10.53,
                    speed: 0.7,
                    easing(t) {
                        return 1 - Math.pow(1 - t, 5);
                    }
                })
            }
            else if($(window).width() > 850) {
                map.flyTo({
                    center: [-118.1036, 33.5128],
                    bearing: -173.28203884901694,
                    pitch: 65,
                    zoom: 10.53,
                    speed: 0.7,
                    easing(t) {
                        return 1 - Math.pow(1 - t, 5);
                    }
                });
            }
            else {
                map.flyTo({
                    center: [-117.9503, 33.5034],
                    bearing: -173.28203884901694,
                    pitch: 65,
                    zoom: 10.53,
                    speed: 0.7,
                    easing(t) {
                        return 1 - Math.pow(1 - t, 5);
                    }
                });
            }
        }, 500);
        var marker = new mapboxgl.Marker({
            color: "#a984ce",
            draggable: false
        }).setLngLat([-117.9047, 33.6638])
            .addTo(map);
        $('.contactMap').on("resize", map.resize());
        map.on('move', () => {
            console.log({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2),
                bearing: map.getBearing(),
            })
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

    componentWillUnmount() {
        this._isMounted = false;
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