var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Homesbuilt20203_1 = new ol.format.GeoJSON();
var features_Homesbuilt20203_1 = format_Homesbuilt20203_1.readFeatures(json_Homesbuilt20203_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Homesbuilt20203_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Homesbuilt20203_1.addFeatures(features_Homesbuilt20203_1);
var lyr_Homesbuilt20203_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Homesbuilt20203_1, 
                style: style_Homesbuilt20203_1,
                popuplayertitle: 'Homes built 2020-3',
                interactive: true,
    title: 'Homes built 2020-3<br />\
    <img src="styles/legend/Homesbuilt20203_1_0.png" /> 0 - 500<br />\
    <img src="styles/legend/Homesbuilt20203_1_1.png" /> 500 - 1000<br />\
    <img src="styles/legend/Homesbuilt20203_1_2.png" /> 1000 - 1500<br />\
    <img src="styles/legend/Homesbuilt20203_1_3.png" /> 1500 - 2000<br />\
    <img src="styles/legend/Homesbuilt20203_1_4.png" /> 2000 - 2003<br />' });
var format_Asian_2 = new ol.format.GeoJSON();
var features_Asian_2 = format_Asian_2.readFeatures(json_Asian_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asian_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asian_2.addFeatures(features_Asian_2);
var lyr_Asian_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Asian_2, 
                style: style_Asian_2,
                popuplayertitle: 'Asian %',
                interactive: true,
    title: 'Asian %<br />\
    <img src="styles/legend/Asian_2_0.png" /> 0 - 4<br />\
    <img src="styles/legend/Asian_2_1.png" /> 4 - 10<br />\
    <img src="styles/legend/Asian_2_2.png" /> 10 - 16<br />\
    <img src="styles/legend/Asian_2_3.png" /> 16 - 23<br />\
    <img src="styles/legend/Asian_2_4.png" /> 23 - 31<br />\
    <img src="styles/legend/Asian_2_5.png" /> 31 - 40<br />\
    <img src="styles/legend/Asian_2_6.png" /> 40 - 51<br />\
    <img src="styles/legend/Asian_2_7.png" /> 51 - 66<br />\
    <img src="styles/legend/Asian_2_8.png" /> 66 - 100<br />' });
var format_PerCapitaIncome_3 = new ol.format.GeoJSON();
var features_PerCapitaIncome_3 = format_PerCapitaIncome_3.readFeatures(json_PerCapitaIncome_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerCapitaIncome_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerCapitaIncome_3.addFeatures(features_PerCapitaIncome_3);
var lyr_PerCapitaIncome_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerCapitaIncome_3, 
                style: style_PerCapitaIncome_3,
                popuplayertitle: 'Per Capita Income',
                interactive: false,
    title: 'Per Capita Income<br />\
    <img src="styles/legend/PerCapitaIncome_3_0.png" /> 0 - 20716<br />\
    <img src="styles/legend/PerCapitaIncome_3_1.png" /> 20716 - 30845<br />\
    <img src="styles/legend/PerCapitaIncome_3_2.png" /> 30845 - 41097<br />\
    <img src="styles/legend/PerCapitaIncome_3_3.png" /> 41097 - 52297<br />\
    <img src="styles/legend/PerCapitaIncome_3_4.png" /> 52297 - 65342<br />\
    <img src="styles/legend/PerCapitaIncome_3_5.png" /> 65342 - 80771<br />\
    <img src="styles/legend/PerCapitaIncome_3_6.png" /> 80771 - 99984<br />\
    <img src="styles/legend/PerCapitaIncome_3_7.png" /> 99984 - 124070<br />\
    <img src="styles/legend/PerCapitaIncome_3_8.png" /> 124070 - 160989<br />\
    <img src="styles/legend/PerCapitaIncome_3_9.png" /> 160989 - 241273<br />' });
