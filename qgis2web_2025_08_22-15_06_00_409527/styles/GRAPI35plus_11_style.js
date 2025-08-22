var size = 0;
var placement = 'point';

var style_GRAPI35plus_11 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("DP04_0142E");
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
    if (value >= 0.000000 && value <= 86.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,251,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 86.000000 && value <= 175.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(226,237,248,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 175.000000 && value <= 267.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,224,241,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 267.000000 && value <= 368.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(175,209,231,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 368.000000 && value <= 480.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(137,190,220,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 480.000000 && value <= 612.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(96,166,210,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 612.000000 && value <= 784.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(62,142,196,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 784.000000 && value <= 1045.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(34,114,181,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1045.000000 && value <= 1737.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(10,84,158,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1737.000000 && value <= 4811.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(8,48,107,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
