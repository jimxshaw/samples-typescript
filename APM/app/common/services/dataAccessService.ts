/*
    Building a Service with TypeScript:
    Insert a TypeScript module
    Define a Service interface
    Create the Service class
    Register the Service with Angular
        - either as a factory or as a service 
*/

module app.common {
    interface IDataAccessService {
        getProductResource() : ng.resource.IResourceClass<IProductResource>
    }
    
    // Since we're identifying the interface for the
    // $resource returned from our service, we need all
    // the properties and methods required for a $resource
    // object. Such as GET to get one project, QUERY to get a
    // set of products and SAVE to save product data.
    // We don't need to write them because they're already in the
    // angular-resource.d.ts file, which we can extend.
    // IResource utilizes generics so you have to put in the object type.
    // So in this case, it uses product objects that conform to the 
    // IProduct interface.
    interface IProductResource 
        extends ng.resource.IResource<app.domain.IProduct> {
        
    }
    
    export class DataAccessService implements IDataAccessService {
        
        // The private keyword allows TypeScript to automatically generate
        // a private $resource property.
        // To ensure we're safe from minification, we'll use Angular's $inject.
        // That allows us to define an array containing the names of the services
        // to inject. Also, $inject must be a property of the class, not a property
        // of an instance of the class, hence the static keyword in front.
        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) {
            
        }
        
        // This method returns the $resource object that specifies the URL
        // to our HTTP service. IResourceClass is a generic interface and the
        // type we place in it is the type we get back from the HTTP service call.
        getProductResource() : ng.resource.IResourceClass<IProductResource> {
            return this.$resource("/api/products/:productId");
        }
    }
    
    // Register the service with the Angular module. Note that we registered
    // using the "Service" pattern, instead of the "Factory" pattern. The
    // "Service" pattern more closely resembles TypeScript syntax.
    angular
        .module("common.services")
        .service("dataAccessService", DataAccessService);
        // First argument is the name of the service being injected.
        // Second argument is the reference to the service class define above.
        
}



