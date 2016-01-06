/*
    The purpose of Entity Classes is to allow your
    app to have reusable business logic, code for working with products
    or vendors for example.
    Instances of entity classes are created with the new keyword and
    multiple instances can be defined. For example, you can create an
    array of product objects.
    Angular Framework is not aware of entity classes so it cannot
    use dependency injection to inject entity classes.

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
