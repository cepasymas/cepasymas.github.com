var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_mapsparcelas_1 = new ol.format.GeoJSON();
var features_mapsparcelas_1 = format_mapsparcelas_1.readFeatures(json_mapsparcelas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapsparcelas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapsparcelas_1.addFeatures(features_mapsparcelas_1);
var lyr_mapsparcelas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mapsparcelas_1, 
                style: style_mapsparcelas_1,
                interactive: true,
                title: '<img src="styles/legend/mapsparcelas_1.png" /> maps parcelas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_mapsparcelas_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_mapsparcelas_1];
lyr_mapsparcelas_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'PROV': 'PROV', 'MUN_CAT': 'MUN_CAT', 'POLIGONO': 'POLIGONO', 'PARCELA': 'PARCELA', 'RECINTO': 'RECINTO', 'DN_SURFACE': 'DN_SURFACE', 'SUPERFICIE': 'SUPERFICIE', });
lyr_mapsparcelas_1.set('fieldImages', {'NOMBRE': '', 'PROV': '', 'MUN_CAT': '', 'POLIGONO': '', 'PARCELA': '', 'RECINTO': '', 'DN_SURFACE': '', 'SUPERFICIE': '', });
lyr_mapsparcelas_1.set('fieldLabels', {'NOMBRE': 'inline label', 'PROV': 'inline label', 'MUN_CAT': 'inline label', 'POLIGONO': 'inline label', 'PARCELA': 'inline label', 'RECINTO': 'inline label', 'DN_SURFACE': 'inline label', 'SUPERFICIE': 'inline label', });
lyr_mapsparcelas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});