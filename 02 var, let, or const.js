/*
JavaScript Variables can be declared in 4 ways:

    1. Automatically/Using nothing
    2. var
    3. let
    4. const


    - Using var
        - "var" keyword was used in all JavaScript code from 1995 to 2015.
        - supports variable re-declaration
        - supports re-assigning of values
        - the scope of a var variable is functional scope.

    - Using let
        - "let" and const keywords were added to JavaScript in 2015.
        - does not support variable re-declaration
        - supports re-assigning of values
        - the scope of a let variable is block scope.

    - Using const
        - "const" keyword should only be used in code written for older browsers.
        - does not support variable re-declaration
        - does not support re-assigning of values
        - the scope of a const variable is block scope.

    - Using nothing


When to Use var, let, or const?

1. Always declare variables
2. Always use "const" if the value should not be changed
3. Always use "const" if the type should not be changed (Arrays and Objects)
4. Only use "let" if you can't use "const"
5. Only use "var" if you MUST support old browsers.

*/