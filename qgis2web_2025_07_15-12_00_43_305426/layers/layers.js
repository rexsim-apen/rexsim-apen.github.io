var wms_layers = [];


        var lyr_satelitegooglemaps_0 = new ol.layer.Tile({
            'title': 'satelite googlemaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_priority_development_areas_pba2050plus_1 = new ol.format.GeoJSON();
var features_priority_development_areas_pba2050plus_1 = format_priority_development_areas_pba2050plus_1.readFeatures(json_priority_development_areas_pba2050plus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_priority_development_areas_pba2050plus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_priority_development_areas_pba2050plus_1.addFeatures(features_priority_development_areas_pba2050plus_1);
var lyr_priority_development_areas_pba2050plus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_priority_development_areas_pba2050plus_1, 
                style: style_priority_development_areas_pba2050plus_1,
                popuplayertitle: 'priority_development_areas_pba2050plus',
                interactive: true,
                title: '<img src="styles/legend/priority_development_areas_pba2050plus_1.png" /> priority_development_areas_pba2050plus'
            });
var format_priority_production_areas_current_2 = new ol.format.GeoJSON();
var features_priority_production_areas_current_2 = format_priority_production_areas_current_2.readFeatures(json_priority_production_areas_current_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_priority_production_areas_current_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_priority_production_areas_current_2.addFeatures(features_priority_production_areas_current_2);
var lyr_priority_production_areas_current_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_priority_production_areas_current_2, 
                style: style_priority_production_areas_current_2,
                popuplayertitle: 'priority_production_areas_current',
                interactive: true,
                title: '<img src="styles/legend/priority_production_areas_current_2.png" /> priority_production_areas_current'
            });

lyr_satelitegooglemaps_0.setVisible(true);lyr_priority_development_areas_pba2050plus_1.setVisible(true);lyr_priority_production_areas_current_2.setVisible(true);
var layersList = [lyr_satelitegooglemaps_0,lyr_priority_development_areas_pba2050plus_1,lyr_priority_production_areas_current_2];
lyr_priority_development_areas_pba2050plus_1.set('fieldAliases', {'county': 'county', 'jurisdicti': 'jurisdicti', 'pda_name': 'pda_name', 'auxiliary_storage_symbol_alpha': 'auxiliary_storage_symbol_alpha', });
lyr_priority_production_areas_current_2.set('fieldAliases', {'globalid': 'globalid', 'county': 'county', 'jurisdicti': 'jurisdicti', 'ppa_name': 'ppa_name', 'acres': 'acres', 'auxiliary_storage_symbol_alpha': 'auxiliary_storage_symbol_alpha', });
lyr_priority_development_areas_pba2050plus_1.set('fieldImages', {'county': 'TextEdit', 'jurisdicti': 'TextEdit', 'pda_name': 'TextEdit', 'auxiliary_storage_symbol_alpha': 'TextEdit', });
lyr_priority_production_areas_current_2.set('fieldImages', {'globalid': 'TextEdit', 'county': 'TextEdit', 'jurisdicti': 'TextEdit', 'ppa_name': 'TextEdit', 'acres': 'TextEdit', 'auxiliary_storage_symbol_alpha': 'TextEdit', });
lyr_priority_development_areas_pba2050plus_1.set('fieldLabels', {'county': 'no label', 'jurisdicti': 'no label', 'pda_name': 'no label', });
lyr_priority_production_areas_current_2.set('fieldLabels', {'globalid': 'no label', 'county': 'no label', 'jurisdicti': 'no label', 'ppa_name': 'no label', 'acres': 'no label', });
lyr_priority_production_areas_current_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});