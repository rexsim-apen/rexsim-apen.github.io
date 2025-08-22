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
    title: 'Cars Available<br />\
    <img src="styles/legend/CarsAvailable_1_0.png" /> No Car<br />\
    <img src="styles/legend/CarsAvailable_1_1.png" /> 1 Car<br />\
    <img src="styles/legend/CarsAvailable_1_2.png" /> 2 Car<br />\
    <img src="styles/legend/CarsAvailable_1_3.png" /> 3+ Car<br />' });
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
    title: 'Decade w/ most homes constructed<br />\
    <img src="styles/legend/Decadewmosthomesconstructed_3_0.png" /> 2020 or later<br />\
    <img src="styles/legend/Decadewmosthomesconstructed_3_1.png" /> 2010-2019<br />\
    <img src="styles/legend/Decadewmosthomesconstructed_3_2.png" /> 2000-2009<br />\
    <img src="styles/legend/Decadewmosthomesconstructed_3_3.png" /> 1990-1999<br />\
    <img src="styles/legend/Decadewmosthomesconstructed_3_4.png" /> 1980-1989<br />\
    <img src="styles/legend/Decadewmosthomesconstructed_3_5.png" /> 1970-1979<br />\
    <img src="styles/legend/Decadewmosthomesconstructed_3_6.png" /> 1960-1969<br />\
    <img src="styles/legend/Decadewmosthomesconstructed_3_7.png" /> 1950-59<br />\
    <img src="styles/legend/Decadewmosthomesconstructed_3_8.png" /> 1940-49<br />\
    <img src="styles/legend/Decadewmosthomesconstructed_3_9.png" /> -1939<br />' });
var format_PerCapitaIncome_4 = new ol.format.GeoJSON();
var features_PerCapitaIncome_4 = format_PerCapitaIncome_4.readFeatures(json_PerCapitaIncome_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerCapitaIncome_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerCapitaIncome_4.addFeatures(features_PerCapitaIncome_4);
var lyr_PerCapitaIncome_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerCapitaIncome_4, 
                style: style_PerCapitaIncome_4,
                popuplayertitle: 'Per Capita Income',
                interactive: false,
    title: 'Per Capita Income<br />\
    <img src="styles/legend/PerCapitaIncome_4_0.png" /> 0 - 20716<br />\
    <img src="styles/legend/PerCapitaIncome_4_1.png" /> 20716 - 30845<br />\
    <img src="styles/legend/PerCapitaIncome_4_2.png" /> 30845 - 41097<br />\
    <img src="styles/legend/PerCapitaIncome_4_3.png" /> 41097 - 52297<br />\
    <img src="styles/legend/PerCapitaIncome_4_4.png" /> 52297 - 65342<br />\
    <img src="styles/legend/PerCapitaIncome_4_5.png" /> 65342 - 80771<br />\
    <img src="styles/legend/PerCapitaIncome_4_6.png" /> 80771 - 99984<br />\
    <img src="styles/legend/PerCapitaIncome_4_7.png" /> 99984 - 124070<br />\
    <img src="styles/legend/PerCapitaIncome_4_8.png" /> 124070 - 160989<br />\
    <img src="styles/legend/PerCapitaIncome_4_9.png" /> 160989 - 241273<br />' });
var format_HouseholdIncomeMode_5 = new ol.format.GeoJSON();
var features_HouseholdIncomeMode_5 = format_HouseholdIncomeMode_5.readFeatures(json_HouseholdIncomeMode_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HouseholdIncomeMode_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HouseholdIncomeMode_5.addFeatures(features_HouseholdIncomeMode_5);
var lyr_HouseholdIncomeMode_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HouseholdIncomeMode_5, 
                style: style_HouseholdIncomeMode_5,
                popuplayertitle: 'HouseholdIncome(Mode)',
                interactive: false,
    title: 'HouseholdIncome(Mode)<br />\
    <img src="styles/legend/HouseholdIncomeMode_5_0.png" /> 200,000 or more<br />\
    <img src="styles/legend/HouseholdIncomeMode_5_1.png" /> 150,000-199,999<br />\
    <img src="styles/legend/HouseholdIncomeMode_5_2.png" /> 100,000-149,999<br />\
    <img src="styles/legend/HouseholdIncomeMode_5_3.png" /> 75,000-99,999<br />\
    <img src="styles/legend/HouseholdIncomeMode_5_4.png" /> 50,000-74,999<br />\
    <img src="styles/legend/HouseholdIncomeMode_5_5.png" /> 35,000-49,999<br />\
    <img src="styles/legend/HouseholdIncomeMode_5_6.png" /> 25,000-34,999<br />\
    <img src="styles/legend/HouseholdIncomeMode_5_7.png" /> 15,000-24,999<br />\
    <img src="styles/legend/HouseholdIncomeMode_5_8.png" /> 10,000-14,999<br />\
    <img src="styles/legend/HouseholdIncomeMode_5_9.png" /> under 10,000<br />' });
var format_nohealthinsurance_6 = new ol.format.GeoJSON();
var features_nohealthinsurance_6 = format_nohealthinsurance_6.readFeatures(json_nohealthinsurance_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nohealthinsurance_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nohealthinsurance_6.addFeatures(features_nohealthinsurance_6);
var lyr_nohealthinsurance_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nohealthinsurance_6, 
                style: style_nohealthinsurance_6,
                popuplayertitle: 'nohealthinsurance',
                interactive: true,
    title: 'nohealthinsurance<br />\
    <img src="styles/legend/nohealthinsurance_6_0.png" /> 0 - 77<br />\
    <img src="styles/legend/nohealthinsurance_6_1.png" /> 77 - 159<br />\
    <img src="styles/legend/nohealthinsurance_6_2.png" /> 159 - 249<br />\
    <img src="styles/legend/nohealthinsurance_6_3.png" /> 249 - 352<br />\
    <img src="styles/legend/nohealthinsurance_6_4.png" /> 352 - 468<br />\
    <img src="styles/legend/nohealthinsurance_6_5.png" /> 468 - 601<br />\
    <img src="styles/legend/nohealthinsurance_6_6.png" /> 601 - 756<br />\
    <img src="styles/legend/nohealthinsurance_6_7.png" /> 756 - 951<br />\
    <img src="styles/legend/nohealthinsurance_6_8.png" /> 951 - 1242<br />\
    <img src="styles/legend/nohealthinsurance_6_9.png" /> 1242 - 1983<br />' });
