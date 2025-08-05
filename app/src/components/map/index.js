import maplibregl from 'maplibre-gl';

import * as styles from "./styles.json";

class MapContainer extends HTMLElement {
    
    constructor() {
        super();    
        
        this.setAttribute( "id", "map" );
    }

    connectedCallback() {
        const map = new maplibregl.Map({
            container:      'map',
            style:          styles,
            center:         [0, 0],
            zoom:           3,
            maplibreLogo:   false
        });

        map.addControl(new maplibregl.FullscreenControl());
    }
}

export default MapContainer;