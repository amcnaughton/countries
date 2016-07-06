(function () {
    'use strict';

    angular
        .module('app')
        .controller('countriesCtrl', countriesCtrl);

    countriesCtrl.$inject = ['geonames', 'url'];

    // list all countries
    function countriesCtrl(geonames, url) {

        var vm = this;

        geonames.countryInfo()
            .then(function (res) {
                vm.countries = res.data;
            });

        // fires when user selects a country
        vm.setSelectedCountry = url.viewCountry;
    }
})();