var format_healthcare_education_7 = new ol.format.GeoJSON();
var features_healthcare_education_7 = format_healthcare_education_7.readFeatures(json_healthcare_education_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_healthcare_education_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_healthcare_education_7.addFeatures(features_healthcare_education_7);
var lyr_healthcare_education_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_healthcare_education_7, 
                style: style_healthcare_education_7,
                popuplayertitle: 'healthcare_education',
                interactive: true,
    title: 'healthcare_education<br />\
    <img src="styles/legend/healthcare_education_7_0.png" /> 0 - 500<br />\
    <img src="styles/legend/healthcare_education_7_1.png" /> 500 - 1000<br />\
    <img src="styles/legend/healthcare_education_7_2.png" /> 1000 - 1500<br />\
    <img src="styles/legend/healthcare_education_7_3.png" /> 1500 - 2000<br />\
    <img src="styles/legend/healthcare_education_7_4.png" /> 2000 - 2500<br />\
    <img src="styles/legend/healthcare_education_7_5.png" /> 2500 - 3000<br />\
    <img src="styles/legend/healthcare_education_7_6.png" /> 3000 - 3500<br />\
    <img src="styles/legend/healthcare_education_7_7.png" /> 3500 - 4000<br />\
    <img src="styles/legend/healthcare_education_7_8.png" /> 4000 - 4500<br />\
    <img src="styles/legend/healthcare_education_7_9.png" /> 4500 - 5000<br />\
    <img src="styles/legend/healthcare_education_7_10.png" /> 5000 - 5047<br />' });
var format_WarehouseTransportionJobs_8 = new ol.format.GeoJSON();
var features_WarehouseTransportionJobs_8 = format_WarehouseTransportionJobs_8.readFeatures(json_WarehouseTransportionJobs_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarehouseTransportionJobs_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarehouseTransportionJobs_8.addFeatures(features_WarehouseTransportionJobs_8);
var lyr_WarehouseTransportionJobs_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarehouseTransportionJobs_8, 
                style: style_WarehouseTransportionJobs_8,
                popuplayertitle: 'WarehouseTransportionJobs',
                interactive: true,
    title: 'WarehouseTransportionJobs<br />\
    <img src="styles/legend/WarehouseTransportionJobs_8_0.png" /> 0 - 36<br />\
    <img src="styles/legend/WarehouseTransportionJobs_8_1.png" /> 36 - 74<br />\
    <img src="styles/legend/WarehouseTransportionJobs_8_2.png" /> 74 - 113<br />\
    <img src="styles/legend/WarehouseTransportionJobs_8_3.png" /> 113 - 157<br />\
    <img src="styles/legend/WarehouseTransportionJobs_8_4.png" /> 157 - 206<br />\
    <img src="styles/legend/WarehouseTransportionJobs_8_5.png" /> 206 - 265<br />\
    <img src="styles/legend/WarehouseTransportionJobs_8_6.png" /> 265 - 338<br />\
    <img src="styles/legend/WarehouseTransportionJobs_8_7.png" /> 338 - 441<br />\
    <img src="styles/legend/WarehouseTransportionJobs_8_8.png" /> 441 - 622<br />\
    <img src="styles/legend/WarehouseTransportionJobs_8_9.png" /> 622 - 1007<br />' });
var format_meandrivingtime_9 = new ol.format.GeoJSON();
var features_meandrivingtime_9 = format_meandrivingtime_9.readFeatures(json_meandrivingtime_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_meandrivingtime_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_meandrivingtime_9.addFeatures(features_meandrivingtime_9);
var lyr_meandrivingtime_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_meandrivingtime_9, 
                style: style_meandrivingtime_9,
                popuplayertitle: 'meandrivingtime',
                interactive: true,
    title: 'meandrivingtime<br />\
    <img src="styles/legend/meandrivingtime_9_0.png" /> 7.3 - 10<br />\
    <img src="styles/legend/meandrivingtime_9_1.png" /> 10 - 20<br />\
    <img src="styles/legend/meandrivingtime_9_2.png" /> 20 - 30<br />\
    <img src="styles/legend/meandrivingtime_9_3.png" /> 30 - 40<br />\
    <img src="styles/legend/meandrivingtime_9_4.png" /> 40 - 50<br />\
    <img src="styles/legend/meandrivingtime_9_5.png" /> 50 - 60<br />\
    <img src="styles/legend/meandrivingtime_9_6.png" /> 60 - 70<br />\
    <img src="styles/legend/meandrivingtime_9_7.png" /> 70 - 72.5<br />' });
var format_GasElectricSolar_10 = new ol.format.GeoJSON();
var features_GasElectricSolar_10 = format_GasElectricSolar_10.readFeatures(json_GasElectricSolar_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasElectricSolar_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GasElectricSolar_10.addFeatures(features_GasElectricSolar_10);
var lyr_GasElectricSolar_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GasElectricSolar_10, 
                style: style_GasElectricSolar_10,
                popuplayertitle: 'Gas, Electric, Solar %',
                interactive: true,
    title: 'Gas, Electric, Solar %<br />\
    <img src="styles/legend/GasElectricSolar_10_0.png" /> Solar<br />\
    <img src="styles/legend/GasElectricSolar_10_1.png" /> Gas<br />\
    <img src="styles/legend/GasElectricSolar_10_2.png" /> Electric<br />' });
