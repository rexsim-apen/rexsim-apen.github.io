var size = 0;
var placement = 'point';

var style_ManufacturingPop_7 = function(feature, resolution){
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
        fill: new ol.style.Fill({color: 'rgba(255,255,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 59.000000 && value <= 115.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,232,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 115.000000 && value <= 175.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(198,209,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 175.000000 && value <= 242.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(170,186,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 242.000000 && value <= 320.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(142,163,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 320.000000 && value <= 419.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(113,139,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 419.000000 && value <= 542.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(85,116,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 542.000000 && value <= 725.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(57,93,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 725.000000 && value <= 1220.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(28,70,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1220.000000 && value <= 2547.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,47,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
