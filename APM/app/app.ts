// Modules keep Angular apps modularized. There are usually
// one main module and other separate modules for common code,
// such as custom services. With large apps, we could even
// divide up modules based on functionality. For this APM app,
// we could have a module for pricing options or one for tracking
// vendors.
// Each controller and service must be registered with a module.

module app {
    // The mock resource dependency is placed here. When you're ready
    // to replace the mocking service with a real service, simply remove
    // this dependency. The HTTP requests will no longer be caught by the
    // mocking service and will instead be processed by your real HTTP
    // web service.
    // To use the data access service, add the Angular module to the array of
    // module dependencies.
    var main = angular.module("productManagement", [
                                "ngRoute",
                                "common.services",
                                "productResourceMock"]);
                                
    // By adding a variable to the Angular module, we can easily configure it.
    // We wouldn't have to look up the module.
    main.config(routeConfig);
    
    // Here's the route configuration void function that defines our routes.
    // We have to inject the $routeProvider, of type IRouteProvider,
    // in order to configure our routes.
    // $inject is used to specify the route parameter. This ensures the
    // dependency injection works properly, even after minification. 
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void {
        
        $routeProvider
            // When has two parameters, a string path and a route object.
            // When productList route is activated, the productListView is
            // displayed and the ProductListCtrl is loaded.
            .when("/productList", {
                templateUrl: "/app/products/productListView.html",
                controller: "ProductListCtrl as vm"
            })
            .when("/productDetail/:productId", {
                templateUrl: "/app/products/productDetailView.html",
                controller: "ProductDetailCtrl as vm"
            })
            // If there's anything other than the routes defined above,
            // the code will route to the product list default.
            .otherwise("/productList");
    } 
}

