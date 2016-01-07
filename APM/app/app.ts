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
    angular.module("productManagement", ["productResourceMock"]);
}