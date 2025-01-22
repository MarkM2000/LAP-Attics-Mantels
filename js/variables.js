// Adding variables for checkboxes 
/// Attic variable
var attic = L.geoJson(attic, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#ffa9d0',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Gender: ${props.attic_type}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
    }
})

var loft = L.geoJson(attic, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#ffa9d0',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Gender: ${props.attic_type}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
    }
})

var garret = L.geoJson(attic, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#ffa9d0',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Gender: ${props.attic_type}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
    }
})

/// Mantel
var mantel = L.geoJson(mantel, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#ffa9d0',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Gender: ${props.mantel}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
    }
})

var mantelboard = L.geoJson(mantelboard, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#ffa9d0',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Gender: ${props.mantel}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
    }
})

var mantelpiece = L.geoJson(mantelpiece, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#ffa9d0',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Gender: ${props.mantel}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
    }
})

var mantelshelf = L.geoJson(mantelshelf, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#FFFFFF',
            weight: 1,
            fillColor: '#ffa9d0',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
					<b>${props.Informant}</b>
					<br>Gender: ${props.mantel}<br>
				`
        layer.bindTooltip(popup, {
            className: 'tool-informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#ffa9d0'
            });
        });
    }
})