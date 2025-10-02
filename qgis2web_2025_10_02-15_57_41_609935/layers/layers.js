var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_california_refineries_1 = new ol.format.GeoJSON();
var features_california_refineries_1 = format_california_refineries_1.readFeatures(json_california_refineries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_california_refineries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_california_refineries_1.addFeatures(features_california_refineries_1);
var lyr_california_refineries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_california_refineries_1, 
                style: style_california_refineries_1,
                popuplayertitle: 'california_refineries',
                interactive: true,
                title: '<img src="styles/legend/california_refineries_1.png" /> california_refineries'
            });
var format_Senate_Districts_2 = new ol.format.GeoJSON();
var features_Senate_Districts_2 = format_Senate_Districts_2.readFeatures(json_Senate_Districts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Senate_Districts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Senate_Districts_2.addFeatures(features_Senate_Districts_2);
var lyr_Senate_Districts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Senate_Districts_2, 
                style: style_Senate_Districts_2,
                popuplayertitle: 'Senate_Districts',
                interactive: true,
                title: '<img src="styles/legend/Senate_Districts_2.png" /> Senate_Districts'
            });
var format_Marine_Oil_Terminals_3 = new ol.format.GeoJSON();
var features_Marine_Oil_Terminals_3 = format_Marine_Oil_Terminals_3.readFeatures(json_Marine_Oil_Terminals_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marine_Oil_Terminals_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marine_Oil_Terminals_3.addFeatures(features_Marine_Oil_Terminals_3);
var lyr_Marine_Oil_Terminals_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marine_Oil_Terminals_3, 
                style: style_Marine_Oil_Terminals_3,
                popuplayertitle: 'Marine_Oil_Terminals',
                interactive: true,
                title: '<img src="styles/legend/Marine_Oil_Terminals_3.png" /> Marine_Oil_Terminals'
            });
var format_Assembly_Districts_4 = new ol.format.GeoJSON();
var features_Assembly_Districts_4 = format_Assembly_Districts_4.readFeatures(json_Assembly_Districts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Assembly_Districts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Assembly_Districts_4.addFeatures(features_Assembly_Districts_4);
var lyr_Assembly_Districts_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Assembly_Districts_4, 
                style: style_Assembly_Districts_4,
                popuplayertitle: 'Assembly_Districts',
                interactive: true,
                title: '<img src="styles/legend/Assembly_Districts_4.png" /> Assembly_Districts'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_california_refineries_1.setVisible(true);lyr_Senate_Districts_2.setVisible(true);lyr_Marine_Oil_Terminals_3.setVisible(true);lyr_Assembly_Districts_4.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_california_refineries_1,lyr_Senate_Districts_2,lyr_Marine_Oil_Terminals_3,lyr_Assembly_Districts_4];
lyr_california_refineries_1.set('fieldAliases', {'name': 'name', });
lyr_Senate_Districts_2.set('fieldAliases', {'GEOID': 'GEOID', 'SenateDist': 'SenateDist', 'SenateDi_1': 'SenateDi_1', 'SenateArea': 'SenateArea', });
lyr_Marine_Oil_Terminals_3.set('fieldAliases', {'Terminal_N': 'Terminal_N', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'WO_': 'WO_', 'WO_Berth_I': 'WO_Berth_I', 'City': 'City', 'County': 'County', 'DisplayNam': 'DisplayNam', });
lyr_Assembly_Districts_4.set('fieldAliases', {'GEOID': 'GEOID', 'AssemblyDi': 'AssemblyDi', 'Assembly_1': 'Assembly_1', 'AssemblyAr': 'AssemblyAr', });
lyr_california_refineries_1.set('fieldImages', {'name': 'TextEdit', });
lyr_Senate_Districts_2.set('fieldImages', {'GEOID': 'TextEdit', 'SenateDist': 'TextEdit', 'SenateDi_1': 'TextEdit', 'SenateArea': 'TextEdit', });
lyr_Marine_Oil_Terminals_3.set('fieldImages', {'Terminal_N': '', 'Latitude': '', 'Longitude': '', 'WO_': '', 'WO_Berth_I': '', 'City': '', 'County': '', 'DisplayNam': '', });
lyr_Assembly_Districts_4.set('fieldImages', {'GEOID': 'TextEdit', 'AssemblyDi': 'TextEdit', 'Assembly_1': 'TextEdit', 'AssemblyAr': 'TextEdit', });
lyr_california_refineries_1.set('fieldLabels', {'name': 'inline label - always visible', });
lyr_Senate_Districts_2.set('fieldLabels', {'GEOID': 'hidden field', 'SenateDist': 'inline label - always visible', 'SenateDi_1': 'hidden field', 'SenateArea': 'hidden field', });
lyr_Marine_Oil_Terminals_3.set('fieldLabels', {'Terminal_N': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'WO_': 'hidden field', 'WO_Berth_I': 'hidden field', 'City': 'hidden field', 'County': 'hidden field', 'DisplayNam': 'inline label - always visible', });
lyr_Assembly_Districts_4.set('fieldLabels', {'GEOID': 'hidden field', 'AssemblyDi': 'inline label - always visible', 'Assembly_1': 'hidden field', 'AssemblyAr': 'hidden field', });
lyr_Assembly_Districts_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});