var format_WarehouseTransportionJobs_4 = new ol.format.GeoJSON();
var features_WarehouseTransportionJobs_4 = format_WarehouseTransportionJobs_4.readFeatures(json_WarehouseTransportionJobs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarehouseTransportionJobs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarehouseTransportionJobs_4.addFeatures(features_WarehouseTransportionJobs_4);
var lyr_WarehouseTransportionJobs_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarehouseTransportionJobs_4, 
                style: style_WarehouseTransportionJobs_4,
                popuplayertitle: 'WarehouseTransportionJobs',
                interactive: true,
    title: 'WarehouseTransportionJobs<br />\
    <img src="styles/legend/WarehouseTransportionJobs_4_0.png" /> 0 - 36<br />\
    <img src="styles/legend/WarehouseTransportionJobs_4_1.png" /> 36 - 74<br />\
    <img src="styles/legend/WarehouseTransportionJobs_4_2.png" /> 74 - 113<br />\
    <img src="styles/legend/WarehouseTransportionJobs_4_3.png" /> 113 - 157<br />\
    <img src="styles/legend/WarehouseTransportionJobs_4_4.png" /> 157 - 206<br />\
    <img src="styles/legend/WarehouseTransportionJobs_4_5.png" /> 206 - 265<br />\
    <img src="styles/legend/WarehouseTransportionJobs_4_6.png" /> 265 - 338<br />\
    <img src="styles/legend/WarehouseTransportionJobs_4_7.png" /> 338 - 441<br />\
    <img src="styles/legend/WarehouseTransportionJobs_4_8.png" /> 441 - 622<br />\
    <img src="styles/legend/WarehouseTransportionJobs_4_9.png" /> 622 - 1007<br />' });
var format_meandrivingtime_5 = new ol.format.GeoJSON();
var features_meandrivingtime_5 = format_meandrivingtime_5.readFeatures(json_meandrivingtime_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_meandrivingtime_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_meandrivingtime_5.addFeatures(features_meandrivingtime_5);
var lyr_meandrivingtime_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_meandrivingtime_5, 
                style: style_meandrivingtime_5,
                popuplayertitle: 'meandrivingtime',
                interactive: true,
    title: 'meandrivingtime<br />\
    <img src="styles/legend/meandrivingtime_5_0.png" /> 7.3 - 10<br />\
    <img src="styles/legend/meandrivingtime_5_1.png" /> 10 - 20<br />\
    <img src="styles/legend/meandrivingtime_5_2.png" /> 20 - 30<br />\
    <img src="styles/legend/meandrivingtime_5_3.png" /> 30 - 40<br />\
    <img src="styles/legend/meandrivingtime_5_4.png" /> 40 - 50<br />\
    <img src="styles/legend/meandrivingtime_5_5.png" /> 50 - 60<br />\
    <img src="styles/legend/meandrivingtime_5_6.png" /> 60 - 70<br />\
    <img src="styles/legend/meandrivingtime_5_7.png" /> 70 - 72.5<br />' });
var format_Renters_6 = new ol.format.GeoJSON();
var features_Renters_6 = format_Renters_6.readFeatures(json_Renters_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Renters_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Renters_6.addFeatures(features_Renters_6);
var lyr_Renters_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Renters_6, 
                style: style_Renters_6,
                popuplayertitle: 'Renters %',
                interactive: true,
    title: 'Renters %<br />\
    <img src="styles/legend/Renters_6_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Renters_6_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Renters_6_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Renters_6_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Renters_6_4.png" /> 80 - 100<br />' });
