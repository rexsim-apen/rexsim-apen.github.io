var size = 0;
var placement = 'point';

var style_SMOCAPI_15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("DP04_0117E");
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
    if (value >= 0.000000 && value <= 75.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 75.000000 && value <= 154.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,245,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 154.000000 && value <= 230.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(198,235,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 230.000000 && value <= 309.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(170,224,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 309.000000 && value <= 398.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(142,214,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 398.000000 && value <= 508.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(113,204,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 508.000000 && value <= 653.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(85,194,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 653.000000 && value <= 878.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(57,183,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 878.000000 && value <= 1489.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(28,173,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1489.000000 && value <= 2943.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,163,255,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
