angular.module('app', ['arrayService']).controller('mainController', function (TestArray) {
    var vm = this;
    TestArray.get()
        .success(function (data) {
            vm.array = data;
        });
});

angular.module('arrayService', [])

    .factory('TestArray', function ($http) {

        var arrayFactory = {};

        arrayFactory.get = function () {
            return $http.get('/api');
        };
        return arrayFactory;

    });