var format_GRAPI35plus_11 = new ol.format.GeoJSON();
var features_GRAPI35plus_11 = format_GRAPI35plus_11.readFeatures(json_GRAPI35plus_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRAPI35plus_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRAPI35plus_11.addFeatures(features_GRAPI35plus_11);
var lyr_GRAPI35plus_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRAPI35plus_11, 
                style: style_GRAPI35plus_11,
                popuplayertitle: 'GRAPI35plus',
                interactive: true,
    title: 'GRAPI35plus<br />\
    <img src="styles/legend/GRAPI35plus_11_0.png" /> 0 - 86<br />\
    <img src="styles/legend/GRAPI35plus_11_1.png" /> 86 - 175<br />\
    <img src="styles/legend/GRAPI35plus_11_2.png" /> 175 - 267<br />\
    <img src="styles/legend/GRAPI35plus_11_3.png" /> 267 - 368<br />\
    <img src="styles/legend/GRAPI35plus_11_4.png" /> 368 - 480<br />\
    <img src="styles/legend/GRAPI35plus_11_5.png" /> 480 - 612<br />\
    <img src="styles/legend/GRAPI35plus_11_6.png" /> 612 - 784<br />\
    <img src="styles/legend/GRAPI35plus_11_7.png" /> 784 - 1045<br />\
    <img src="styles/legend/GRAPI35plus_11_8.png" /> 1045 - 1737<br />\
    <img src="styles/legend/GRAPI35plus_11_9.png" /> 1737 - 4811<br />' });
var format_MedianAge_12 = new ol.format.GeoJSON();
var features_MedianAge_12 = format_MedianAge_12.readFeatures(json_MedianAge_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MedianAge_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MedianAge_12.addFeatures(features_MedianAge_12);
var lyr_MedianAge_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MedianAge_12, 
                style: style_MedianAge_12,
                popuplayertitle: 'MedianAge',
                interactive: true,
    title: 'MedianAge<br />\
    <img src="styles/legend/MedianAge_12_0.png" /> 10.8 - 20<br />\
    <img src="styles/legend/MedianAge_12_1.png" /> 20 - 30<br />\
    <img src="styles/legend/MedianAge_12_2.png" /> 30 - 40<br />\
    <img src="styles/legend/MedianAge_12_3.png" /> 40 - 50<br />\
    <img src="styles/legend/MedianAge_12_4.png" /> 50 - 60<br />\
    <img src="styles/legend/MedianAge_12_5.png" /> 60 - 70<br />\
    <img src="styles/legend/MedianAge_12_6.png" /> 70 - 80<br />\
    <img src="styles/legend/MedianAge_12_7.png" /> 80 - 85.1<br />' });
var format_SMOCAPI_13 = new ol.format.GeoJSON();
var features_SMOCAPI_13 = format_SMOCAPI_13.readFeatures(json_SMOCAPI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMOCAPI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMOCAPI_13.addFeatures(features_SMOCAPI_13);
var lyr_SMOCAPI_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMOCAPI_13, 
                style: style_SMOCAPI_13,
                popuplayertitle: 'SMOCAPI',
                interactive: true,
    title: 'SMOCAPI<br />\
    <img src="styles/legend/SMOCAPI_13_0.png" /> 0 - 75<br />\
    <img src="styles/legend/SMOCAPI_13_1.png" /> 75 - 154<br />\
    <img src="styles/legend/SMOCAPI_13_2.png" /> 154 - 230<br />\
    <img src="styles/legend/SMOCAPI_13_3.png" /> 230 - 309<br />\
    <img src="styles/legend/SMOCAPI_13_4.png" /> 309 - 398<br />\
    <img src="styles/legend/SMOCAPI_13_5.png" /> 398 - 508<br />\
    <img src="styles/legend/SMOCAPI_13_6.png" /> 508 - 653<br />\
    <img src="styles/legend/SMOCAPI_13_7.png" /> 653 - 878<br />\
    <img src="styles/legend/SMOCAPI_13_8.png" /> 878 - 1489<br />\
    <img src="styles/legend/SMOCAPI_13_9.png" /> 1489 - 2943<br />' });
var format_Renters_14 = new ol.format.GeoJSON();
var features_Renters_14 = format_Renters_14.readFeatures(json_Renters_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Renters_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Renters_14.addFeatures(features_Renters_14);
var lyr_Renters_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Renters_14, 
                style: style_Renters_14,
                popuplayertitle: 'Renters %',
                interactive: true,
    title: 'Renters %<br />\
    <img src="styles/legend/Renters_14_0.png" /> 0 - 10<br />\
    <img src="styles/legend/Renters_14_1.png" /> 10 - 20<br />\
    <img src="styles/legend/Renters_14_2.png" /> 20 - 30<br />\
    <img src="styles/legend/Renters_14_3.png" /> 30 - 40<br />\
    <img src="styles/legend/Renters_14_4.png" /> 40 - 50<br />\
    <img src="styles/legend/Renters_14_5.png" /> 50 - 60<br />\
    <img src="styles/legend/Renters_14_6.png" /> 60 - 70<br />\
    <img src="styles/legend/Renters_14_7.png" /> 70 - 80<br />\
    <img src="styles/legend/Renters_14_8.png" /> 80 - 90<br />\
    <img src="styles/legend/Renters_14_9.png" /> 90 - 100<br />' });
