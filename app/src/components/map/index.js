import maplibregl        from 'maplibre-gl';
import * as MaplibreGrid from 'maplibre-grid';

import * as styles       from "./styles.json";

class MapContainer extends HTMLElement {
    
    constructor() {
        super();    
        this.setAttribute( "id", "map" );
    }

    connectedCallback() {
        const map = new maplibregl.Map({
            container:      'map',
            style:          styles,
            center:         [ -48.20008964929622, -21.78521330761199 ],
            zoom:           15,
            maplibreLogo:   false
        });

        map.on('load', async () => this.configureMap(map));
    }

    async configureMap(map) {
        this.loadLines(map);
    }

    async loadLines(map) {
        const grid = new MaplibreGrid.Grid({
            units:      'kilometers',
            gridWidth:  0.015,
            gridHeight: 0.015,
            minZoom:    15,
            paint: { 'line-opacity': 0.2 }
        });

        map.addControl(grid);
        map.on(MaplibreGrid)
        map.on(MaplibreGrid.GRID_CLICK_EVENT, event => { console.log(event); });
    }
}

export default MapContainer;