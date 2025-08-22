var size = 0;
var placement = 'point';

var style_nohealthinsurance_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("DP03_0099E");
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
    if (value >= 0.000000 && value <= 77.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,245,240,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 77.000000 && value <= 159.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,227,214,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 159.000000 && value <= 249.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,198,175,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 249.000000 && value <= 352.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,164,134,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 352.000000 && value <= 468.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,129,97,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 468.000000 && value <= 601.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,93,66,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 601.000000 && value <= 756.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,55,42,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 756.000000 && value <= 951.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(204,25,29,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 951.000000 && value <= 1242.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(169,16,22,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1242.000000 && value <= 1983.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(103,0,13,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
