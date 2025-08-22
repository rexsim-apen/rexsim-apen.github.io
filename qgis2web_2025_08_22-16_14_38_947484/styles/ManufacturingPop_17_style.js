var size = 0;
var placement = 'point';

var style_ManufacturingPop_17 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("DP03_0035E");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 59.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,251,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 59.000000 && value <= 115.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(226,237,248,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 115.000000 && value <= 175.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,224,241,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 175.000000 && value <= 242.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(175,209,231,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 242.000000 && value <= 320.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(137,190,220,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 320.000000 && value <= 419.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(96,166,210,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 419.000000 && value <= 542.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(62,142,196,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 542.000000 && value <= 725.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(34,114,181,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 725.000000 && value <= 1220.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(10,84,158,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1220.000000 && value <= 2547.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(8,48,107,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
