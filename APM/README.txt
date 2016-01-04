Angular 2.0 with TypeScript
Recommended sequence of steps

1) Create Angular Module with TypeScript. This is typically called app.ts.

2) Create Angular Controller with TypeScript. First, create an interface
   that blueprints the members that will be implemented later. Next, create
   a class that implements the interface with interface member implementations.
   Be sure to add a constructor in the class as well. If a service needs to be
   injected, such as a data access service, then pass it into the constructor.

3) Create the controller registration code but be sure to place it below the
   controller class.

4) Compile the .ts file with SHIFT+CMD+B. VS Code will output a cooresponding .js
   file with the same name as the compiled .ts file.