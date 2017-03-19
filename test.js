describe("Controller Test", function () {

    // Arrange
    var mockScope = {};
    var controller;

    // (angular.mock.module("exampleApp") используется для загрузки модуля "exampleApp"
    beforeEach(angular.mock.module("MyNotepad"));

    // angular.mock.inject предоставляет возможность использования DI в тестах
    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        // создание нового scope
        mockScope = $rootScope.$new();

        // сервис $controller испольльзуется для инстанциирования объекта контроллера
        // метод принимает 2 аргумента имя контроллера и объект содержащий свойства, которые используются для разрешения зависимостей
        controller = $controller("MyNotepadCntrl", {
            $scope: mockScope
        });
    }));

    // Act and Assess
    it("Создание свойства counter", function () {
        // Если контроллер работает правильно, то после его создания будет содержать значение counter = 0
        expect(mockScope.test).toEqual(1);
    })
    // it("Инкримент свойства", function () {
    //     // после запуска функции incrementCounter значение счетчика должно быть равным 1
    //     mockScope.incrementCounter();
    //     expect(mockScope.counter).toEqual(1);
    // });
});