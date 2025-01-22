// Adding variables for checkboxes 
var attic = L.geoJson(attic, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#FFFFFF',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b>
                <br>Attic type: ${props.attic_type}<br>
            `
        layer.bindTooltip(popup, {
            className: 'tool-Informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFFFFF'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFFFFF'
            });
        });
    }
})

var loft = L.geoJson(loft, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#FFFFFF',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b>
                <br>Attic type: ${props.attic_type}<br>
            `
        layer.bindTooltip(popup, {
            className: 'tool-Informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFFFFF'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFFFFF'
            });
        });
    }
})

var garret = L.geoJson(garret, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#808080',
            weight: 1,
            fillColor: '#FFFFFF',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <b>${props.Informant}</b>
                <br>Attic type: ${props.attic_type}<br>
            `
        layer.bindTooltip(popup, {
            className: 'tool-Informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFFFFF'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#FFFFFF'
            });
        });
    }
})

/// Mantel
var mantel = L.geoJson(mantel, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#0D98BA',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <br>Attic type: ${props.mantel}<br>
            `
        layer.bindTooltip(popup, {
            className: 'tool-Informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#0D98BA'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#0D98BA'
            });
        });
    }
})

var mantelboard = L.geoJson(mantelboard, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#0D98BA',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <br>Attic type: ${props.mantel}<br>
            `
        layer.bindTooltip(popup, {
            className: 'tool-Informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#0D98BA'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#0D98BA'
            });
        });
    }
})

var mantelpiece = L.geoJson(mantelpiece, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#0D98BA',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <br>Attic type: ${props.mantel}<br>
            `
        layer.bindTooltip(popup, {
            className: 'tool-Informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#0D98BA'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#0D98BA'
            });
        });
    }
})

var mantelshelf = L.geoJson(mantelshelf, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            color: '#1f78b4',
            weight: 1,
            fillColor: '#0D98BA',
            fillOpacity: .8,
            radius: 10
        });
    },
    onEachFeature: function (feature, layer) {
        const props = feature.properties
        const popup = `
                <br>Attic type: ${props.mantel}<br>
            `
        layer.bindTooltip(popup, {
            className: 'tool-Informant'
        });

        layer.on('mouseover', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#0D98BA'
            });
        });
        layer.on('mouseout', function () {
            // code goes in here
            layer.setStyle({
                fillColor: '#0D98BA'
            });
        });
    }
})