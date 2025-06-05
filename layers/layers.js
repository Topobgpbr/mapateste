var wms_layers = [];

var format_MS_GO_0 = new ol.format.GeoJSON();
var features_MS_GO_0 = format_MS_GO_0.readFeatures(json_MS_GO_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MS_GO_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MS_GO_0.addFeatures(features_MS_GO_0);
var lyr_MS_GO_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MS_GO_0, 
                style: style_MS_GO_0,
                popuplayertitle: 'MS_GO',
                interactive: true,
                title: '<img src="styles/legend/MS_GO_0.png" /> MS_GO'
            });
var format_AREASENEVAMS_1 = new ol.format.GeoJSON();
var features_AREASENEVAMS_1 = format_AREASENEVAMS_1.readFeatures(json_AREASENEVAMS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREASENEVAMS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREASENEVAMS_1.addFeatures(features_AREASENEVAMS_1);
var lyr_AREASENEVAMS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREASENEVAMS_1, 
                style: style_AREASENEVAMS_1,
                popuplayertitle: 'AREAS ENEVA MS',
                interactive: true,
                title: '<img src="styles/legend/AREASENEVAMS_1.png" /> AREAS ENEVA MS'
            });
var format_HIDROGRAFIA_MS_2 = new ol.format.GeoJSON();
var features_HIDROGRAFIA_MS_2 = format_HIDROGRAFIA_MS_2.readFeatures(json_HIDROGRAFIA_MS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIDROGRAFIA_MS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIDROGRAFIA_MS_2.addFeatures(features_HIDROGRAFIA_MS_2);
var lyr_HIDROGRAFIA_MS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HIDROGRAFIA_MS_2, 
                style: style_HIDROGRAFIA_MS_2,
                popuplayertitle: 'HIDROGRAFIA_MS',
                interactive: true,
                title: '<img src="styles/legend/HIDROGRAFIA_MS_2.png" /> HIDROGRAFIA_MS'
            });

lyr_MS_GO_0.setVisible(true);lyr_AREASENEVAMS_1.setVisible(true);lyr_HIDROGRAFIA_MS_2.setVisible(true);
var layersList = [lyr_MS_GO_0,lyr_AREASENEVAMS_1,lyr_HIDROGRAFIA_MS_2];
lyr_MS_GO_0.set('fieldAliases', {'COD_UF': 'COD_UF', 'NOME': 'NOME', 'AREATO_KM2': 'AREATO_KM2', 'PERIM_KM': 'PERIM_KM', 'AREA_KM2': 'AREA_KM2', 'FONTE': 'FONTE', 'NOME_REG': 'NOME_REG', 'COD_REG': 'COD_REG', 'ESTADO': 'ESTADO', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_AREASENEVAMS_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HIDROGRAFIA_MS_2.set('fieldAliases', {'TIPO': 'TIPO', 'NOME': 'NOME', 'MI_CARTA': 'MI_CARTA', });
lyr_MS_GO_0.set('fieldImages', {'COD_UF': 'TextEdit', 'NOME': 'TextEdit', 'AREATO_KM2': 'TextEdit', 'PERIM_KM': 'TextEdit', 'AREA_KM2': 'TextEdit', 'FONTE': 'TextEdit', 'NOME_REG': 'TextEdit', 'COD_REG': 'TextEdit', 'ESTADO': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_AREASENEVAMS_1.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_HIDROGRAFIA_MS_2.set('fieldImages', {'TIPO': 'TextEdit', 'NOME': 'TextEdit', 'MI_CARTA': 'TextEdit', });
lyr_MS_GO_0.set('fieldLabels', {'COD_UF': 'no label', 'NOME': 'no label', 'AREATO_KM2': 'no label', 'PERIM_KM': 'no label', 'AREA_KM2': 'no label', 'FONTE': 'no label', 'NOME_REG': 'no label', 'COD_REG': 'no label', 'ESTADO': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_AREASENEVAMS_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HIDROGRAFIA_MS_2.set('fieldLabels', {'TIPO': 'no label', 'NOME': 'no label', 'MI_CARTA': 'no label', });
lyr_HIDROGRAFIA_MS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});