var format_ManufacturingPop_7 = new ol.format.GeoJSON();
var features_ManufacturingPop_7 = format_ManufacturingPop_7.readFeatures(json_ManufacturingPop_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManufacturingPop_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManufacturingPop_7.addFeatures(features_ManufacturingPop_7);
var lyr_ManufacturingPop_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManufacturingPop_7, 
                style: style_ManufacturingPop_7,
                popuplayertitle: 'Manufacturing Pop',
                interactive: true,
    title: 'Manufacturing Pop<br />\
    <img src="styles/legend/ManufacturingPop_7_0.png" /> 0 - 59<br />\
    <img src="styles/legend/ManufacturingPop_7_1.png" /> 59 - 115<br />\
    <img src="styles/legend/ManufacturingPop_7_2.png" /> 115 - 175<br />\
    <img src="styles/legend/ManufacturingPop_7_3.png" /> 175 - 242<br />\
    <img src="styles/legend/ManufacturingPop_7_4.png" /> 242 - 320<br />\
    <img src="styles/legend/ManufacturingPop_7_5.png" /> 320 - 419<br />\
    <img src="styles/legend/ManufacturingPop_7_6.png" /> 419 - 542<br />\
    <img src="styles/legend/ManufacturingPop_7_7.png" /> 542 - 725<br />\
    <img src="styles/legend/ManufacturingPop_7_8.png" /> 725 - 1220<br />\
    <img src="styles/legend/ManufacturingPop_7_9.png" /> 1220 - 2547<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Homesbuilt20203_1.setVisible(true);lyr_Asian_2.setVisible(true);lyr_PerCapitaIncome_3.setVisible(true);lyr_WarehouseTransportionJobs_4.setVisible(true);lyr_meandrivingtime_5.setVisible(true);lyr_Renters_6.setVisible(true);lyr_ManufacturingPop_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Homesbuilt20203_1,lyr_Asian_2,lyr_PerCapitaIncome_3,lyr_WarehouseTransportionJobs_4,lyr_meandrivingtime_5,lyr_Renters_6,lyr_ManufacturingPop_7];
lyr_Homesbuilt20203_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'DP05_0072P': 'DP05_0072P', 'DP05_0072E': 'DP05_0072E', 'DP05_0033E': 'DP05_0033E', 'DP03_0035E': 'DP03_0035E', 'DP03_0035P': 'DP03_0035P', 'DP04_0063E': 'DP04_0063E', 'DP04_0063P': 'DP04_0063P', 'DP04_0065E': 'DP04_0065E', 'DP04_0065P': 'DP04_0065P', 'DP04_0069E': 'DP04_0069E', 'DP04_0069P': 'DP04_0069P', 'DP04_0058P': 'DP04_0058P', 'DP04_0059P': 'DP04_0059P', 'DP04_0060P': 'DP04_0060P', 'DP04_0061P': 'DP04_0061P', 'DP04_0016E': 'DP04_0016E', 'DP04_0016P': 'DP04_0016P', 'DP04_0017E': 'DP04_0017E', 'DP04_0017P': 'DP04_0017P', 'DP04_0018E': 'DP04_0018E', 'DP04_0018P': 'DP04_0018P', 'DP04_0019E': 'DP04_0019E', 'DP04_0019P': 'DP04_0019P', 'DP04_0020E': 'DP04_0020E', 'DP04_0020P': 'DP04_0020P', 'DP04_0021E': 'DP04_0021E', 'DP04_0021P': 'DP04_0021P', 'DP04_0022E': 'DP04_0022E', 'DP04_0022P': 'DP04_0022P', 'DP04_0023E': 'DP04_0023E', 'DP04_0024P': 'DP04_0024P', 'DP04_0025E': 'DP04_0025E', 'DP04_0025P': 'DP04_0025P', 'DP04_0026E': 'DP04_0026E', 'DP04_0026P': 'DP04_0026P', });
lyr_Asian_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'DP05_0072P': 'DP05_0072P', 'DP05_0072E': 'DP05_0072E', 'DP05_0033E': 'DP05_0033E', 'DP03_0035E': 'DP03_0035E', 'DP03_0035P': 'DP03_0035P', 'DP04_0063E': 'DP04_0063E', 'DP04_0063P': 'DP04_0063P', 'DP04_0065E': 'DP04_0065E', 'DP04_0065P': 'DP04_0065P', 'DP04_0069E': 'DP04_0069E', 'DP04_0069P': 'DP04_0069P', 'DP04_0058P': 'DP04_0058P', 'DP04_0059P': 'DP04_0059P', 'DP04_0060P': 'DP04_0060P', 'DP04_0061P': 'DP04_0061P', });
lyr_PerCapitaIncome_3.set('fieldAliases', {'DP03_0088E': 'DP03_0088E', });
lyr_WarehouseTransportionJobs_4.set('fieldAliases', {'DP03_0038E': 'DP03_0038E', });
lyr_meandrivingtime_5.set('fieldAliases', {'DP03_0025E': 'DP03_0025E', });
lyr_Renters_6.set('fieldAliases', {'DP04_0047P': 'DP04_0047P', });
lyr_ManufacturingPop_7.set('fieldAliases', {'DP03_0035E': 'DP03_0035E', });
lyr_Homesbuilt20203_1.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'DP05_0072P': 'TextEdit', 'DP05_0072E': 'TextEdit', 'DP05_0033E': 'TextEdit', 'DP03_0035E': 'TextEdit', 'DP03_0035P': 'TextEdit', 'DP04_0063E': 'TextEdit', 'DP04_0063P': 'TextEdit', 'DP04_0065E': 'TextEdit', 'DP04_0065P': 'TextEdit', 'DP04_0069E': 'TextEdit', 'DP04_0069P': 'TextEdit', 'DP04_0058P': 'TextEdit', 'DP04_0059P': 'TextEdit', 'DP04_0060P': 'TextEdit', 'DP04_0061P': 'TextEdit', 'DP04_0016E': 'TextEdit', 'DP04_0016P': 'TextEdit', 'DP04_0017E': 'TextEdit', 'DP04_0017P': 'TextEdit', 'DP04_0018E': 'TextEdit', 'DP04_0018P': 'TextEdit', 'DP04_0019E': 'TextEdit', 'DP04_0019P': 'TextEdit', 'DP04_0020E': 'TextEdit', 'DP04_0020P': 'TextEdit', 'DP04_0021E': 'TextEdit', 'DP04_0021P': 'TextEdit', 'DP04_0022E': 'TextEdit', 'DP04_0022P': 'TextEdit', 'DP04_0023E': 'TextEdit', 'DP04_0024P': 'TextEdit', 'DP04_0025E': 'TextEdit', 'DP04_0025P': 'TextEdit', 'DP04_0026E': 'TextEdit', 'DP04_0026P': 'TextEdit', });
lyr_Asian_2.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'DP05_0072P': 'TextEdit', 'DP05_0072E': 'TextEdit', 'DP05_0033E': 'TextEdit', 'DP03_0035E': 'TextEdit', 'DP03_0035P': 'TextEdit', 'DP04_0063E': 'TextEdit', 'DP04_0063P': 'TextEdit', 'DP04_0065E': 'TextEdit', 'DP04_0065P': 'TextEdit', 'DP04_0069E': 'TextEdit', 'DP04_0069P': 'TextEdit', 'DP04_0058P': 'TextEdit', 'DP04_0059P': 'TextEdit', 'DP04_0060P': 'TextEdit', 'DP04_0061P': 'TextEdit', });
lyr_PerCapitaIncome_3.set('fieldImages', {'DP03_0088E': 'TextEdit', });
lyr_WarehouseTransportionJobs_4.set('fieldImages', {'DP03_0038E': 'TextEdit', });
lyr_meandrivingtime_5.set('fieldImages', {'DP03_0025E': 'TextEdit', });
lyr_Renters_6.set('fieldImages', {'DP04_0047P': 'TextEdit', });
lyr_ManufacturingPop_7.set('fieldImages', {'DP03_0035E': 'TextEdit', });
lyr_Homesbuilt20203_1.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'DP05_0072P': 'no label', 'DP05_0072E': 'no label', 'DP05_0033E': 'no label', 'DP03_0035E': 'no label', 'DP03_0035P': 'no label', 'DP04_0063E': 'no label', 'DP04_0063P': 'no label', 'DP04_0065E': 'no label', 'DP04_0065P': 'no label', 'DP04_0069E': 'no label', 'DP04_0069P': 'no label', 'DP04_0058P': 'no label', 'DP04_0059P': 'no label', 'DP04_0060P': 'no label', 'DP04_0061P': 'no label', 'DP04_0016E': 'no label', 'DP04_0016P': 'no label', 'DP04_0017E': 'no label', 'DP04_0017P': 'no label', 'DP04_0018E': 'no label', 'DP04_0018P': 'no label', 'DP04_0019E': 'no label', 'DP04_0019P': 'no label', 'DP04_0020E': 'no label', 'DP04_0020P': 'no label', 'DP04_0021E': 'no label', 'DP04_0021P': 'no label', 'DP04_0022E': 'no label', 'DP04_0022P': 'no label', 'DP04_0023E': 'no label', 'DP04_0024P': 'no label', 'DP04_0025E': 'no label', 'DP04_0025P': 'no label', 'DP04_0026E': 'header label - always visible', 'DP04_0026P': 'no label', });
lyr_Asian_2.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'DP05_0072P': 'header label - always visible', 'DP05_0072E': 'header label - visible with data', 'DP05_0033E': 'no label', 'DP03_0035E': 'no label', 'DP03_0035P': 'no label', 'DP04_0063E': 'no label', 'DP04_0063P': 'no label', 'DP04_0065E': 'no label', 'DP04_0065P': 'no label', 'DP04_0069E': 'no label', 'DP04_0069P': 'no label', 'DP04_0058P': 'no label', 'DP04_0059P': 'no label', 'DP04_0060P': 'no label', 'DP04_0061P': 'no label', });
lyr_PerCapitaIncome_3.set('fieldLabels', {'DP03_0088E': 'no label', });
lyr_WarehouseTransportionJobs_4.set('fieldLabels', {'DP03_0038E': 'header label - always visible', });
lyr_meandrivingtime_5.set('fieldLabels', {'DP03_0025E': 'no label', });
lyr_Renters_6.set('fieldLabels', {'DP04_0047P': 'header label - visible with data', });
lyr_ManufacturingPop_7.set('fieldLabels', {'DP03_0035E': 'header label - visible with data', });
lyr_ManufacturingPop_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});