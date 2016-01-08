/*
    1) Create the angular controller ts file.
    2) Add the script with the src attribute pointing to the
       compiled js file of the same name in the html file.
    3) Create the TypeScript module because it will put an
       IIFE around the compiled JavaScript. TS module also ensures
       the interfaces and classes within the angular module aren't
       in the global namespace.
    4) Add the interface. This defines the properties and methods our
       controller class will expose and implement.
    5) Add the class that implements the above interface.
    6) Create the constructor within the class.
    7) Inject any additional services.
    8) Register the class with the main angular module.
*/
var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        // No export keyword is necessary because only angular will use
        // this class. No other code calls this class directly.
        var ProductDetailCtrl = (function () {
            function ProductDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product Detail";
                // This is the retrieved product ID.
                var id = $routeParams.productId;
                var productResource = dataAccessService.getProductResource();
                // The productResource uses .get() instead of .query() because
                // we want to retrieve 1 product as opposed to an array of products.
                // The first parameter of the .get method is an object specifying
                // any parameters that we want to pass to the .get method.
                // The parameters in the object would be defined in dataAccessService.ts
                // getProductResource method. In this case, it'd be a single parameter 
                // productId set to the above id we retrieved. Again, the parameter name
                // MUST match the name in dataAccess.Service.ts.
                // This productId object parameter name does not necessarily have to
                // match the interface property productId name above. It's simply coincidence
                // in this case. 
                productResource.get({ productId: id }, function (data) {
                    _this.product = data;
                });
            }
            // Think about what service(s) need to be injected into this controller.
            // In this case, we need the data to get the product to display and
            // we need to display a particular product based on its ID, hence
            // injecting the data access service and $routeParams.
            ProductDetailCtrl.$inject = ["$routeParams", "dataAccessService"];
            return ProductDetailCtrl;
        })();
        angular
            .module("productManagement")
            .controller("ProductDetailCtrl", ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
