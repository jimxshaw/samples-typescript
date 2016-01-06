// TypeScript modules are NOT the same as Angular modules.
// TypeScript modules are similar to C# namespaces.
// Interfaces and classes within a ts module are local to that
// module. TypeScript modules provide code encapsulation.
// It keeps the resulting output functions out of the global namespace.
// If any other module needs access to this module's members
// then place the keyword export in front of the member signature.

module app.productList {
    // The interface identifies the list of properties
    // we intend to expose to the view.
    interface IProductListModel {
        title: string;
        showImage: boolean;
        // Whenever the type isn't known, the any keyword can be used.
        // However, best practices state a specific type should be used.
        //products: any[];
        products: app.domain.IProduct[]; // From product.ts
        
        toggleImage(): void;     
    }

    // The controller class implements the interface properties
    // exposed to the view and implements the interface methods for 
    // the actions required by the view.
    class ProductListCtrl implements IProductListModel {
        title: string;
        showImage: boolean;
        //products: any[];
        products: app.domain.IProduct[];
        
        constructor() {
            this.title = "Product List";
            this.showImage = false;
            this.products = [
                {
                    "productId": 1,
                    "productName": "Leaf Rake",
                    "productCode": "GDN-0011",
                    "releaseDate": new Date(2009, 2, 19),
                    "description": "Leaf rake with 48-inch wooden handle.",
                    "price": 19.95,
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                {
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": new Date(2010, 2, 18),
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
                {
                    "productId": 5,
                    "productName": "Hammer",
                    "productCode": "TBX-0048",
                    "releaseDate": new Date(2013, 4, 21),
                    "description": "Curved claw steel hammer",
                    "price": 8.99,
                    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                }
            ];
            var newProduct = new app.domain.Product(3, "Saw", "TBX-002",
                                                    new Date(2015, 5, 21), 18.99,
                                                    "18-inch alloy saw",
                                                    "https://openclipart.org/image/800px/svg_to_png/27070/egore911-saw.png");
            
            newProduct.price = newProduct.calculateDiscount(10);
            this.products.push(newProduct);
        }
        
        toggleImage(): void {
            this.showImage = !this.showImage;
        }
    }

    // Controllers have to be registered with an angular module.
    // The registration code has to be after the class is defined.
    // The reason is that the compiled .js class output results in an
    // IIFE. If the IIFE doesn't run prior to registration then an error
    // occurs.
    angular
        .module("productManagement")
        .controller("ProductListCtrl", ProductListCtrl);
}