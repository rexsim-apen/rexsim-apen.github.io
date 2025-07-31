var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ManufacturingPopulation_1 = new ol.format.GeoJSON();
var features_ManufacturingPopulation_1 = format_ManufacturingPopulation_1.readFeatures(json_ManufacturingPopulation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManufacturingPopulation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManufacturingPopulation_1.addFeatures(features_ManufacturingPopulation_1);
var lyr_ManufacturingPopulation_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManufacturingPopulation_1, 
                style: style_ManufacturingPopulation_1,
                popuplayertitle: 'Manufacturing Population',
                interactive: true,
    title: 'Manufacturing Population<br />\
    <img src="styles/legend/ManufacturingPopulation_1_0.png" /> 0 - 27<br />\
    <img src="styles/legend/ManufacturingPopulation_1_1.png" /> 27 - 55<br />\
    <img src="styles/legend/ManufacturingPopulation_1_2.png" /> 55 - 82<br />\
    <img src="styles/legend/ManufacturingPopulation_1_3.png" /> 82 - 108<br />\
    <img src="styles/legend/ManufacturingPopulation_1_4.png" /> 108 - 135<br />\
    <img src="styles/legend/ManufacturingPopulation_1_5.png" /> 135 - 163<br />\
    <img src="styles/legend/ManufacturingPopulation_1_6.png" /> 163 - 192<br />\
    <img src="styles/legend/ManufacturingPopulation_1_7.png" /> 192 - 220<br />\
    <img src="styles/legend/ManufacturingPopulation_1_8.png" /> 220 - 250<br />\
    <img src="styles/legend/ManufacturingPopulation_1_9.png" /> 250 - 283<br />\
    <img src="styles/legend/ManufacturingPopulation_1_10.png" /> 283 - 321<br />\
    <img src="styles/legend/ManufacturingPopulation_1_11.png" /> 321 - 364<br />\
    <img src="styles/legend/ManufacturingPopulation_1_12.png" /> 364 - 412<br />\
    <img src="styles/legend/ManufacturingPopulation_1_13.png" /> 412 - 466<br />\
    <img src="styles/legend/ManufacturingPopulation_1_14.png" /> 466 - 526<br />\
    <img src="styles/legend/ManufacturingPopulation_1_15.png" /> 526 - 605<br />\
    <img src="styles/legend/ManufacturingPopulation_1_16.png" /> 605 - 725<br />\
    <img src="styles/legend/ManufacturingPopulation_1_17.png" /> 725 - 885<br />\
    <img src="styles/legend/ManufacturingPopulation_1_18.png" /> 885 - 1220<br />\
    <img src="styles/legend/ManufacturingPopulation_1_19.png" /> 1220 - 2547<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ManufacturingPopulation_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ManufacturingPopulation_1];
lyr_ManufacturingPopulation_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'DP05_0072P': 'DP05_0072P', 'DP05_0072E': 'DP05_0072E', 'DP05_0033E': 'DP05_0033E', 'DP03_0035E': 'DP03_0035E', 'DP03_0035P': 'DP03_0035P', 'DP04_0063E': 'DP04_0063E', 'DP04_0063P': 'DP04_0063P', 'DP04_0065E': 'DP04_0065E', 'DP04_0065P': 'DP04_0065P', 'DP04_0069E': 'DP04_0069E', 'DP04_0069P': 'DP04_0069P', 'DP04_0058P': 'DP04_0058P', 'DP04_0059P': 'DP04_0059P', 'DP04_0060P': 'DP04_0060P', 'DP04_0061P': 'DP04_0061P', });
lyr_ManufacturingPopulation_1.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'DP05_0072P': 'TextEdit', 'DP05_0072E': 'TextEdit', 'DP05_0033E': 'TextEdit', 'DP03_0035E': 'TextEdit', 'DP03_0035P': 'TextEdit', 'DP04_0063E': 'TextEdit', 'DP04_0063P': 'TextEdit', 'DP04_0065E': 'TextEdit', 'DP04_0065P': 'TextEdit', 'DP04_0069E': 'TextEdit', 'DP04_0069P': 'TextEdit', 'DP04_0058P': 'TextEdit', 'DP04_0059P': 'TextEdit', 'DP04_0060P': 'TextEdit', 'DP04_0061P': 'TextEdit', });
lyr_ManufacturingPopulation_1.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'DP05_0072P': 'no label', 'DP05_0072E': 'no label', 'DP05_0033E': 'no label', 'DP03_0035E': 'no label', 'DP03_0035P': 'no label', 'DP04_0063E': 'no label', 'DP04_0063P': 'no label', 'DP04_0065E': 'no label', 'DP04_0065P': 'no label', 'DP04_0069E': 'no label', 'DP04_0069P': 'no label', 'DP04_0058P': 'no label', 'DP04_0059P': 'no label', 'DP04_0060P': 'no label', 'DP04_0061P': 'no label', });
lyr_ManufacturingPopulation_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});