var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Day1Route_1 = new ol.format.GeoJSON();
var features_Day1Route_1 = format_Day1Route_1.readFeatures(json_Day1Route_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Day1Route_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Day1Route_1.addFeatures(features_Day1Route_1);
var lyr_Day1Route_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Day1Route_1, 
                style: style_Day1Route_1,
                popuplayertitle: 'Day 1 Route',
                interactive: true,
                title: '<img src="styles/legend/Day1Route_1.png" /> Day 1 Route'
            });
var format_DAY_1_ITINERARY_2 = new ol.format.GeoJSON();
var features_DAY_1_ITINERARY_2 = format_DAY_1_ITINERARY_2.readFeatures(json_DAY_1_ITINERARY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAY_1_ITINERARY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAY_1_ITINERARY_2.addFeatures(features_DAY_1_ITINERARY_2);
var lyr_DAY_1_ITINERARY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DAY_1_ITINERARY_2, 
                style: style_DAY_1_ITINERARY_2,
                popuplayertitle: 'DAY_1_ITINERARY',
                interactive: true,
                title: '<img src="styles/legend/DAY_1_ITINERARY_2.png" /> DAY_1_ITINERARY'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Day1Route_1.setVisible(true);lyr_DAY_1_ITINERARY_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Day1Route_1,lyr_DAY_1_ITINERARY_2];
lyr_Day1Route_1.set('fieldAliases', {'ID': 'ID', });
lyr_DAY_1_ITINERARY_2.set('fieldAliases', {'ID': 'ID', 'ACTIVITY': 'ACTIVITY', 'INFO': 'INFO', 'TIME': 'TIME', 'ATTACHMENT': 'ATTACHMENT', });
lyr_Day1Route_1.set('fieldImages', {'ID': 'TextEdit', });
lyr_DAY_1_ITINERARY_2.set('fieldImages', {'ID': 'TextEdit', 'ACTIVITY': 'TextEdit', 'INFO': 'TextEdit', 'TIME': 'TextEdit', 'ATTACHMENT': 'ExternalResource', });
lyr_Day1Route_1.set('fieldLabels', {'ID': 'no label', });
lyr_DAY_1_ITINERARY_2.set('fieldLabels', {'ID': 'inline label - always visible', 'ACTIVITY': 'header label - visible with data', 'INFO': 'inline label - always visible', 'TIME': 'inline label - always visible', 'ATTACHMENT': 'inline label - always visible', });
lyr_DAY_1_ITINERARY_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});