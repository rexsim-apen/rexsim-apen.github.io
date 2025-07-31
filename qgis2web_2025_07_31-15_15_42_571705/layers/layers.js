var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CarsAvailable_1 = new ol.format.GeoJSON();
var features_CarsAvailable_1 = format_CarsAvailable_1.readFeatures(json_CarsAvailable_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarsAvailable_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarsAvailable_1.addFeatures(features_CarsAvailable_1);
var lyr_CarsAvailable_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarsAvailable_1, 
                style: style_CarsAvailable_1,
                popuplayertitle: 'Cars Available',
                interactive: true,
                title: 'Cars Available'
            });
var format_Homesbuilt20203_2 = new ol.format.GeoJSON();
var features_Homesbuilt20203_2 = format_Homesbuilt20203_2.readFeatures(json_Homesbuilt20203_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Homesbuilt20203_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Homesbuilt20203_2.addFeatures(features_Homesbuilt20203_2);
var lyr_Homesbuilt20203_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Homesbuilt20203_2, 
                style: style_Homesbuilt20203_2,
                popuplayertitle: 'Homes built 2020-3',
                interactive: true,
    title: 'Homes built 2020-3<br />\
    <img src="styles/legend/Homesbuilt20203_2_0.png" /> 0 - 500<br />\
    <img src="styles/legend/Homesbuilt20203_2_1.png" /> 500 - 1000<br />\
    <img src="styles/legend/Homesbuilt20203_2_2.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Homesbuilt20203_2_3.png" /> 1500 - 2000<br />\
    <img src="styles/legend/Homesbuilt20203_2_4.png" /> 2000 - 2003<br />' });
var format_Decadewmosthomesconstructed_3 = new ol.format.GeoJSON();
var features_Decadewmosthomesconstructed_3 = format_Decadewmosthomesconstructed_3.readFeatures(json_Decadewmosthomesconstructed_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Decadewmosthomesconstructed_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Decadewmosthomesconstructed_3.addFeatures(features_Decadewmosthomesconstructed_3);
var lyr_Decadewmosthomesconstructed_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Decadewmosthomesconstructed_3, 
                style: style_Decadewmosthomesconstructed_3,
                popuplayertitle: 'Decade w/ most homes constructed',
                interactive: true,
                title: 'Decade w/ most homes constructed'
            });
var format_Asian_4 = new ol.format.GeoJSON();
var features_Asian_4 = format_Asian_4.readFeatures(json_Asian_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asian_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asian_4.addFeatures(features_Asian_4);
var lyr_Asian_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Asian_4, 
                style: style_Asian_4,
                popuplayertitle: 'Asian %',
                interactive: true,
    title: 'Asian %<br />\
    <img src="styles/legend/Asian_4_0.png" /> 0 - 4<br />\
    <img src="styles/legend/Asian_4_1.png" /> 4 - 10<br />\
    <img src="styles/legend/Asian_4_2.png" /> 10 - 16<br />\
    <img src="styles/legend/Asian_4_3.png" /> 16 - 23<br />\
    <img src="styles/legend/Asian_4_4.png" /> 23 - 31<br />\
    <img src="styles/legend/Asian_4_5.png" /> 31 - 40<br />\
    <img src="styles/legend/Asian_4_6.png" /> 40 - 51<br />\
    <img src="styles/legend/Asian_4_7.png" /> 51 - 66<br />\
    <img src="styles/legend/Asian_4_8.png" /> 66 - 100<br />' });
var format_Renters_5 = new ol.format.GeoJSON();
var features_Renters_5 = format_Renters_5.readFeatures(json_Renters_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Renters_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Renters_5.addFeatures(features_Renters_5);
var lyr_Renters_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Renters_5, 
                style: style_Renters_5,
                popuplayertitle: 'Renters %',
                interactive: true,
    title: 'Renters %<br />\
    <img src="styles/legend/Renters_5_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Renters_5_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Renters_5_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Renters_5_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Renters_5_4.png" /> 80 - 100<br />' });
