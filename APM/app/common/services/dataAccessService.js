/*
    Building a Service with TypeScript:
    Insert a TypeScript module
    Define a Service interface
    Create the Service class
    Register the Service with Angular
        - either as a factory or as a service
*/
var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            // This method returns the $resource object that specifies the URL
            // to our HTTP service. IResourceClass is a generic interface and the
            // type we place in it is the type we get back from the HTTP service call.
            DataAccessService.prototype.getProductResource = function () {
                return this.$resource("/api/products/:productId");
            };
            // The private keyword allows TypeScript to automatically generate
            // a private $resource property.
            // To ensure we're safe from minification, we'll use Angular's $inject.
            // That allows us to define an array containing the names of the services
            // to inject. Also, $inject must be a property of the class, not a property
            // of an instance of the class, hence the static keyword in front.
            DataAccessService.$inject = ["$resource"];
            return DataAccessService;
        })();
        common.DataAccessService = DataAccessService;
        // Register the service with the Angular module. Note that we registered
        // using the "Service" pattern, instead of the "Factory" pattern. The
        // "Service" pattern more closely resembles TypeScript syntax.
        angular
            .module("common.services")
            .service("dataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