var format_ManufacturingPop_15 = new ol.format.GeoJSON();
var features_ManufacturingPop_15 = format_ManufacturingPop_15.readFeatures(json_ManufacturingPop_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManufacturingPop_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManufacturingPop_15.addFeatures(features_ManufacturingPop_15);
var lyr_ManufacturingPop_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManufacturingPop_15, 
                style: style_ManufacturingPop_15,
                popuplayertitle: 'Manufacturing Pop',
                interactive: true,
    title: 'Manufacturing Pop<br />\
    <img src="styles/legend/ManufacturingPop_15_0.png" /> 0 - 59<br />\
    <img src="styles/legend/ManufacturingPop_15_1.png" /> 59 - 115<br />\
    <img src="styles/legend/ManufacturingPop_15_2.png" /> 115 - 175<br />\
    <img src="styles/legend/ManufacturingPop_15_3.png" /> 175 - 242<br />\
    <img src="styles/legend/ManufacturingPop_15_4.png" /> 242 - 320<br />\
    <img src="styles/legend/ManufacturingPop_15_5.png" /> 320 - 419<br />\
    <img src="styles/legend/ManufacturingPop_15_6.png" /> 419 - 542<br />\
    <img src="styles/legend/ManufacturingPop_15_7.png" /> 542 - 725<br />\
    <img src="styles/legend/ManufacturingPop_15_8.png" /> 725 - 1220<br />\
    <img src="styles/legend/ManufacturingPop_15_9.png" /> 1220 - 2547<br />' });
var format_Asian_16 = new ol.format.GeoJSON();
var features_Asian_16 = format_Asian_16.readFeatures(json_Asian_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asian_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asian_16.addFeatures(features_Asian_16);
var lyr_Asian_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Asian_16, 
                style: style_Asian_16,
                popuplayertitle: 'Asian %',
                interactive: true,
    title: 'Asian %<br />\
    <img src="styles/legend/Asian_16_0.png" /> 0 - 4<br />\
    <img src="styles/legend/Asian_16_1.png" /> 4 - 10<br />\
    <img src="styles/legend/Asian_16_2.png" /> 10 - 16<br />\
    <img src="styles/legend/Asian_16_3.png" /> 16 - 23<br />\
    <img src="styles/legend/Asian_16_4.png" /> 23 - 31<br />\
    <img src="styles/legend/Asian_16_5.png" /> 31 - 40<br />\
    <img src="styles/legend/Asian_16_6.png" /> 40 - 51<br />\
    <img src="styles/legend/Asian_16_7.png" /> 51 - 66<br />\
    <img src="styles/legend/Asian_16_8.png" /> 66 - 100<br />' });
var format_priority_development_areas_pba2050plus_17 = new ol.format.GeoJSON();
var features_priority_development_areas_pba2050plus_17 = format_priority_development_areas_pba2050plus_17.readFeatures(json_priority_development_areas_pba2050plus_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_priority_development_areas_pba2050plus_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_priority_development_areas_pba2050plus_17.addFeatures(features_priority_development_areas_pba2050plus_17);
var lyr_priority_development_areas_pba2050plus_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_priority_development_areas_pba2050plus_17, 
                style: style_priority_development_areas_pba2050plus_17,
                popuplayertitle: 'priority_development_areas_pba2050plus',
                interactive: true,
                title: '<img src="styles/legend/priority_development_areas_pba2050plus_17.png" /> priority_development_areas_pba2050plus'
            });
var format_priority_production_areas_current_18 = new ol.format.GeoJSON();
var features_priority_production_areas_current_18 = format_priority_production_areas_current_18.readFeatures(json_priority_production_areas_current_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_priority_production_areas_current_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_priority_production_areas_current_18.addFeatures(features_priority_production_areas_current_18);
var lyr_priority_production_areas_current_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_priority_production_areas_current_18, 
                style: style_priority_production_areas_current_18,
                popuplayertitle: 'priority_production_areas_current',
                interactive: true,
                title: '<img src="styles/legend/priority_production_areas_current_18.png" /> priority_production_areas_current'
            });
var format_california_refineries_19 = new ol.format.GeoJSON();
var features_california_refineries_19 = format_california_refineries_19.readFeatures(json_california_refineries_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_california_refineries_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_california_refineries_19.addFeatures(features_california_refineries_19);
var lyr_california_refineries_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_california_refineries_19, 
                style: style_california_refineries_19,
                popuplayertitle: 'california_refineries',
                interactive: true,
                title: '<img src="styles/legend/california_refineries_19.png" /> california_refineries'
            });
var format_APEN_20 = new ol.format.GeoJSON();
var features_APEN_20 = format_APEN_20.readFeatures(json_APEN_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APEN_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APEN_20.addFeatures(features_APEN_20);
var lyr_APEN_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APEN_20, 
                style: style_APEN_20,
                popuplayertitle: 'APEN',
                interactive: true,
                title: '<img src="styles/legend/APEN_20.png" /> APEN'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CarsAvailable_1.setVisible(true);lyr_Homesbuilt20203_2.setVisible(true);lyr_Decadewmosthomesconstructed_3.setVisible(true);lyr_PerCapitaIncome_4.setVisible(true);lyr_HouseholdIncomeMode_5.setVisible(true);lyr_nohealthinsurance_6.setVisible(true);lyr_healthcare_education_7.setVisible(true);lyr_WarehouseTransportionJobs_8.setVisible(true);lyr_meandrivingtime_9.setVisible(true);lyr_GasElectricSolar_10.setVisible(true);lyr_GRAPI35plus_11.setVisible(true);lyr_MedianAge_12.setVisible(true);lyr_SMOCAPI_13.setVisible(true);lyr_Renters_14.setVisible(true);lyr_ManufacturingPop_15.setVisible(true);lyr_Asian_16.setVisible(true);lyr_priority_development_areas_pba2050plus_17.setVisible(true);lyr_priority_production_areas_current_18.setVisible(true);lyr_california_refineries_19.setVisible(true);lyr_APEN_20.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CarsAvailable_1,lyr_Homesbuilt20203_2,lyr_Decadewmosthomesconstructed_3,lyr_PerCapitaIncome_4,lyr_HouseholdIncomeMode_5,lyr_nohealthinsurance_6,lyr_healthcare_education_7,lyr_WarehouseTransportionJobs_8,lyr_meandrivingtime_9,lyr_GasElectricSolar_10,lyr_GRAPI35plus_11,lyr_MedianAge_12,lyr_SMOCAPI_13,lyr_Renters_14,lyr_ManufacturingPop_15,lyr_Asian_16,lyr_priority_development_areas_pba2050plus_17,lyr_priority_production_areas_current_18,lyr_california_refineries_19,lyr_APEN_20];
