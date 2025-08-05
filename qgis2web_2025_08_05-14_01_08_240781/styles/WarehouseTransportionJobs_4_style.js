var size = 0;
var placement = 'point';

var style_WarehouseTransportionJobs_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("DP03_0038E");
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
    if (value >= 0.000000 && value <= 36.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,245,240,0.509)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 36.000000 && value <= 74.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,227,214,0.509)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 74.000000 && value <= 113.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,198,175,0.509)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 113.000000 && value <= 157.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,164,134,0.509)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 157.000000 && value <= 206.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,129,97,0.509)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 206.000000 && value <= 265.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(248,93,66,0.509)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 265.000000 && value <= 338.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,55,42,0.509)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 338.000000 && value <= 441.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(204,25,29,0.509)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 441.000000 && value <= 622.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(169,16,22,0.509)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 622.000000 && value <= 1007.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(103,0,13,0.509)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
