
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleMapsSatelliteImagery_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "Lights_1": {
            "type": "geojson",
            "data": json_Lights_1
        }
                    ,
        "Skateparks_2": {
            "type": "geojson",
            "data": json_Skateparks_2
        }
                    ,
        "GroundSurfaceFilter_3": {
            "type": "geojson",
            "data": json_GroundSurfaceFilter_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleMapsSatelliteImagery_0_0",
            "type": "raster",
            "source": "GoogleMapsSatelliteImagery_0"
        },
        {
            "id": "lyr_Lights_1_0",
            "type": "circle",
            "source": "Lights_1",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'lit'], 'no'], ['/', 14.285714285714285, 2], ['==', ['get', 'lit'], 'yes'], ['/', 14.285714285714285, 2], 0], 'circle-color': ['case', ['==', ['get', 'lit'], 'no'], '#000004', ['==', ['get', 'lit'], 'yes'], '#b6377a', '#ffffff'], 'circle-opacity': ['case', ['==', ['get', 'lit'], 'no'], 1.0, ['==', ['get', 'lit'], 'yes'], 1.0, 0], 'circle-stroke-width': ['case', ['==', ['get', 'lit'], 'no'], 1.4285714285714286, ['==', ['get', 'lit'], 'yes'], 1.4285714285714286, 0], 'circle-stroke-color': ['case', ['==', ['get', 'lit'], 'no'], '#000000', ['==', ['get', 'lit'], 'yes'], '#ff28c2', '#000000']}
        }
,
        {
            "id": "lyr_Skateparks_2_0",
            "type": "circle",
            "source": "Skateparks_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 14.285714285714285, 2], 'circle-color': '#2a9fb6', 'circle-opacity': 1.0, 'circle-stroke-width': 1.4285714285714286, 'circle-stroke-color': '#0b4a8e'}
        }
,
        {
            "id": "lyr_GroundSurfaceFilter_3_0",
            "type": "circle",
            "source": "GroundSurfaceFilter_3",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'surface'], 'concrete,_artificial_features'], ['/', 15.714285714285715, 2], ['==', ['get', 'surface'], 'concrete'], ['/', 15.714285714285715, 2], ['==', ['get', 'surface'], 'asphalt_and_concrete'], ['/', 15.714285714285715, 2], ['==', ['get', 'surface'], 'paved'], ['/', 15.714285714285715, 2], ['==', ['get', 'surface'], 'asphalt'], ['/', 15.714285714285715, 2], ['==', ['get', 'surface'], 'wood'], ['/', 15.714285714285715, 2], ['/', 15.714285714285715, 2]], 'circle-color': ['case', ['==', ['get', 'surface'], 'concrete,_artificial_features'], '#fff5f0', ['==', ['get', 'surface'], 'concrete'], '#fdd6c4', ['==', ['get', 'surface'], 'asphalt_and_concrete'], '#fca486', ['==', ['get', 'surface'], 'paved'], '#fb7050', ['==', ['get', 'surface'], 'asphalt'], '#ea372a', ['==', ['get', 'surface'], 'wood'], '#ba1419', '#67000d'], 'circle-opacity': ['case', ['==', ['get', 'surface'], 'concrete,_artificial_features'], 1.0, ['==', ['get', 'surface'], 'concrete'], 1.0, ['==', ['get', 'surface'], 'asphalt_and_concrete'], 1.0, ['==', ['get', 'surface'], 'paved'], 1.0, ['==', ['get', 'surface'], 'asphalt'], 1.0, ['==', ['get', 'surface'], 'wood'], 1.0, 1.0], 'circle-stroke-width': ['case', ['==', ['get', 'surface'], 'concrete,_artificial_features'], 1.4285714285714286, ['==', ['get', 'surface'], 'concrete'], 1.4285714285714286, ['==', ['get', 'surface'], 'asphalt_and_concrete'], 1.4285714285714286, ['==', ['get', 'surface'], 'paved'], 1.4285714285714286, ['==', ['get', 'surface'], 'asphalt'], 1.4285714285714286, ['==', ['get', 'surface'], 'wood'], 1.4285714285714286, 1.4285714285714286], 'circle-stroke-color': ['case', ['==', ['get', 'surface'], 'concrete,_artificial_features'], '#000000', ['==', ['get', 'surface'], 'concrete'], '#000000', ['==', ['get', 'surface'], 'asphalt_and_concrete'], '#000000', ['==', ['get', 'surface'], 'paved'], '#000000', ['==', ['get', 'surface'], 'asphalt'], '#000000', ['==', ['get', 'surface'], 'wood'], '#000000', '#000000']}
        }
],
}