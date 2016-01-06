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
}



