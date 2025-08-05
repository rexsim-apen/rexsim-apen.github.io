var size = 0;
var placement = 'point';

var style_PerCapitaIncome_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("DP03_0088E");
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
    if (value >= 0.000000 && value <= 20716.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,245,240,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 20716.000000 && value <= 30845.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,227,214,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 30845.000000 && value <= 41097.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,198,175,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 41097.000000 && value <= 52297.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,164,134,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 52297.000000 && value <= 65342.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,129,97,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 65342.000000 && value <= 80771.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,93,66,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 80771.000000 && value <= 99984.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,55,42,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 99984.000000 && value <= 124070.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(204,25,29,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 124070.000000 && value <= 160989.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(169,16,22,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 160989.000000 && value <= 241273.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(103,0,13,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
