function printRectangle(n) {
    function printStars(count = n) {
        console.log("*" +
            " *".repeat(count-1));
    }
    for (let i=1; i<=n; i++)
        printStars();
}

printRectangle([1]);
console.log();
console.log();
printRectangle([2]);
console.log();
console.log();
printRectangle([5]);
console.log();
console.log();
printRectangle(['*']);
console.log();
console.log();
printRectangle([]);

