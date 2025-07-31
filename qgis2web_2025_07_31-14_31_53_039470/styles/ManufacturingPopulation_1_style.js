var size = 0;
var placement = 'point';

var style_ManufacturingPopulation_1 = function(feature, resolution){
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
    if (value >= 0.000000 && value <= 27.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 27.000000 && value <= 55.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(242,244,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 55.000000 && value <= 82.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(228,233,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 82.000000 && value <= 108.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,222,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 108.000000 && value <= 135.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(201,211,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 135.000000 && value <= 163.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(188,200,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 163.000000 && value <= 192.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(174,189,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 192.000000 && value <= 220.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(161,178,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 220.000000 && value <= 250.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(148,167,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 250.000000 && value <= 283.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(134,156,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 283.000000 && value <= 321.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(121,146,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 321.000000 && value <= 364.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(107,135,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 364.000000 && value <= 412.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(94,124,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 412.000000 && value <= 466.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(81,113,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 466.000000 && value <= 526.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(67,102,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 526.000000 && value <= 605.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(54,91,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 605.000000 && value <= 725.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(40,80,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 725.000000 && value <= 885.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(27,69,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 885.000000 && value <= 1220.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(13,58,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1220.000000 && value <= 2547.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,47,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
