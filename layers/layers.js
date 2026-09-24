ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:23835").setExtent([344455.133402, 659960.223133, 349016.994953, 663324.944033]);
var wms_layers = [];

var format_StatusHak_0 = new ol.format.GeoJSON();
var features_StatusHak_0 = format_StatusHak_0.readFeatures(json_StatusHak_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:23835'});
var jsonSource_StatusHak_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StatusHak_0.addFeatures(features_StatusHak_0);
var lyr_StatusHak_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StatusHak_0, 
                style: style_StatusHak_0,
                popuplayertitle: 'Status Hak',
                interactive: true,
    title: 'Status Hak<br />\
    <img src="styles/legend/StatusHak_0_0.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/StatusHak_0_1.png" /> Hak Milik<br />\
    <img src="styles/legend/StatusHak_0_2.png" /> Hak Pakai Lain<br />\
    <img src="styles/legend/StatusHak_0_3.png" /> Hak Pakai Pemerintah Kota<br />\
    <img src="styles/legend/StatusHak_0_4.png" /> Hak Wakaf<br />\
    <img src="styles/legend/StatusHak_0_5.png" /> NIS<br />' });

lyr_StatusHak_0.setVisible(true);
var layersList = [lyr_StatusHak_0];
lyr_StatusHak_0.set('fieldAliases', {'Kode Wilayah': 'Kode Wilayah', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'NIB': 'NIB', 'Tipe Hak': 'Tipe Hak', 'No Hak': 'No Hak', 'Luas': 'Luas', 'Pemilik': 'Pemilik', });
lyr_StatusHak_0.set('fieldImages', {'Kode Wilayah': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'NIB': 'TextEdit', 'Tipe Hak': 'TextEdit', 'No Hak': 'TextEdit', 'Luas': 'TextEdit', 'Pemilik': 'TextEdit', });
lyr_StatusHak_0.set('fieldLabels', {'Kode Wilayah': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', 'NIB': 'inline label - always visible', 'Tipe Hak': 'inline label - always visible', 'No Hak': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Pemilik': 'inline label - always visible', });
lyr_StatusHak_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});