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

module app.productDetail {
    interface IProductDetailModel {
        title: string;
        // The product type is defined by the interface
        // we created earlier. The view can bind to the
        // properties of that product.
        product: app.domain.IProduct;
    }
    
    // This controller has to figure out which particular product
    // to get. The route URL fragment identifier has the product ID 
    // of the product we want to display in the view. We'll pull the
    // ID from the route URL. Angular route provider has $routeParams,
    // which allows us to pull parameters from the route URL.
    // First, we need an interface with appropriate extension to define 
    // the parameters we want $routeParams to retrieve. 
    interface IProductParams extends ng.route.IRouteParamsService {
        // The below property MUST exactly match the name of the route
        // parameter in app.ts.
        productId: number;
    }
    
    // No export keyword is necessary because only angular will use
    // this class. No other code calls this class directly.
    class ProductDetailCtrl implements IProductDetailModel {
        title: string;
        product: app.domain.IProduct;
        
        // Think about what service(s) need to be injected into this controller.
        // In this case, we need the data to get the product to display and
        // we need to display a particular product based on its ID, hence
        // injecting the data access service and $routeParams.
        static $inject = ["$routeParams", "dataAccessService"];
        constructor(private $routeParams: IProductParams,
                    private dataAccessService: app.common.DataAccessService) {
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
            productResource.get({productId: id}, 
                (data: app.domain.IProduct) => {
                this.product = data;
            });
        }
    }
    angular
        .module("productManagement")
        .controller("ProductDetailCtrl", ProductDetailCtrl);
}