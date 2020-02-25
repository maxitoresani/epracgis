var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_carto_1 = new ol.layer.Tile({
            'title': 'carto',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Municipios_2017b_2 = new ol.format.GeoJSON();
var features_Municipios_2017b_2 = format_Municipios_2017b_2.readFeatures(json_Municipios_2017b_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_2017b_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_2017b_2.addFeatures(features_Municipios_2017b_2);
var lyr_Municipios_2017b_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_2017b_2, 
                style: style_Municipios_2017b_2,
                interactive: true,
                title: '<img src="styles/legend/Municipios_2017b_2.png" /> Municipios_2017b'
            });
var format_localidadesppales_3 = new ol.format.GeoJSON();
var features_localidadesppales_3 = format_localidadesppales_3.readFeatures(json_localidadesppales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localidadesppales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localidadesppales_3.addFeatures(features_localidadesppales_3);
var lyr_localidadesppales_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_localidadesppales_3,
maxResolution:280.0446615226196,
 
                style: style_localidadesppales_3,
                interactive: true,
                title: '<img src="styles/legend/localidadesppales_3.png" /> localidades-ppales'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_carto_1.setVisible(true);lyr_Municipios_2017b_2.setVisible(true);lyr_localidadesppales_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_carto_1,lyr_Municipios_2017b_2,lyr_localidadesppales_3];
lyr_Municipios_2017b_2.set('fieldAliases', {'Municipio': 'Municipio', 'Población': 'Población', 'Prestador Principal': 'Prestador Principal', 'Usuarios': 'Usuarios', 'Prestador Secundario': 'Prestador Secundario', 'Usuarioss': 'Usuarioss', 'Población Servida Estimada': 'Población Servida Estimada', 'Cobertura': 'Cobertura', });
lyr_localidadesppales_3.set('fieldAliases', {'MUNICIPIO': 'MUNICIPIO', });
lyr_Municipios_2017b_2.set('fieldImages', {'Municipio': 'TextEdit', 'Población': 'TextEdit', 'Prestador Principal': '', 'Usuarios': 'TextEdit', 'Prestador Secundario': 'TextEdit', 'Usuarioss': 'TextEdit', 'Población Servida Estimada': 'TextEdit', 'Cobertura': 'TextEdit', });
lyr_localidadesppales_3.set('fieldImages', {'MUNICIPIO': 'TextEdit', });
lyr_Municipios_2017b_2.set('fieldLabels', {'Municipio': 'header label', 'Población': 'header label', 'Prestador Principal': 'header label', 'Usuarios': 'header label', 'Prestador Secundario': 'header label', 'Usuarioss': 'header label', 'Población Servida Estimada': 'header label', 'Cobertura': 'header label', });
lyr_localidadesppales_3.set('fieldLabels', {'MUNICIPIO': 'no label', });
lyr_localidadesppales_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});