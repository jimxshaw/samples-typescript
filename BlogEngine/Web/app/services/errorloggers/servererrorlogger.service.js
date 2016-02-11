var app;
(function (app) {
    var services;
    (function (services) {
        var errorLoggers;
        (function (errorLoggers) {
            'use strict';
            var ServerErrorLogger = (function () {
                function ServerErrorLogger() {
                }
                ServerErrorLogger.prototype.log = function (error) { };
                return ServerErrorLogger;
            })();
        })(errorLoggers = services.errorLoggers || (services.errorLoggers = {}));
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=servererrorlogger.service.js.map