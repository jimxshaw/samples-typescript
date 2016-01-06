/*
    The Angular framework recognizes services so the TypeScript
    module must use an Angular module.
    With the new Angular module in place, we can register any of
    our common services with this common.services module.
*/
var app;
(function (app) {
    var common;
    (function (common) {
        angular.module("common.services", ["ngResource"]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
