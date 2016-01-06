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

module app.domain {
    // Use the export keyword if you want the module members to
    // be accessable from outside the class. In the case of an
    // exported class, an outside instance of it can be created.
    export interface IProduct {
        productId: number;
        productName: string;
        productCode: string;
        releaseDate: Date;
        price: number;
        description: string;
        imageUrl: string;
        //calculateDiscount(percent: number): number;
    }
    
    export class Product implements IProduct {
        // Using the public keyword in the constructor means
        // the properties are automatically declared. 
        
        constructor(public productId: number,
                    public productName: string,
                    public productCode: string,
                    public releaseDate: Date,
                    public price: number,
                    public description: string,
                    public imageUrl: string) {
            // By using the public keywork in the constructor
            // parameter, it allows us to bypass writing
            // this.productId = productId; in the constructor body.
        }
        
        calculateDiscount(percent: number): number {
            return this.price - (this.price * percent/100);
        }
    }   
}