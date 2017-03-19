var app = angular.module("MyNotepad", []);
app.constant("baseUrl", "http://localhost:2403/records/");
app.controller("MyNotepadCntrl", function ($scope, $http, baseUrl) {
    $scope.files = [];
    $scope.newFiles = {};
    $scope.curFile = {};
    $scope.showSave = false;
    $scope.showNew = true
    $scope.test = 1;

    $scope.getItems = function () {
        $scope.showSave = false;
        $scope.showNew = true;
        var promise = $http.get(baseUrl);
        promise.then(fulfilled, rejected);
    }

    $scope.newRecord = function (file) {
        // var record = {name: name, text: text};
        var promise = $http.post(baseUrl, file);
        promise.then(inserted, rejected);
    }

    $scope.deleteRec = function (file) {
        $scope.curFile = file;
        var promise = $http({
            method: "DELETE",
            url: baseUrl + file.id
        });
        promise.then(deleted, rejected);
    }

    $scope.editRec = function (file) {
        $scope.showSave = true;
        $scope.showNew = false;
        $scope.newFiles = file;
    }

    $scope.saveRecord = function (file) {
        $scope.curFile = file;
        var promise = $http({
            method: "PUT",
            url: baseUrl + file.id,
            data: file
        });
        promise.then(putted, rejected);
    }

    function fulfilled(response) {
        // $scope.files = JSON.parse(response.data); // data - данные запроса
        $scope.files = response.data;
        $scope.newFiles = {};
    }

    function rejected(error) {
        console.error(error.status);
        console.error(error.statusText);
    }

    function inserted(response) {
        // $scope.files = JSON.parse(response.data); // data - данные запроса
        $scope.files.push(response.data);
        $scope.newFiles = {};
    }

    function deleted() {
        $scope.files.splice($scope.files.indexOf($scope.curFile), 1);
        $scope.newFiles = {};
    }

    function putted(response){
        $scope.getItems();
        $scope.newFiles = {};
    }

    $scope.getItems();
});
