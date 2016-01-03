function SayHello() {
    // let scopes a variable to the nearest enclosing block.
    // As opposed to var, which scopes a variable to the 
    // nearest function block.
    let x = "Hello world!";
    alert(x);
}