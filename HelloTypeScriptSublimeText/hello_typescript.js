var HelloTypeScript = (function () {
    function HelloTypeScript(message) {
        this.message = message;
    }
    return HelloTypeScript;
}());
var hello = new HelloTypeScript("Hello TypeScript for Sublime!");
console.log(hello.message);
console.log("Hello Sublime!");
