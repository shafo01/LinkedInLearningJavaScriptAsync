
/**
 * Call JavaScript Method setTimeout
 * setTimeout took two parameters:
 * function - in this case we created an asynchronous function
 * using arrow syntax
 */

console.log("One");
setTimeout(() => {
    console.log("Two - Asynchronous");
}, 5000);

console.log("Two");