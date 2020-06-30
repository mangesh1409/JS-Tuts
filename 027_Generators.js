console.log('Generators');
// Generators in JavaScript
// 1 - 1B

function* numbersGen() {
    let i = 0;

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    // while (true) {
    //     yield i++;
    //     // yield (i++).toString();
    // }
}

const gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);