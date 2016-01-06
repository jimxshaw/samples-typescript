/*
    Building an Entity Class
        - No Angular module needed
    Define an interface (optional)
        - Defines our intent
    Create the class
        - Implement the interface with the implements keyword
    Declare the properties
    Add the constructor function
    Implement the methods
*/
var app;
(function (app) {
    var domain;
    (function (domain) {
        var Product = (function () {
            // Using the public keyword in the constructor means
            // the properties are automatically declared. 
            function Product(productId, productName, productCode, releaseDate, price, description, imageUrl) {
                this.productId = productId;
                this.productName = productName;
                this.productCode = productCode;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
                // By using the public keywork in the constructor
                // parameter, it allows us to bypass writing
                // this.productId = productId; in the constructor body.
            }
            Product.prototype.calculateDiscount = function (percent) {
                return this.price - (this.price * percent / 100);
            };
            return Product;
        })();
        domain.Product = Product;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
