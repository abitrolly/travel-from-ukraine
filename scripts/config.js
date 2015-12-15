define(function () {
	return {
		geoJsonPath: '/countries/countries.min.geo.json',
		countryNameProperty: 'name_long',
		mapInitOptions: {
			center: {lat: 50.4501, lng: 30.5234},
			zoom: 4
		},
		defaultCountryStyle: {
			fillColor: 'transparent',
			strokeWeight: 0
		}
	};
});
