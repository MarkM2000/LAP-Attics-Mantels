// Adding variables for checkboxes 
/// Pan variables
var frying_pan = L.geoJson(frying_pan, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#5a5247',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Pan type: ${props.frying_pan}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
    }
})

var fry_pan = L.geoJson(fry_pan, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#5a5247',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Pan type: ${props.frying_pan}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#5a5247'
            });
        });
    }
})

var spider = L.geoJson(spider, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#1a0c20',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Pan type: ${props.frying_pan}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#1a0c20'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#1a0c20'
            });
        });
    }
})

var iron_skillet = L.geoJson(iron_skillet, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#7A6A58',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Pan type: ${props.frying_pan}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#7A6A58'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#7A6A58'
            });
        });
    }
})

var skillet = L.geoJson(skillet, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#7A6A58',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Pan type: ${props.frying_pan}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#7A6A58'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#7A6A58'
            });
        });
    }
})

/// Fence variables
var board_fence = L.geoJson(board_fence, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#7A6A58',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Pan type: ${props.picket_fence}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#7A6A58'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#7A6A58'
            });
        });
    }
})

var garden_fence = L.geoJson(garden_fence, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#7A6A58',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Pan type: ${props.picket_fence}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#7A6A58'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#7A6A58'
            });
        });
    }
})