var format_ManufacturingPopulation_6 = new ol.format.GeoJSON();
var features_ManufacturingPopulation_6 = format_ManufacturingPopulation_6.readFeatures(json_ManufacturingPopulation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManufacturingPopulation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManufacturingPopulation_6.addFeatures(features_ManufacturingPopulation_6);
var lyr_ManufacturingPopulation_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManufacturingPopulation_6, 
                style: style_ManufacturingPopulation_6,
                popuplayertitle: 'Manufacturing Population',
                interactive: true,
    title: 'Manufacturing Population<br />\
    <img src="styles/legend/ManufacturingPopulation_6_0.png" /> 0 - 59<br />\
    <img src="styles/legend/ManufacturingPopulation_6_1.png" /> 59 - 115<br />\
    <img src="styles/legend/ManufacturingPopulation_6_2.png" /> 115 - 175<br />\
    <img src="styles/legend/ManufacturingPopulation_6_3.png" /> 175 - 242<br />\
    <img src="styles/legend/ManufacturingPopulation_6_4.png" /> 242 - 320<br />\
    <img src="styles/legend/ManufacturingPopulation_6_5.png" /> 320 - 419<br />\
    <img src="styles/legend/ManufacturingPopulation_6_6.png" /> 419 - 542<br />\
    <img src="styles/legend/ManufacturingPopulation_6_7.png" /> 542 - 725<br />\
    <img src="styles/legend/ManufacturingPopulation_6_8.png" /> 725 - 1220<br />\
    <img src="styles/legend/ManufacturingPopulation_6_9.png" /> 1220 - 2547<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_CarsAvailable_1.setVisible(true);lyr_Homesbuilt20203_2.setVisible(true);lyr_Decadewmosthomesconstructed_3.setVisible(true);lyr_Asian_4.setVisible(true);lyr_Renters_5.setVisible(true);lyr_ManufacturingPopulation_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CarsAvailable_1,lyr_Homesbuilt20203_2,lyr_Decadewmosthomesconstructed_3,lyr_Asian_4,lyr_Renters_5,lyr_ManufacturingPopulation_6];
lyr_CarsAvailable_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'DP05_0072P': 'DP05_0072P', 'DP05_0072E': 'DP05_0072E', 'DP05_0033E': 'DP05_0033E', 'DP03_0035E': 'DP03_0035E', 'DP03_0035P': 'DP03_0035P', 'DP04_0063E': 'DP04_0063E', 'DP04_0063P': 'DP04_0063P', 'DP04_0065E': 'DP04_0065E', 'DP04_0065P': 'DP04_0065P', 'DP04_0069E': 'DP04_0069E', 'DP04_0069P': 'DP04_0069P', 'DP04_0058P': 'DP04_0058P', 'DP04_0059P': 'DP04_0059P', 'DP04_0060P': 'DP04_0060P', 'DP04_0061P': 'DP04_0061P', });
lyr_Homesbuilt20203_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'DP05_0072P': 'DP05_0072P', 'DP05_0072E': 'DP05_0072E', 'DP05_0033E': 'DP05_0033E', 'DP03_0035E': 'DP03_0035E', 'DP03_0035P': 'DP03_0035P', 'DP04_0063E': 'DP04_0063E', 'DP04_0063P': 'DP04_0063P', 'DP04_0065E': 'DP04_0065E', 'DP04_0065P': 'DP04_0065P', 'DP04_0069E': 'DP04_0069E', 'DP04_0069P': 'DP04_0069P', 'DP04_0058P': 'DP04_0058P', 'DP04_0059P': 'DP04_0059P', 'DP04_0060P': 'DP04_0060P', 'DP04_0061P': 'DP04_0061P', 'DP04_0016E': 'DP04_0016E', 'DP04_0016P': 'DP04_0016P', 'DP04_0017E': 'DP04_0017E', 'DP04_0017P': 'DP04_0017P', 'DP04_0018E': 'DP04_0018E', 'DP04_0018P': 'DP04_0018P', 'DP04_0019E': 'DP04_0019E', 'DP04_0019P': 'DP04_0019P', 'DP04_0020E': 'DP04_0020E', 'DP04_0020P': 'DP04_0020P', 'DP04_0021E': 'DP04_0021E', 'DP04_0021P': 'DP04_0021P', 'DP04_0022E': 'DP04_0022E', 'DP04_0022P': 'DP04_0022P', 'DP04_0023E': 'DP04_0023E', 'DP04_0024P': 'DP04_0024P', 'DP04_0025E': 'DP04_0025E', 'DP04_0025P': 'DP04_0025P', 'DP04_0026E': 'DP04_0026E', 'DP04_0026P': 'DP04_0026P', });
lyr_Decadewmosthomesconstructed_3.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'DP05_0072P': 'DP05_0072P', 'DP05_0072E': 'DP05_0072E', 'DP05_0033E': 'DP05_0033E', 'DP03_0035E': 'DP03_0035E', 'DP03_0035P': 'DP03_0035P', 'DP04_0063E': 'DP04_0063E', 'DP04_0063P': 'DP04_0063P', 'DP04_0065E': 'DP04_0065E', 'DP04_0065P': 'DP04_0065P', 'DP04_0069E': 'DP04_0069E', 'DP04_0069P': 'DP04_0069P', 'DP04_0058P': 'DP04_0058P', 'DP04_0059P': 'DP04_0059P', 'DP04_0060P': 'DP04_0060P', 'DP04_0061P': 'DP04_0061P', 'DP04_0016E': 'DP04_0016E', 'DP04_0016P': 'DP04_0016P', 'DP04_0017E': 'DP04_0017E', 'DP04_0017P': 'DP04_0017P', 'DP04_0018E': 'DP04_0018E', 'DP04_0018P': 'DP04_0018P', 'DP04_0019E': 'DP04_0019E', 'DP04_0019P': 'DP04_0019P', 'DP04_0020E': 'DP04_0020E', 'DP04_0020P': 'DP04_0020P', 'DP04_0021E': 'DP04_0021E', 'DP04_0021P': 'DP04_0021P', 'DP04_0022E': 'DP04_0022E', 'DP04_0022P': 'DP04_0022P', 'DP04_0023E': 'DP04_0023E', 'DP04_0024P': 'DP04_0024P', 'DP04_0025E': 'DP04_0025E', 'DP04_0025P': 'DP04_0025P', 'DP04_0026E': 'DP04_0026E', 'DP04_0026P': 'DP04_0026P', });
lyr_Asian_4.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'DP05_0072P': 'DP05_0072P', 'DP05_0072E': 'DP05_0072E', 'DP05_0033E': 'DP05_0033E', 'DP03_0035E': 'DP03_0035E', 'DP03_0035P': 'DP03_0035P', 'DP04_0063E': 'DP04_0063E', 'DP04_0063P': 'DP04_0063P', 'DP04_0065E': 'DP04_0065E', 'DP04_0065P': 'DP04_0065P', 'DP04_0069E': 'DP04_0069E', 'DP04_0069P': 'DP04_0069P', 'DP04_0058P': 'DP04_0058P', 'DP04_0059P': 'DP04_0059P', 'DP04_0060P': 'DP04_0060P', 'DP04_0061P': 'DP04_0061P', });
lyr_Renters_5.set('fieldAliases', {'DP04_0047P': 'DP04_0047P', });
lyr_ManufacturingPopulation_6.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'DP05_0072P': 'DP05_0072P', 'DP05_0072E': 'DP05_0072E', 'DP05_0033E': 'DP05_0033E', 'DP03_0035E': 'DP03_0035E', 'DP03_0035P': 'DP03_0035P', 'DP04_0063E': 'DP04_0063E', 'DP04_0063P': 'DP04_0063P', 'DP04_0065E': 'DP04_0065E', 'DP04_0065P': 'DP04_0065P', 'DP04_0069E': 'DP04_0069E', 'DP04_0069P': 'DP04_0069P', 'DP04_0058P': 'DP04_0058P', 'DP04_0059P': 'DP04_0059P', 'DP04_0060P': 'DP04_0060P', 'DP04_0061P': 'DP04_0061P', });
lyr_CarsAvailable_1.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'DP05_0072P': 'TextEdit', 'DP05_0072E': 'TextEdit', 'DP05_0033E': 'TextEdit', 'DP03_0035E': 'TextEdit', 'DP03_0035P': 'TextEdit', 'DP04_0063E': 'TextEdit', 'DP04_0063P': 'TextEdit', 'DP04_0065E': 'TextEdit', 'DP04_0065P': 'TextEdit', 'DP04_0069E': 'TextEdit', 'DP04_0069P': 'TextEdit', 'DP04_0058P': 'TextEdit', 'DP04_0059P': 'TextEdit', 'DP04_0060P': 'TextEdit', 'DP04_0061P': 'TextEdit', });
lyr_Homesbuilt20203_2.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'DP05_0072P': 'TextEdit', 'DP05_0072E': 'TextEdit', 'DP05_0033E': 'TextEdit', 'DP03_0035E': 'TextEdit', 'DP03_0035P': 'TextEdit', 'DP04_0063E': 'TextEdit', 'DP04_0063P': 'TextEdit', 'DP04_0065E': 'TextEdit', 'DP04_0065P': 'TextEdit', 'DP04_0069E': 'TextEdit', 'DP04_0069P': 'TextEdit', 'DP04_0058P': 'TextEdit', 'DP04_0059P': 'TextEdit', 'DP04_0060P': 'TextEdit', 'DP04_0061P': 'TextEdit', 'DP04_0016E': 'TextEdit', 'DP04_0016P': 'TextEdit', 'DP04_0017E': 'TextEdit', 'DP04_0017P': 'TextEdit', 'DP04_0018E': 'TextEdit', 'DP04_0018P': 'TextEdit', 'DP04_0019E': 'TextEdit', 'DP04_0019P': 'TextEdit', 'DP04_0020E': 'TextEdit', 'DP04_0020P': 'TextEdit', 'DP04_0021E': 'TextEdit', 'DP04_0021P': 'TextEdit', 'DP04_0022E': 'TextEdit', 'DP04_0022P': 'TextEdit', 'DP04_0023E': 'TextEdit', 'DP04_0024P': 'TextEdit', 'DP04_0025E': 'TextEdit', 'DP04_0025P': 'TextEdit', 'DP04_0026E': 'TextEdit', 'DP04_0026P': 'TextEdit', });
lyr_Decadewmosthomesconstructed_3.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'DP05_0072P': 'TextEdit', 'DP05_0072E': 'TextEdit', 'DP05_0033E': 'TextEdit', 'DP03_0035E': 'TextEdit', 'DP03_0035P': 'TextEdit', 'DP04_0063E': 'TextEdit', 'DP04_0063P': 'TextEdit', 'DP04_0065E': 'TextEdit', 'DP04_0065P': 'TextEdit', 'DP04_0069E': 'TextEdit', 'DP04_0069P': 'TextEdit', 'DP04_0058P': 'TextEdit', 'DP04_0059P': 'TextEdit', 'DP04_0060P': 'TextEdit', 'DP04_0061P': 'TextEdit', 'DP04_0016E': 'TextEdit', 'DP04_0016P': 'TextEdit', 'DP04_0017E': 'TextEdit', 'DP04_0017P': 'TextEdit', 'DP04_0018E': 'TextEdit', 'DP04_0018P': 'TextEdit', 'DP04_0019E': 'TextEdit', 'DP04_0019P': 'TextEdit', 'DP04_0020E': 'TextEdit', 'DP04_0020P': 'TextEdit', 'DP04_0021E': 'TextEdit', 'DP04_0021P': 'TextEdit', 'DP04_0022E': 'TextEdit', 'DP04_0022P': 'TextEdit', 'DP04_0023E': 'TextEdit', 'DP04_0024P': 'TextEdit', 'DP04_0025E': 'TextEdit', 'DP04_0025P': 'TextEdit', 'DP04_0026E': 'TextEdit', 'DP04_0026P': 'TextEdit', });
lyr_Asian_4.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'DP05_0072P': 'TextEdit', 'DP05_0072E': 'TextEdit', 'DP05_0033E': 'TextEdit', 'DP03_0035E': 'TextEdit', 'DP03_0035P': 'TextEdit', 'DP04_0063E': 'TextEdit', 'DP04_0063P': 'TextEdit', 'DP04_0065E': 'TextEdit', 'DP04_0065P': 'TextEdit', 'DP04_0069E': 'TextEdit', 'DP04_0069P': 'TextEdit', 'DP04_0058P': 'TextEdit', 'DP04_0059P': 'TextEdit', 'DP04_0060P': 'TextEdit', 'DP04_0061P': 'TextEdit', });
lyr_Renters_5.set('fieldImages', {'DP04_0047P': 'TextEdit', });
lyr_ManufacturingPopulation_6.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'DP05_0072P': 'TextEdit', 'DP05_0072E': 'TextEdit', 'DP05_0033E': 'TextEdit', 'DP03_0035E': 'TextEdit', 'DP03_0035P': 'TextEdit', 'DP04_0063E': 'TextEdit', 'DP04_0063P': 'TextEdit', 'DP04_0065E': 'TextEdit', 'DP04_0065P': 'TextEdit', 'DP04_0069E': 'TextEdit', 'DP04_0069P': 'TextEdit', 'DP04_0058P': 'TextEdit', 'DP04_0059P': 'TextEdit', 'DP04_0060P': 'TextEdit', 'DP04_0061P': 'TextEdit', });
lyr_CarsAvailable_1.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'DP05_0072P': 'no label', 'DP05_0072E': 'no label', 'DP05_0033E': 'no label', 'DP03_0035E': 'no label', 'DP03_0035P': 'no label', 'DP04_0063E': 'no label', 'DP04_0063P': 'no label', 'DP04_0065E': 'no label', 'DP04_0065P': 'no label', 'DP04_0069E': 'no label', 'DP04_0069P': 'no label', 'DP04_0058P': 'no label', 'DP04_0059P': 'no label', 'DP04_0060P': 'no label', 'DP04_0061P': 'no label', });
lyr_Homesbuilt20203_2.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'DP05_0072P': 'no label', 'DP05_0072E': 'no label', 'DP05_0033E': 'no label', 'DP03_0035E': 'no label', 'DP03_0035P': 'no label', 'DP04_0063E': 'no label', 'DP04_0063P': 'no label', 'DP04_0065E': 'no label', 'DP04_0065P': 'no label', 'DP04_0069E': 'no label', 'DP04_0069P': 'no label', 'DP04_0058P': 'no label', 'DP04_0059P': 'no label', 'DP04_0060P': 'no label', 'DP04_0061P': 'no label', 'DP04_0016E': 'no label', 'DP04_0016P': 'no label', 'DP04_0017E': 'no label', 'DP04_0017P': 'no label', 'DP04_0018E': 'no label', 'DP04_0018P': 'no label', 'DP04_0019E': 'no label', 'DP04_0019P': 'no label', 'DP04_0020E': 'no label', 'DP04_0020P': 'no label', 'DP04_0021E': 'no label', 'DP04_0021P': 'no label', 'DP04_0022E': 'no label', 'DP04_0022P': 'no label', 'DP04_0023E': 'no label', 'DP04_0024P': 'no label', 'DP04_0025E': 'no label', 'DP04_0025P': 'no label', 'DP04_0026E': 'no label', 'DP04_0026P': 'no label', });
lyr_Decadewmosthomesconstructed_3.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'DP05_0072P': 'no label', 'DP05_0072E': 'no label', 'DP05_0033E': 'no label', 'DP03_0035E': 'no label', 'DP03_0035P': 'no label', 'DP04_0063E': 'no label', 'DP04_0063P': 'no label', 'DP04_0065E': 'no label', 'DP04_0065P': 'no label', 'DP04_0069E': 'no label', 'DP04_0069P': 'no label', 'DP04_0058P': 'no label', 'DP04_0059P': 'no label', 'DP04_0060P': 'no label', 'DP04_0061P': 'no label', 'DP04_0016E': 'no label', 'DP04_0016P': 'no label', 'DP04_0017E': 'no label', 'DP04_0017P': 'no label', 'DP04_0018E': 'no label', 'DP04_0018P': 'no label', 'DP04_0019E': 'no label', 'DP04_0019P': 'no label', 'DP04_0020E': 'no label', 'DP04_0020P': 'no label', 'DP04_0021E': 'no label', 'DP04_0021P': 'no label', 'DP04_0022E': 'no label', 'DP04_0022P': 'no label', 'DP04_0023E': 'no label', 'DP04_0024P': 'no label', 'DP04_0025E': 'no label', 'DP04_0025P': 'no label', 'DP04_0026E': 'no label', 'DP04_0026P': 'no label', });
lyr_Asian_4.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'DP05_0072P': 'no label', 'DP05_0072E': 'inline label - visible with data', 'DP05_0033E': 'no label', 'DP03_0035E': 'no label', 'DP03_0035P': 'no label', 'DP04_0063E': 'no label', 'DP04_0063P': 'no label', 'DP04_0065E': 'no label', 'DP04_0065P': 'no label', 'DP04_0069E': 'no label', 'DP04_0069P': 'no label', 'DP04_0058P': 'no label', 'DP04_0059P': 'no label', 'DP04_0060P': 'no label', 'DP04_0061P': 'no label', });
lyr_Renters_5.set('fieldLabels', {'DP04_0047P': 'no label', });
lyr_ManufacturingPopulation_6.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'DP05_0072P': 'no label', 'DP05_0072E': 'no label', 'DP05_0033E': 'no label', 'DP03_0035E': 'inline label - visible with data', 'DP03_0035P': 'no label', 'DP04_0063E': 'no label', 'DP04_0063P': 'no label', 'DP04_0065E': 'no label', 'DP04_0065P': 'no label', 'DP04_0069E': 'no label', 'DP04_0069P': 'no label', 'DP04_0058P': 'no label', 'DP04_0059P': 'no label', 'DP04_0060P': 'no label', 'DP04_0061P': 'no label', });
lyr_ManufacturingPopulation_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});