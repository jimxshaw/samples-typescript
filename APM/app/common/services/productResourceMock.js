// We define a TypeScript modules called app.common.
var app;
(function (app) {
    var common;
    (function (common) {
        // We define an Angular module called productResourceMock.
        // This module has a dependency on ngMockE2E system module.
        var mockResource = angular
            .module("productResourceMock", ["ngMockE2E"]);
        // We call the run method to run the mockRun function.
        mockResource.run(mockRun);
        // This function sets up the HTTP responses.
        // The mockRun injects $httpBackend, the Angular mocking service.
        mockRun.$inject = ["$httpBackend"];
        function mockRun($httpBackend) {
            var products = [];
            var product;
            // This code uses the product class we created earlier. We define each new product and
            // add it to a list of products. We should see these products in the UI when this service
            // is hooked up.
            product = new app.domain.Product(1, "Leaf Rake", "GDN-0011", new Date(2009, 2, 19), 19.95, "Leaf rake with 48-inch wooden handle.", "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png");
            products.push(product);
            product = new app.domain.Product(2, "Garden Cart", "GDN-0023", new Date(2010, 2, 18), 26.95, "15 gallon capacity rolling garden cart", "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png");
            products.push(product);
            product = new app.domain.Product(3, "Saw", "TBX-002", new Date(2002, 3, 1), 16.95, "15-inch steel blade hand saw", "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png");
            products.push(product);
            product = new app.domain.Product(4, "Hammer", "TBX-0048", new Date(2013, 4, 21), 8.99, "Curved claw steel hammer", "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png");
            products.push(product);
            product = new app.domain.Product(5, "Video Game Controller", "GMG-0042", new Date(2012, 9, 25), 35.95, "Standard five-button video game controller", "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png");
            products.push(product);
            var productUrl = "/api/products";
            // When the below GET request is sent to the /api/products URL,
            // the whenGET will responsd will respond by returning the entire 
            // set of products we defined.
            $httpBackend.whenGET(productUrl).respond(products);
            // If a request is sent to /api/products with a number following a last slash,
            // we use whenGET again to locate the product and return it.
            var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
            $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
                // This function may look complicated by it simply locating the product
                // with an id that matches the parameter from the URL and returns the
                // resulting product.
                var product = { "productId": 0 };
                var parameters = url.split('/');
                var length = parameters.length;
                var id = +parameters[length - 1];
                if (id > 0) {
                    for (var i = 0; i < products.length; i++) {
                        if (products[i].productId == id) {
                            product = products[i];
                            break;
                        }
                    }
                }
                return [200, product, {}];
            });
            // Catch all for testing purposes.
            $httpBackend.whenGET(/api/).respond(function (method, url, data) {
                // This whenGET is looking for any other GET requests containing /api/.
                // This is primarily here for debugging.
                return [200, products, {}];
            });
            // Pass through any requests for application files.
            // This whenGET is looking for any requests with an URL containing 
            // the word /app/. This ensures that the mocking code won't attempt to
            // process any HTTP requests that are for our HTML fragments. 
            $httpBackend.whenGET(/app/).passThrough();
        }
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