lyr_CarsAvailable_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'DP05_0072P': 'DP05_0072P', 'DP05_0072E': 'DP05_0072E', 'DP05_0033E': 'DP05_0033E', 'DP03_0035E': 'DP03_0035E', 'DP03_0035P': 'DP03_0035P', 'DP04_0063E': 'DP04_0063E', 'DP04_0063P': 'DP04_0063P', 'DP04_0065E': 'DP04_0065E', 'DP04_0065P': 'DP04_0065P', 'DP04_0069E': 'DP04_0069E', 'DP04_0069P': 'DP04_0069P', 'DP04_0058P': 'DP04_0058P', 'DP04_0059P': 'DP04_0059P', 'DP04_0060P': 'DP04_0060P', 'DP04_0061P': 'DP04_0061P', });
lyr_Homesbuilt20203_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'DP05_0072P': 'DP05_0072P', 'DP05_0072E': 'DP05_0072E', 'DP05_0033E': 'DP05_0033E', 'DP03_0035E': 'DP03_0035E', 'DP03_0035P': 'DP03_0035P', 'DP04_0063E': 'DP04_0063E', 'DP04_0063P': 'DP04_0063P', 'DP04_0065E': 'DP04_0065E', 'DP04_0065P': 'DP04_0065P', 'DP04_0069E': 'DP04_0069E', 'DP04_0069P': 'DP04_0069P', 'DP04_0058P': 'DP04_0058P', 'DP04_0059P': 'DP04_0059P', 'DP04_0060P': 'DP04_0060P', 'DP04_0061P': 'DP04_0061P', 'DP04_0016E': 'DP04_0016E', 'DP04_0016P': 'DP04_0016P', 'DP04_0017E': 'DP04_0017E', 'DP04_0017P': 'DP04_0017P', 'DP04_0018E': 'DP04_0018E', 'DP04_0018P': 'DP04_0018P', 'DP04_0019E': 'DP04_0019E', 'DP04_0019P': 'DP04_0019P', 'DP04_0020E': 'DP04_0020E', 'DP04_0020P': 'DP04_0020P', 'DP04_0021E': 'DP04_0021E', 'DP04_0021P': 'DP04_0021P', 'DP04_0022E': 'DP04_0022E', 'DP04_0022P': 'DP04_0022P', 'DP04_0023E': 'DP04_0023E', 'DP04_0024P': 'DP04_0024P', 'DP04_0025E': 'DP04_0025E', 'DP04_0025P': 'DP04_0025P', 'DP04_0026E': 'DP04_0026E', 'DP04_0026P': 'DP04_0026P', });
lyr_Decadewmosthomesconstructed_3.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'DP05_0072P': 'DP05_0072P', 'DP05_0072E': 'DP05_0072E', 'DP05_0033E': 'DP05_0033E', 'DP03_0035E': 'DP03_0035E', 'DP03_0035P': 'DP03_0035P', 'DP04_0063E': 'DP04_0063E', 'DP04_0063P': 'DP04_0063P', 'DP04_0065E': 'DP04_0065E', 'DP04_0065P': 'DP04_0065P', 'DP04_0069E': 'DP04_0069E', 'DP04_0069P': 'DP04_0069P', 'DP04_0058P': 'DP04_0058P', 'DP04_0059P': 'DP04_0059P', 'DP04_0060P': 'DP04_0060P', 'DP04_0061P': 'DP04_0061P', 'DP04_0016E': 'DP04_0016E', 'DP04_0016P': 'DP04_0016P', 'DP04_0017E': 'DP04_0017E', 'DP04_0017P': 'DP04_0017P', 'DP04_0018E': 'DP04_0018E', 'DP04_0018P': 'DP04_0018P', 'DP04_0019E': 'DP04_0019E', 'DP04_0019P': 'DP04_0019P', 'DP04_0020E': 'DP04_0020E', 'DP04_0020P': 'DP04_0020P', 'DP04_0021E': 'DP04_0021E', 'DP04_0021P': 'DP04_0021P', 'DP04_0022E': 'DP04_0022E', 'DP04_0022P': 'DP04_0022P', 'DP04_0023E': 'DP04_0023E', 'DP04_0024P': 'DP04_0024P', 'DP04_0025E': 'DP04_0025E', 'DP04_0025P': 'DP04_0025P', 'DP04_0026E': 'DP04_0026E', 'DP04_0026P': 'DP04_0026P', });
lyr_PerCapitaIncome_4.set('fieldAliases', {'DP03_0088E': 'DP03_0088E', });
lyr_HouseholdIncomeMode_5.set('fieldAliases', {'DP03_0052E': 'DP03_0052E', 'DP03_0052P': 'DP03_0052P', 'DP03_0053E': 'DP03_0053E', 'DP03_0053P': 'DP03_0053P', 'DP03_0054E': 'DP03_0054E', 'DP03_0054P': 'DP03_0054P', 'DP03_0055E': 'DP03_0055E', 'DP03_0055P': 'DP03_0055P', 'DP03_0056E': 'DP03_0056E', 'DP03_0056P': 'DP03_0056P', 'DP03_0057E': 'DP03_0057E', 'DP03_0057P': 'DP03_0057P', 'DP03_0058E': 'DP03_0058E', 'DP03_0058P': 'DP03_0058P', 'DP03_0059E': 'DP03_0059E', 'DP03_0059P': 'DP03_0059P', 'DP03_0060E': 'DP03_0060E', 'DP03_0060P': 'DP03_0060P', 'DP03_0061E': 'DP03_0061E', 'DP03_0061P': 'DP03_0061P', });
lyr_nohealthinsurance_6.set('fieldAliases', {'DP03_0099E': 'DP03_0099E', });
lyr_healthcare_education_7.set('fieldAliases', {'DP03_0042E': 'DP03_0042E', });
lyr_WarehouseTransportionJobs_8.set('fieldAliases', {'DP03_0038E': 'DP03_0038E', });
lyr_meandrivingtime_9.set('fieldAliases', {'DP03_0025E': 'DP03_0025E', });
lyr_GasElectricSolar_10.set('fieldAliases', {'DP04_0063P': 'DP04_0063P', 'DP04_0065P': 'DP04_0065P', 'DP04_0069P': 'DP04_0069P', });
lyr_GRAPI35plus_11.set('fieldAliases', {'DP04_0142E': 'DP04_0142E', });
lyr_MedianAge_12.set('fieldAliases', {'DP05_0018E': 'DP05_0018E', });
lyr_SMOCAPI_13.set('fieldAliases', {'DP04_0117E': 'DP04_0117E', });
lyr_Renters_14.set('fieldAliases', {'DP04_0047P': 'DP04_0047P', });
lyr_ManufacturingPop_15.set('fieldAliases', {'DP03_0035E': 'DP03_0035E', });
lyr_Asian_16.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'DP05_0072P': 'DP05_0072P', 'DP05_0072E': 'DP05_0072E', 'DP05_0033E': 'DP05_0033E', 'DP03_0035E': 'DP03_0035E', 'DP03_0035P': 'DP03_0035P', 'DP04_0063E': 'DP04_0063E', 'DP04_0063P': 'DP04_0063P', 'DP04_0065E': 'DP04_0065E', 'DP04_0065P': 'DP04_0065P', 'DP04_0069E': 'DP04_0069E', 'DP04_0069P': 'DP04_0069P', 'DP04_0058P': 'DP04_0058P', 'DP04_0059P': 'DP04_0059P', 'DP04_0060P': 'DP04_0060P', 'DP04_0061P': 'DP04_0061P', });
lyr_priority_development_areas_pba2050plus_17.set('fieldAliases', {'county': 'county', 'jurisdicti': 'jurisdicti', 'pda_name': 'pda_name', });
lyr_priority_production_areas_current_18.set('fieldAliases', {'globalid': 'globalid', 'county': 'county', 'jurisdicti': 'jurisdicti', 'ppa_name': 'ppa_name', 'acres': 'acres', });
lyr_california_refineries_19.set('fieldAliases', {'name': 'name', });
lyr_APEN_20.set('fieldAliases', {'id': 'id', 'APEN': 'APEN', });
lyr_CarsAvailable_1.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'DP05_0072P': 'TextEdit', 'DP05_0072E': 'TextEdit', 'DP05_0033E': 'TextEdit', 'DP03_0035E': 'TextEdit', 'DP03_0035P': 'TextEdit', 'DP04_0063E': 'TextEdit', 'DP04_0063P': 'TextEdit', 'DP04_0065E': 'TextEdit', 'DP04_0065P': 'TextEdit', 'DP04_0069E': 'TextEdit', 'DP04_0069P': 'TextEdit', 'DP04_0058P': 'TextEdit', 'DP04_0059P': 'TextEdit', 'DP04_0060P': 'TextEdit', 'DP04_0061P': 'TextEdit', });
lyr_Homesbuilt20203_2.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'DP05_0072P': 'TextEdit', 'DP05_0072E': 'TextEdit', 'DP05_0033E': 'TextEdit', 'DP03_0035E': 'TextEdit', 'DP03_0035P': 'TextEdit', 'DP04_0063E': 'TextEdit', 'DP04_0063P': 'TextEdit', 'DP04_0065E': 'TextEdit', 'DP04_0065P': 'TextEdit', 'DP04_0069E': 'TextEdit', 'DP04_0069P': 'TextEdit', 'DP04_0058P': 'TextEdit', 'DP04_0059P': 'TextEdit', 'DP04_0060P': 'TextEdit', 'DP04_0061P': 'TextEdit', 'DP04_0016E': 'TextEdit', 'DP04_0016P': 'TextEdit', 'DP04_0017E': 'TextEdit', 'DP04_0017P': 'TextEdit', 'DP04_0018E': 'TextEdit', 'DP04_0018P': 'TextEdit', 'DP04_0019E': 'TextEdit', 'DP04_0019P': 'TextEdit', 'DP04_0020E': 'TextEdit', 'DP04_0020P': 'TextEdit', 'DP04_0021E': 'TextEdit', 'DP04_0021P': 'TextEdit', 'DP04_0022E': 'TextEdit', 'DP04_0022P': 'TextEdit', 'DP04_0023E': 'TextEdit', 'DP04_0024P': 'TextEdit', 'DP04_0025E': 'TextEdit', 'DP04_0025P': 'TextEdit', 'DP04_0026E': 'TextEdit', 'DP04_0026P': 'TextEdit', });
lyr_Decadewmosthomesconstructed_3.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'DP05_0072P': 'TextEdit', 'DP05_0072E': 'TextEdit', 'DP05_0033E': 'TextEdit', 'DP03_0035E': 'TextEdit', 'DP03_0035P': 'TextEdit', 'DP04_0063E': 'TextEdit', 'DP04_0063P': 'TextEdit', 'DP04_0065E': 'TextEdit', 'DP04_0065P': 'TextEdit', 'DP04_0069E': 'TextEdit', 'DP04_0069P': 'TextEdit', 'DP04_0058P': 'TextEdit', 'DP04_0059P': 'TextEdit', 'DP04_0060P': 'TextEdit', 'DP04_0061P': 'TextEdit', 'DP04_0016E': 'TextEdit', 'DP04_0016P': 'TextEdit', 'DP04_0017E': 'TextEdit', 'DP04_0017P': 'TextEdit', 'DP04_0018E': 'TextEdit', 'DP04_0018P': 'TextEdit', 'DP04_0019E': 'TextEdit', 'DP04_0019P': 'TextEdit', 'DP04_0020E': 'TextEdit', 'DP04_0020P': 'TextEdit', 'DP04_0021E': 'TextEdit', 'DP04_0021P': 'TextEdit', 'DP04_0022E': 'TextEdit', 'DP04_0022P': 'TextEdit', 'DP04_0023E': 'TextEdit', 'DP04_0024P': 'TextEdit', 'DP04_0025E': 'TextEdit', 'DP04_0025P': 'TextEdit', 'DP04_0026E': 'TextEdit', 'DP04_0026P': 'TextEdit', });
lyr_PerCapitaIncome_4.set('fieldImages', {'DP03_0088E': 'TextEdit', });
lyr_HouseholdIncomeMode_5.set('fieldImages', {'DP03_0052E': 'TextEdit', 'DP03_0052P': 'TextEdit', 'DP03_0053E': 'TextEdit', 'DP03_0053P': 'TextEdit', 'DP03_0054E': 'TextEdit', 'DP03_0054P': 'TextEdit', 'DP03_0055E': 'TextEdit', 'DP03_0055P': 'TextEdit', 'DP03_0056E': 'TextEdit', 'DP03_0056P': 'TextEdit', 'DP03_0057E': 'TextEdit', 'DP03_0057P': 'TextEdit', 'DP03_0058E': 'TextEdit', 'DP03_0058P': 'TextEdit', 'DP03_0059E': 'TextEdit', 'DP03_0059P': 'TextEdit', 'DP03_0060E': 'TextEdit', 'DP03_0060P': 'TextEdit', 'DP03_0061E': 'TextEdit', 'DP03_0061P': 'TextEdit', });
lyr_nohealthinsurance_6.set('fieldImages', {'DP03_0099E': 'TextEdit', });
lyr_healthcare_education_7.set('fieldImages', {'DP03_0042E': 'TextEdit', });
lyr_WarehouseTransportionJobs_8.set('fieldImages', {'DP03_0038E': 'TextEdit', });
lyr_meandrivingtime_9.set('fieldImages', {'DP03_0025E': 'TextEdit', });
lyr_GasElectricSolar_10.set('fieldImages', {'DP04_0063P': 'TextEdit', 'DP04_0065P': 'TextEdit', 'DP04_0069P': 'TextEdit', });
lyr_GRAPI35plus_11.set('fieldImages', {'DP04_0142E': 'TextEdit', });
lyr_MedianAge_12.set('fieldImages', {'DP05_0018E': 'TextEdit', });
lyr_SMOCAPI_13.set('fieldImages', {'DP04_0117E': 'TextEdit', });
lyr_Renters_14.set('fieldImages', {'DP04_0047P': 'TextEdit', });
lyr_ManufacturingPop_15.set('fieldImages', {'DP03_0035E': 'TextEdit', });
lyr_Asian_16.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'DP05_0072P': 'TextEdit', 'DP05_0072E': 'TextEdit', 'DP05_0033E': 'TextEdit', 'DP03_0035E': 'TextEdit', 'DP03_0035P': 'TextEdit', 'DP04_0063E': 'TextEdit', 'DP04_0063P': 'TextEdit', 'DP04_0065E': 'TextEdit', 'DP04_0065P': 'TextEdit', 'DP04_0069E': 'TextEdit', 'DP04_0069P': 'TextEdit', 'DP04_0058P': 'TextEdit', 'DP04_0059P': 'TextEdit', 'DP04_0060P': 'TextEdit', 'DP04_0061P': 'TextEdit', });
lyr_priority_development_areas_pba2050plus_17.set('fieldImages', {'county': 'TextEdit', 'jurisdicti': 'TextEdit', 'pda_name': 'TextEdit', });
lyr_priority_production_areas_current_18.set('fieldImages', {'globalid': 'TextEdit', 'county': 'TextEdit', 'jurisdicti': 'TextEdit', 'ppa_name': 'TextEdit', 'acres': 'TextEdit', });
lyr_california_refineries_19.set('fieldImages', {'name': '', });
lyr_APEN_20.set('fieldImages', {'id': 'TextEdit', 'APEN': 'TextEdit', });
lyr_CarsAvailable_1.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'DP05_0072P': 'no label', 'DP05_0072E': 'no label', 'DP05_0033E': 'no label', 'DP03_0035E': 'no label', 'DP03_0035P': 'no label', 'DP04_0063E': 'no label', 'DP04_0063P': 'no label', 'DP04_0065E': 'no label', 'DP04_0065P': 'no label', 'DP04_0069E': 'no label', 'DP04_0069P': 'no label', 'DP04_0058P': 'no label', 'DP04_0059P': 'no label', 'DP04_0060P': 'no label', 'DP04_0061P': 'no label', });
lyr_Homesbuilt20203_2.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'DP05_0072P': 'no label', 'DP05_0072E': 'no label', 'DP05_0033E': 'no label', 'DP03_0035E': 'no label', 'DP03_0035P': 'no label', 'DP04_0063E': 'no label', 'DP04_0063P': 'no label', 'DP04_0065E': 'no label', 'DP04_0065P': 'no label', 'DP04_0069E': 'no label', 'DP04_0069P': 'no label', 'DP04_0058P': 'no label', 'DP04_0059P': 'no label', 'DP04_0060P': 'no label', 'DP04_0061P': 'no label', 'DP04_0016E': 'no label', 'DP04_0016P': 'no label', 'DP04_0017E': 'no label', 'DP04_0017P': 'no label', 'DP04_0018E': 'no label', 'DP04_0018P': 'no label', 'DP04_0019E': 'no label', 'DP04_0019P': 'no label', 'DP04_0020E': 'no label', 'DP04_0020P': 'no label', 'DP04_0021E': 'no label', 'DP04_0021P': 'no label', 'DP04_0022E': 'no label', 'DP04_0022P': 'no label', 'DP04_0023E': 'no label', 'DP04_0024P': 'no label', 'DP04_0025E': 'no label', 'DP04_0025P': 'no label', 'DP04_0026E': 'header label - always visible', 'DP04_0026P': 'no label', });
lyr_Decadewmosthomesconstructed_3.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'DP05_0072P': 'no label', 'DP05_0072E': 'no label', 'DP05_0033E': 'no label', 'DP03_0035E': 'no label', 'DP03_0035P': 'no label', 'DP04_0063E': 'no label', 'DP04_0063P': 'no label', 'DP04_0065E': 'no label', 'DP04_0065P': 'no label', 'DP04_0069E': 'no label', 'DP04_0069P': 'no label', 'DP04_0058P': 'no label', 'DP04_0059P': 'no label', 'DP04_0060P': 'no label', 'DP04_0061P': 'no label', 'DP04_0016E': 'no label', 'DP04_0016P': 'no label', 'DP04_0017E': 'no label', 'DP04_0017P': 'no label', 'DP04_0018E': 'no label', 'DP04_0018P': 'no label', 'DP04_0019E': 'no label', 'DP04_0019P': 'no label', 'DP04_0020E': 'no label', 'DP04_0020P': 'no label', 'DP04_0021E': 'no label', 'DP04_0021P': 'no label', 'DP04_0022E': 'no label', 'DP04_0022P': 'no label', 'DP04_0023E': 'no label', 'DP04_0024P': 'no label', 'DP04_0025E': 'no label', 'DP04_0025P': 'no label', 'DP04_0026E': 'no label', 'DP04_0026P': 'no label', });
lyr_PerCapitaIncome_4.set('fieldLabels', {'DP03_0088E': 'no label', });
lyr_HouseholdIncomeMode_5.set('fieldLabels', {'DP03_0052E': 'no label', 'DP03_0052P': 'no label', 'DP03_0053E': 'no label', 'DP03_0053P': 'no label', 'DP03_0054E': 'no label', 'DP03_0054P': 'no label', 'DP03_0055E': 'no label', 'DP03_0055P': 'no label', 'DP03_0056E': 'no label', 'DP03_0056P': 'no label', 'DP03_0057E': 'no label', 'DP03_0057P': 'no label', 'DP03_0058E': 'no label', 'DP03_0058P': 'no label', 'DP03_0059E': 'no label', 'DP03_0059P': 'no label', 'DP03_0060E': 'no label', 'DP03_0060P': 'no label', 'DP03_0061E': 'no label', 'DP03_0061P': 'no label', });
lyr_nohealthinsurance_6.set('fieldLabels', {'DP03_0099E': 'no label', });
lyr_healthcare_education_7.set('fieldLabels', {'DP03_0042E': 'no label', });
lyr_WarehouseTransportionJobs_8.set('fieldLabels', {'DP03_0038E': 'header label - always visible', });
lyr_meandrivingtime_9.set('fieldLabels', {'DP03_0025E': 'no label', });
lyr_GasElectricSolar_10.set('fieldLabels', {'DP04_0063P': 'no label', 'DP04_0065P': 'no label', 'DP04_0069P': 'no label', });
lyr_GRAPI35plus_11.set('fieldLabels', {'DP04_0142E': 'no label', });
lyr_MedianAge_12.set('fieldLabels', {'DP05_0018E': 'no label', });
lyr_SMOCAPI_13.set('fieldLabels', {'DP04_0117E': 'no label', });
lyr_Renters_14.set('fieldLabels', {'DP04_0047P': 'header label - visible with data', });
lyr_ManufacturingPop_15.set('fieldLabels', {'DP03_0035E': 'header label - visible with data', });
lyr_Asian_16.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'DP05_0072P': 'header label - always visible', 'DP05_0072E': 'header label - visible with data', 'DP05_0033E': 'no label', 'DP03_0035E': 'no label', 'DP03_0035P': 'no label', 'DP04_0063E': 'no label', 'DP04_0063P': 'no label', 'DP04_0065E': 'no label', 'DP04_0065P': 'no label', 'DP04_0069E': 'no label', 'DP04_0069P': 'no label', 'DP04_0058P': 'no label', 'DP04_0059P': 'no label', 'DP04_0060P': 'no label', 'DP04_0061P': 'no label', });
lyr_priority_development_areas_pba2050plus_17.set('fieldLabels', {'county': 'no label', 'jurisdicti': 'no label', 'pda_name': 'no label', });
lyr_priority_production_areas_current_18.set('fieldLabels', {'globalid': 'no label', 'county': 'no label', 'jurisdicti': 'no label', 'ppa_name': 'no label', 'acres': 'no label', });
lyr_california_refineries_19.set('fieldLabels', {'name': 'no label', });
lyr_APEN_20.set('fieldLabels', {'id': 'no label', 'APEN': 'no label', });
lyr_APEN_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});